import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const webRoot = path.join(root, 'web');
const failures = [];

function check(condition, message) {
    if (!condition) failures.push(message);
}

for (const file of fs.readdirSync(path.join(webRoot, 'pages')).filter((name) => name.endsWith('.html'))) {
    const html = fs.readFileSync(path.join(webRoot, 'pages', file), 'utf8');
    const scripts = html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g);
    for (const [index, match] of Array.from(scripts).entries()) {
        try {
            new Function(match[1]);
        } catch (error) {
            failures.push(`${file} 的第 ${index + 1} 段脚本语法错误：${error.message}`);
        }
    }
}

const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(webRoot, 'assets', 'js', 'course-data.js'), 'utf8'), sandbox);
const courses = sandbox.window.COURSES || [];
check(courses.length === 40, `课程数量应为 40，实际为 ${courses.length}`);
check(new Set(courses.map((course) => course.id)).size === courses.length, '课程 ID 必须唯一');
for (const category of sandbox.window.COURSE_CATEGORIES || []) {
    check(courses.filter((course) => course.category === category).length >= 10, `${category}应至少有 10 门课程`);
}

for (const course of courses) {
    check(course.master?.name && /^https:\/\//.test(course.master?.sourceUrl || ''), `${course.title} 缺少真实人物资料来源`);
    check(course.lessons?.length === 8, `${course.title} 应有 8 节课程`);
    check(course.quiz?.length === 5, `${course.title} 应有 5 道测试题`);

    for (const [index, lesson] of (course.lessons || []).entries()) {
        if (index < 2) {
            const parts = lesson.duration.split(':').map(Number);
            const seconds = parts[0] * 60 + parts[1];
            check(lesson.mediaType === 'microLesson' && Array.isArray(lesson.slides) && lesson.slides.length >= 6 && !lesson.locked, `${course.title} 第 ${index + 1} 节应为可播放站内微课`);
            check(seconds >= 300 && seconds <= 720, `${course.title} 第 ${index + 1} 节时长不在 5–12 分钟内`);
        } else {
            check(lesson.locked === true, `${course.title} 第 ${index + 1} 节应保持锁定`);
        }
    }

    if (course.image?.startsWith('./')) {
        check(fs.existsSync(path.join(webRoot, course.image.slice(2))), `${course.title} 的本地封面不存在`);
    }
}

if (failures.length) {
    console.error(failures.map((failure) => `- ${failure}`).join('\n'));
    process.exit(1);
}

console.log(`验证通过：${courses.length} 门课程、${courses.length * 8} 节大纲、${courses.length * 5} 道测试题。`);
