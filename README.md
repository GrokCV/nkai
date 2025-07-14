# 南开 AI 竞赛社

南开 AI 竞赛社官方平台，专注于 AI 学术竞赛、技术交流与人才培养，基于 Next.js 和 MDX 构建。

## 功能特性

- 📝 **论文精选**：精心筛选的 AI 竞赛与机器学习领域顶级会议论文，支持分类浏览
- 🎓 **学术会议**：及时更新的 AI 领域会议信息和投稿指南
- 📊 **开源数据**：AI 竞赛和机器学习高质量数据集资源
- 🏆 **技术竞赛**：最新的 AI 学术竞赛和算法竞赛信息
- 📄 **专题征稿**：相关领域期刊特刊和竞赛论文征稿通知
- 💬 **联系我们**：便捷的联系方式和反馈渠道

## 技术栈

- **Framework**: Next.js 15.3.5
- **Styling**: Tailwind CSS 4.x
- **Content**: MDX (Markdown + JSX)
- **Language**: TypeScript
- **Icons**: Heroicons (via SVG)

## 项目结构

```
nkai/
├── app/
│   ├── components/          # 可复用组件
│   │   ├── Header.tsx       # 网站头部导航
│   │   ├── Footer.tsx       # 网站页脚
│   │   ├── Layout.tsx       # 主布局组件
│   │   ├── PaperCard.tsx    # 论文卡片组件
│   │   ├── ConferenceCard.tsx # 会议卡片组件
│   │   ├── CategoryFilter.tsx # 分类过滤器
│   │   ├── CompetitionCard.tsx # 竞赛卡片组件
│   │   ├── DatasetCard.tsx  # 数据集卡片组件
│   │   └── ContentSection.tsx # 内容区域组件
│   ├── papers/              # 论文精选页面
│   │   ├── page.tsx         # 论文列表页
│   │   └── [slug]/          # 具体论文页面
│   │       ├── page.mdx     # 论文内容 (MDX)
│   │       └── layout.tsx   # 论文页面布局
│   ├── competitions/        # 技术竞赛页面
│   ├── datasets/            # 开源数据页面
│   ├── conferences/         # 学术会议页面
│   ├── special-issues/      # 专题征稿页面
│   ├── contact/             # 联系我们页面
│   ├── globals.css          # 全局样式
│   └── layout.tsx           # 根布局
├── mdx-components.tsx       # MDX 组件配置
├── next.config.ts           # Next.js 配置
└── package.json             # 项目依赖
```

## 核心组件

### 1. 布局组件

- **Header**: 响应式导航栏，包含移动端菜单
- **Footer**: 包含联系信息和社交媒体链接
- **Layout**: 整合 Header 和 Footer 的主布局

### 2. 内容组件

- **PaperCard**: 论文信息卡片，支持作者、会议、分类等信息展示
- **ConferenceCard**: 会议信息卡片，包含时间、地点、截止日期等
- **CategoryFilter**: 分类过滤器，支持桌面端和移动端不同展示
- **ContentSection**: 内容区域容器，统一的标题和网格布局

### 3. MDX 支持

项目完全支持 MDX，可以在 Markdown 中使用 React 组件：

```mdx
# 论文标题

## 摘要

这是使用 Markdown 编写的内容。

<div className="bg-blue-50 p-4 rounded-lg">
  <h4 className="font-semibold text-blue-800">重要提示</h4>
  <p className="text-blue-700">这是一个自定义的 JSX 组件</p>
</div>

### 实验结果

| 数据集 | 方法       | PSNR  | SSIM   |
| ------ | ---------- | ----- | ------ |
| Set5   | 我们的方法 | 36.54 | 0.9421 |
```

## 开发指南

### 启动开发服务器

```bash
npm run dev
```

### 添加新论文

1. 在 `app/papers/` 目录下创建新的子目录
2. 创建 `page.mdx` 文件编写论文内容
3. 可选：创建 `layout.tsx` 自定义布局

### 添加新会议

1. 在 `app/conferences/page.tsx` 中添加会议数据
2. 或创建单独的 MDX 页面提供详细信息

### 自定义样式

- 全局样式在 `app/globals.css` 中定义
- 组件样式使用 Tailwind CSS 类
- MDX 内容样式通过 `.prose` 类控制

### 响应式设计

所有组件都支持响应式设计：

- 移动端：单列布局，汉堡菜单
- 平板端：双列布局
- 桌面端：三列布局，完整导航

## 内容管理

### 论文分类

支持以下论文分类：

- 机器学习
- 深度学习
- 计算机视觉
- 自然语言处理
- 数据挖掘
- 强化学习
- 人工智能算法

### 会议类型

支持以下会议类型：

- 会议 (conference)
- 研讨会 (workshop)
- 竞赛 (competition)
- 论坛 (symposium)

## 部署

### 构建项目

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

## 贡献指南

1. Fork 项目
2. 创建特性分支
3. 提交更改
4. 推送到分支
5. 创建 Pull Request

## 许可证

MIT License

## 联系我们

- 邮箱：nkai@nankai.edu.cn
- QQ 群：123456789
- 地址：天津市南开区卫津路 94 号 南开大学
