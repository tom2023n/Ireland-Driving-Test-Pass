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
    git clone https://github.com/your-username/drivertest.git
    cd drivertest
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

本项目已经预配置为适合 GitHub Pages 部署（使用 HashRouter 和相对路径）。

1.  **准备工作**
    确保你已经将代码上传到 GitHub 仓库。

2.  **安装部署工具**
    ```bash
    npm install gh-pages --save-dev
    ```

3.  **配置部署脚本**
    在 `package.json` 的 `scripts` 部分添加：
    ```json
    "scripts": {
      "predeploy": "npm run build",
      "deploy": "gh-pages -d dist",
      ...
    }
    ```

4.  **执行部署**
    ```bash
    npm run deploy
    ```

> **注意**：本项目已配置 `vite.config.ts` 中的 `base: './'` 和 `HashRouter`，这确保了在 GitHub Pages 等静态托管服务上刷新页面不会出现 404 错误，且无需手动配置子路径。 

## 📄 许可证

MIT License
