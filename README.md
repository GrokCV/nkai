# 南开 AI 竞赛社

南开 AI 竞赛社官方平台，专注于 AI 学术竞赛、技术交流与人才培养，基于 Next.js 和 TypeScript 构建。

## 功能特性

- 🏆 **历届获奖**：展示南开 AI 竞赛社成员的优秀获奖成果，支持分类浏览和团队成员信息
- 💡 **优胜方案**：竞赛获奖的技术解决方案和代码实现，提供详细的技术文档
- 🎯 **技术竞赛**：最新的 AI 学术竞赛和算法竞赛信息，自动状态跟踪和截止时间提醒
- 👥 **团队成员**：展示社团成员信息，包括研究方向、专业技能和联系方式
- 📱 **联系我们**：便捷的联系方式和反馈渠道

## 技术栈

- **Framework**: Next.js 15.3.5
- **Styling**: Tailwind CSS 4.x
- **Content**: MDX (Markdown + JSX)
- **Language**: TypeScript
- **State Management**: React Hooks
- **Icons**: Heroicons (via SVG)
- **AirTable**: Contact us form

## 数据管理架构

### 共享数据系统

项目采用统一的数据管理架构，所有数据集中存储在 `app/data/` 目录中：

- **awards.ts**: 获奖数据，包含团队成员、获奖时间、奖项等级等信息
- **competitions.ts**: 竞赛数据，支持自动状态计算和截止时间排序
- **solutions.ts**: 解决方案数据，包含技术方案、代码链接、应用场景等
- **members.ts**: 成员数据，包含个人信息、研究方向、技能专长等

### 特色功能

1. **Featured 系统**: 每个数据项都有 `featured` 字段，控制是否在首页展示
2. **自动状态计算**: 竞赛状态根据截止时间自动计算为 `upcoming`、`ongoing`、`closed`
3. **分类过滤**: 支持多维度分类过滤，提供更好的用户体验
4. **时间排序**: 默认按结束时间倒序排列，优先显示最新内容

## 核心组件

### 1. 布局组件

- **Header**: 响应式导航栏，包含移动端汉堡菜单
- **Footer**: 包含联系信息和社交媒体链接
- **Layout**: 整合 Header 和 Footer 的主布局

### 2. 内容组件

- **PaperCard**: 获奖论文信息卡片，支持团队成员、获奖级别等信息展示
- **DatasetCard**: 解决方案卡片，包含技术方案、代码链接、应用场景等
- **CompetitionCard**: 竞赛信息卡片，包含截止时间、奖金、主办方等信息
- **CategoryFilter**: 分类过滤器，支持桌面端和移动端不同展示
- **ContentSection**: 内容区域容器，统一的标题和网格布局

### 3. 竞赛状态管理

```typescript
// 自动状态计算
export function getCompetitionStatus(
  deadline: string
): "upcoming" | "ongoing" | "closed" {
  const now = new Date();
  const deadlineDate = new Date(deadline);
  const daysDiff = Math.ceil(
    (deadlineDate.getTime() - now.getTime()) / (1000 * 3600 * 24)
  );

  if (daysDiff < 0) return "closed";
  if (daysDiff <= 30) return "ongoing";
  return "upcoming";
}
```

### 4. MDX 支持

项目完全支持 MDX，可以在 Markdown 中使用 React 组件：

```mdx
# 获奖详情

## 项目简介

这是使用 Markdown 编写的内容。

<div className="bg-blue-50 p-4 rounded-lg">
  <h4 className="font-semibold text-blue-800">重要提示</h4>
  <p className="text-blue-700">这是一个自定义的 JSX 组件</p>
</div>

### 技术方案

| 技术栈  | 描述         | 性能 |
| ------- | ------------ | ---- |
| PyTorch | 深度学习框架 | 优秀 |
| React   | 前端框架     | 流畅 |
```

## 本地预览

### 准备环境

1. 安装 [fnm](https://github.com/Schniz/fnm)
2. 在项目根目录打开终端会自动安装所需的 Node.js 版本
3. 安装依赖 `npm i`

### 启动开发服务器

```bash
npm run dev
```

## 管理内容

### 添加新获奖记录

1. 在 `app/data/awards.ts` 中添加获奖数据
2. 设置 `featured: true` 在首页展示
3. 可选：在 `app/awards/(award)` 目录下创建详细页面

### 添加新竞赛

1. 在 `app/data/competitions.ts` 中添加竞赛数据
2. 系统会自动计算竞赛状态
3. 支持按截止时间自动排序

### 添加新优胜方案

1. 在 `app/data/solutions.ts` 中添加方案数据
2. 包含技术描述、代码链接、应用场景等信息
3. 支持分类过滤和特色展示

### 自定义样式

- 全局样式在 `app/globals.css` 中定义
- 组件样式使用 Tailwind CSS 类
- MDX 内容样式通过 `.prose` 类控制

### 响应式设计

所有组件都支持响应式设计：

- 移动端：单列布局，汉堡菜单
- 平板端：双列布局
- 桌面端：三列布局，完整导航

## 部署

### 构建项目

```bash
npm run build
```

### 启动生产服务器

```bash
npm start
```

### 代码规范

- 使用 TypeScript 编写代码
- 遵循 ESLint 和 Prettier 配置
- 组件使用 PascalCase 命名
- 文件使用 camelCase 命名

## 许可证

MIT License

## 联系我们

- 📧 邮箱：nkai@nankai.edu.cn
- 💬 QQ 群：123456789
- 📍 地址：天津市南开区卫津路 94 号 南开大学
- 🌐 网站：https://nkai.nankai.edu.cn

---

_本项目由南开 AI 竞赛社开发和维护，致力于为 AI 学术竞赛提供优质的技术支持和交流平台。_
