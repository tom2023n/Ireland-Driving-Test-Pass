# 爱尔兰驾照路考助手 (Irish Driving Test Helper)

这是一个专为在爱尔兰的华人打造的驾照考试备考指南网站。旨在帮助考生清晰了解从申请理论考试到最终路考拿证的全流程，并提供热门考点的路线解析和实用技巧。

## ✨ 主要功能

*   **全流程指南**：详细解析从申请 Learner Permit 到 Full License 的每一个步骤，包含 Reduced EDT 福利申请攻略。
*   **考点路线解析**：收录 Tallaght, Dun Laoghaire 等热门考点的详细路线图、通过率数据和易错点提示。
*   **考试当天流程**：提供考试当天的详细步骤指导，从出发准备到成绩公布，助你从容应对。
*   **实用资源链接**：集成交通规则书 (Rules of the Road)、路标学习、交规问答等官方和实用工具链接。
*   **响应式设计**：完美支持手机、平板和桌面端访问，随时随地备考。

## 🛠️ 技术栈

*   **前端框架**: [React](https://reactjs.org/) (v18)
*   **构建工具**: [Vite](https://vitejs.dev/)
*   **开发语言**: [TypeScript](https://www.typescriptlang.org/)
*   **样式库**: [Tailwind CSS](https://tailwindcss.com/)
*   **路由管理**: [React Router](https://reactrouter.com/)
*   **图标库**: [Lucide React](https://lucide.dev/)

## 🚀 本地运行

1.  **克隆项目**
    ```bash
    git clone https://github.com/tom2023n/Ireland-Driving-Test-Pass.git
    cd Ireland-Driving-Test-Pass
    ```

2.  **安装依赖**
    ```bash
    npm install
    ```

3.  **启动开发服务器**
    ```bash
    npm run dev
    ```

4.  **构建生产版本**
    ```bash
    npm run build
    ```

## 📦 部署 (GitHub Pages)

本项目通过仓库内的 `docs/` 目录托管到 GitHub Pages（Settings → Pages → Source: `main` 分支 `/docs` 目录）。

`vite.config.ts` 已把构建输出目录设为 `docs/`（`outDir: 'docs'`）并开启 `emptyOutDir`，因此每次构建都会自动清理旧产物、只保留最新一套：

```bash
npm run build      # 生成 docs/
git add docs
git commit -m "chore: rebuild site"
git push           # 推送后 GitHub Pages 自动更新
```

> **注意**：本项目使用 `HashRouter` + `base: './'`，确保在 GitHub Pages 子路径下刷新页面不会 404，且无需手动配置子路径。  

## 📄 许可证

MIT License
