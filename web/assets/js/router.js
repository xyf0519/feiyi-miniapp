// 简单的单页应用路由系统
class Router {
    constructor() {
        this.routes = {};
        this.currentPage = null;
        this.init();
    }

    init() {
        // 监听浏览器前进后退
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.loadPage(e.state.page, false);
            }
        });

        // 页面加载时根据hash加载对应页面
        window.addEventListener('DOMContentLoaded', () => {
            const hash = window.location.hash.slice(1) || 'index';
            this.navigate(hash, true);
        });
    }

    // 注册路由
    register(path, pageFile) {
        this.routes[path] = pageFile;
    }

    // 导航到指定页面
    navigate(path, replace = false) {
        if (!this.routes[path]) {
            console.error(`Route not found: ${path}`);
            return;
        }

        // 更新URL
        if (replace) {
            history.replaceState({ page: path }, '', `#${path}`);
        } else {
            history.pushState({ page: path }, '', `#${path}`);
        }

        this.loadPage(path);
    }

    // 加载页面内容
    loadPage(path, addToHistory = true) {
        const pageFile = this.routes[path];
        if (!pageFile) {
            console.error(`Route not found: ${path}`);
            return;
        }

        try {
            // 使用 XMLHttpRequest 代替 fetch 以支持本地文件
            const xhr = new XMLHttpRequest();
            xhr.open('GET', pageFile, true);

            xhr.onload = () => {
                if (xhr.status === 200 || xhr.status === 0) { // 0 表示本地文件
                    const html = xhr.responseText;

                    // 解析HTML并提取body内容
                    const parser = new DOMParser();
                    const doc = parser.parseFromString(html, 'text/html');
                    const bodyContent = doc.body.innerHTML;

                    // 更新页面内容
                    document.getElementById('app').innerHTML = bodyContent;
                    this.currentPage = path;

                    // 执行页面中的脚本
                    this.executeScripts(doc);

                    // 滚动到顶部
                    window.scrollTo(0, 0);
                } else {
                    console.error(`Failed to load page: ${path}, status: ${xhr.status}`);
                }
            };

            xhr.onerror = () => {
                console.error(`Failed to load page: ${path}`);
            };

            xhr.send();

        } catch (error) {
            console.error(`Failed to load page: ${path}`, error);
        }
    }

    // 执行页面中的脚本
    executeScripts(doc) {
        const scripts = doc.querySelectorAll('script');
        scripts.forEach(script => {
            if (script.textContent) {
                try {
                    // 创建新的 script 标签并执行
                    const newScript = document.createElement('script');
                    newScript.textContent = script.textContent;
                    document.body.appendChild(newScript);
                    // 立即移除以避免重复执行
                    document.body.removeChild(newScript);
                } catch (error) {
                    console.error('Script execution error:', error);
                }
            }
        });
    }

    // 返回上一页
    back() {
        history.back();
    }
}

// 创建全局路由实例
const router = new Router();

// 注册所有路由
router.register('index', './pages/index.html');
router.register('quiz', './pages/quiz.html');
router.register('course-detail', './pages/course-detail.html');
router.register('course-list', './pages/course-list.html');
router.register('profile', './pages/profile.html');
router.register('shop', './pages/shop.html');
router.register('master-list', './pages/master-list.html');
router.register('master-detail', './pages/master-detail.html');
router.register('video-player', './pages/video-player.html');

// 全局导航函数
function navigateTo(path) {
    router.navigate(path);
}

function navigateToCourse(courseId) {
    selectCourse(courseId);
    router.navigate('course-detail');
}

function navigateToCourseList(category) {
    localStorage.setItem('feiyiCourseCategory', category || '全部');
    router.navigate('course-list');
}

function navigateToLesson(courseId, lessonIndex) {
    const course = getCourseById(courseId);
    const lesson = course.lessons[lessonIndex];
    if (!lesson || lesson.locked) return;
    selectLesson(courseId, lessonIndex);
    router.navigate('video-player');
}

function navigateToQuiz(courseId) {
    selectCourse(courseId);
    router.navigate('quiz');
}

function navigateToMaster(courseId) {
    selectCourse(courseId);
    router.navigate('master-detail');
}

function goBack() {
    router.back();
}
