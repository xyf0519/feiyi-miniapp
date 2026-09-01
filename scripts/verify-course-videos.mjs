import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, '..');
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(fs.readFileSync(path.join(root, 'web', 'assets', 'js', 'course-data.js'), 'utf8'), sandbox);

const lessons = (sandbox.window.COURSES || []).flatMap((course) =>
    course.lessons.slice(0, 2).map((lesson, index) => ({ course: course.title, index, ...lesson }))
);
const videos = new Map();
for (const lesson of lessons) {
    if (!videos.has(lesson.bvid)) videos.set(lesson.bvid, []);
    videos.get(lesson.bvid).push(lesson);
}

const wait = (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));

async function fetchVideo(bvid) {
    const url = `https://api.bilibili.com/x/web-interface/view?bvid=${encodeURIComponent(bvid)}`;
    for (let attempt = 1; attempt <= 4; attempt += 1) {
        const response = await fetch(url, {
            headers: {
                Referer: 'https://www.bilibili.com/',
                'User-Agent': 'Mozilla/5.0 (compatible; feiyi-miniapp-video-check/1.0)'
            }
        });
        if (response.ok) {
            const payload = await response.json();
            if (payload.code === 0) return payload.data;
            if (payload.code !== -412) throw new Error(`接口返回 ${payload.code}: ${payload.message}`);
        }
        if (attempt === 4) throw new Error(`HTTP ${response.status}`);
        await wait(attempt * 1200);
    }
}

const failures = [];
let checked = 0;
for (const [bvid, linkedLessons] of videos) {
    try {
        const video = await fetchVideo(bvid);
        if (video.state !== 0) failures.push(`${bvid} 当前状态为 ${video.state}`);
        for (const lesson of linkedLessons) {
            const page = (video.pages || []).find((item) => item.page === lesson.page);
            if (!page) {
                failures.push(`${lesson.course} 第 ${lesson.index + 1} 节找不到 ${bvid} 的 P${lesson.page}`);
                continue;
            }
            const [minutes, seconds] = lesson.duration.split(':').map(Number);
            const declaredSeconds = minutes * 60 + seconds;
            if (Math.abs(page.duration - declaredSeconds) > 2) {
                failures.push(`${lesson.course} 第 ${lesson.index + 1} 节标注 ${lesson.duration}，接口实际为 ${page.duration} 秒`);
            }
        }
    } catch (error) {
        failures.push(`${bvid} 检查失败：${error.message}`);
    }
    checked += 1;
    if (checked % 10 === 0 || checked === videos.size) console.log(`已检查 ${checked}/${videos.size} 个公开视频`);
    await wait(500);
}

if (failures.length) {
    console.error(failures.map((failure) => `- ${failure}`).join('\n'));
    process.exit(1);
}

console.log(`视频验证通过：${lessons.length} 节开放课程，${videos.size} 个公开视频均可访问，分P与标注时长一致。`);
