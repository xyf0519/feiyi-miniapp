# feiyi-miniapp

非遗文化传承平台静态原型。可部署版本位于 `web/`，使用原生 HTML、JavaScript、Tailwind CDN 和哈希路由，不需要构建步骤。

## 本地预览

在项目根目录执行：

```powershell
npx --yes http-server web -p 4173 -c-1
```

然后打开 <http://127.0.0.1:4173>。

## 内容校验

```powershell
node scripts/validate-web.mjs
```

校验脚本会检查课程数量、人物资料来源、视频时长、锁定章节、题库数量、本地封面以及页面脚本语法。

## 分支开发

日常功能开发在 `develop` 分支完成：

```powershell
git switch develop
git pull --rebase origin develop
git add web scripts README.md
git commit -m "描述本次修改"
git push origin develop
```

准备发布正式版本时，再把 `develop` 合并到 `main`。

## 发布到 Vercel

首次使用需在 `web/` 中执行 `vercel link`，选择当前承载 `fycc.online` 的项目。之后发布正式站点：

```powershell
cd web
npx --yes -p node@22 -p vercel@59.10.0 vercel --prod
```

Vercel 创建的 `.vercel/` 是本机项目关联信息，不应提交到 Git。
