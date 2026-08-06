# zhaojunli-homepage

青岛大学计算机科学技术学院赵俊莉教授个人学术主页。

## 页面

- Home `/`
- About `/about`
- Research `/research`
- Projects `/projects`
- Publications `/publications`
- Awards `/awards`
- Team `/team`
- News `/news`
- Contact `/contact`

## 技术栈

- React 19 + TypeScript
- Tailwind CSS 4
- Next.js 16 App Router
- ESLint + Node Test Runner
- Vercel 兼容的标准 Next.js 输出

## 本地运行

推荐使用 npm：

```bash
npm install
npm run dev
```

打开 `http://localhost:3000/`。

构建与检查：

```bash
npm run build
npm run lint
npm test
```

## Vercel 部署

- Framework Preset: `Next.js`
- Build Command: `npm run build`
- Install Command: `npm install`
- Output Directory: 留空，使用 Next.js 默认输出
- 本地生产启动: `npm run start`

将 GitHub 仓库导入 Vercel 后，可选配置 `SITE_URL` 为正式域名，用于生成社交分享元数据的绝对地址。

## 内容维护

教授资料、研究方向、项目、论文、奖励与新闻集中保存在 `content/` 中。新增论文或项目时，不需修改页面组件。

教授照片位于 `public/images/profile/`，社交分享图位于 `public/og.png`。

## 内容来源

学术信息依据《赵俊莉个人简历2026-07》整理。个人简历中未列出的团队成员、办公房间和新闻稿件没有补写。

## 项目文档

- [技术方案](docs/TECHNICAL_PLAN.md)
- [内容准备清单](docs/CONTENT_CHECKLIST.md)
