# Auk Website

Auk 官方网站，基于 Astro 构建的现代化静态网站。

## 🚀 项目简介

这是 Auk API 开发工具的官方网站项目，使用 Astro + React + Tailwind CSS 构建，提供产品介绍、文档导航、下载链接等功能。

## 📁 项目结构

```text
/
├── public/              # 静态资源文件
│   └── favicon.svg
├── src/
│   ├── assets/         # 图片、字体等资源
│   ├── components/     # React 组件
│   ├── i18n/          # 国际化配置
│   ├── layouts/       # 页面布局组件
│   ├── pages/         # 页面文件（路由）
│   └── styles/        # 全局样式
├── astro.config.mjs   # Astro 配置文件
├── package.json
└── tsconfig.json
```

## 🧞 开发命令

所有命令都在项目根目录下运行：

| 命令                   | 说明                                           |
| :-------------------- | :--------------------------------------------- |
| `npm install`         | 安装依赖                                        |
| `npm run dev`         | 启动本地开发服务器 `localhost:4321`              |
| `npm run build`       | 构建生产版本到 `./dist/`                        |
| `npm run preview`     | 本地预览构建后的网站                             |
| `npm run astro ...`   | 运行 Astro CLI 命令，如 `astro add`, `astro check` |

## 🛠️ 技术栈

- **[Astro](https://astro.build)** - 现代化静态网站生成器
- **[React](https://react.dev)** - UI 组件库
- **[Tailwind CSS](https://tailwindcss.com)** - 实用优先的 CSS 框架
- **[TypeScript](https://www.typescriptlang.org)** - 类型安全的 JavaScript

## 🌐 部署

网站部署在阿里云，通过 CI/CD 自动构建和发布。

## 📝 开发指南

1. 克隆仓库
```bash
git clone git@github.com:mamahuhu-io/auk-website.git
cd auk-website
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 访问 `http://localhost:4321` 查看网站

## 🔗 相关链接

- [Auk 主仓库](https://github.com/mamahuhu-io/auk)
- [Auk 文档](https://auk.mamahuhu.dev)
- [Astro 文档](https://docs.astro.build)

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件
