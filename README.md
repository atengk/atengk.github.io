# 阿腾技术网站 (Ateng Matrix)

<p align="center">
  <strong>⚡ 全栈架构决策矩阵 · 工业级 AI 工程底座</strong>
</p>

<p align="center">
  <a href="https://atengk.github.io">
    <img src="https://img.shields.io/badge/GitHub%20Pages-在线主页-blue?style=flat-square&logo=github" alt="在线主页" />
  </a>
  <a href="https://react.dev">
    <img src="https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react" alt="React 19" />
  </a>
  <a href="https://vite.dev">
    <img src="https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite" alt="Vite 6" />
  </a>
  <a href="https://tailwindcss.com">
    <img src="https://img.shields.io/badge/TailwindCSS-v4-38B2AC?style=flat-square&logo=tailwindcss" alt="Tailwind CSS v4" />
  </a>
  <a href="https://www.typescriptlang.org">
    <img src="https://img.shields.io/badge/TypeScript-5.7-3178C6?style=flat-square&logo=typescript" alt="TypeScript 5.7" />
  </a>
  <a href="https://github.com/atengk">
    <img src="https://img.shields.io/badge/Author-Ateng-emerald?style=flat-square" alt="作者" />
  </a>
  <a href="https://www.apache.org/licenses/LICENSE-2.0">
    <img src="https://img.shields.io/badge/License-Apache_2.0-blue.svg?style=flat-square" alt="开源许可" />
  </a>
</p>

---

## 🌟 核心设计与视觉体验

阿腾技术网站（Ateng Matrix）是一套专为极客开发者量身定制的**工业级极简现代风（Light Tech Minimalist）**开源个人工程门户与决策中枢。秉持“0 额外动画运行时负担、纯粹高雅排版与极致性能”的设计哲学，以静谧通透的纯白工程底色呈现沉浸式交互质感：

- 🕸️ **微弱高雅网格背景（Subtle Grid）**：纯 CSS 实现 32px × 32px 极细微几何网格纹理，叠加顶部向下方柔和扩散的径向遮罩（`mask-image: radial-gradient(...)`），自然渐隐淡出，营造严谨而空灵的工程纵深。
- 🌅 **多层顶部氛围漫射光晕（Ambient Glow）**：由轻柔多层径向渐变（`radial-gradient`）与深邃 Indigo / Sky 色彩弥散光晕构建，无需任何复杂动效即可烘托出轻盈通透的顶部视觉重心。
- 💎 **工业级微交互与微透质感**：纯白底板卡片融合极细微透边框（`border-black/[0.06]`）与扩散柔和阴影，结合平滑位移（`hover:-translate-y-1`）、外链位移箭头与触控弹性手感（`active:scale-[0.98]`），提供丝滑跟手的触感反馈。
- 🏷️ **统一收敛的低饱和科技胶囊 Tag**：全面收敛杂乱色彩，核心与生态卡片均采用专属语义化低饱和微色彩徽章与灰阶科技胶囊 Tag，信息密度舒展饱满，杜绝文本单行截断与视觉疲劳。
- 📐 **三端黄金自适应网格**：
  - **电脑端（≥ 1024px）**：双层 3 列黄金视界，在中屏 `max-w-6xl` 与宽屏 `xl:max-w-7xl` 版心下舒展大气；
  - **平板端（768px ~ 1023px）**：核心 6 项闭环为 2 列 × 3 行对称网格，次要生态末项自适应双列通栏（`col-span-2`），彻底消灭尾部空缺；
  - **移动端（< 768px）**：单列弹性堆叠，原生适配 iOS 底部安全区（`safe-area-inset-bottom`）。

---

## 🧭 全景项目矩阵导航

网站聚合索引作者开源生态下的 13 项关键技术资产，划分为两大核心板块：

### 1. 核心架构矩阵（6 大核心工程）

| 平台代号 | 矩阵项目 | 专属角标 | 领域定位 | 核心能力与技术栈 | 在线直达 |
| :---: | :--- | :---: | :--- | :--- | :--- |
| `01` | **全栈技术选型矩阵** | `旗舰核心` | 顶层架构决策 | 工业级技术栈分层收敛 · 双生架构矩阵 · 架构决策与权衡 | [查看决策蓝图](https://atengk.github.io/fullstack-matrix/) |
| `02` | **AI Agent 智能体** | `AI 标杆` | AI 智能体生态 | 生产级自主智能体 · SDD 规范落地基座 · 智能体与工具编排 | [探索 AI 智能体](https://atengk.github.io/Ateng-Agent/) |
| `03` | **MCP 服务矩阵** | `协议中枢` | AI 上下文协议 | Model Context Protocol · 企业级中间件与云原生协议中枢 | [进入协议中心](https://atengk.github.io/Ateng-MCP/) |
| `04` | **Linux 运维** | `云原生底座` | 云原生基础设施 | 容器化与自动化编排 · 系统运维实践库 · Linux/Docker/K8s | [进入运维文档](https://atengk.github.io/linux/) |
| `05` | **Java 后端** | `后端工程` | 企业级后端工程 | 微服务分布式架构 · 企业级工程深度沉淀 · Spring Boot & Cloud | [查看后端技术](https://atengk.github.io/java/) |
| `06` | **Vue 前端** | `前端工程` | 现代前端工程化 | 现代前端工程化 · 全平台表现层解决方案 · TypeScript + Vue 3 | [探索前端工程](https://atengk.github.io/vue/) |

### 2. 开源生态与精选工具（7 项周边工程）

| 序号 | 项目名称 | 专属角标 | 领域归属 | 核心能力与技术栈 | 在线直达 |
| :---: | :--- | :---: | :--- | :--- | :--- |
| `07` | **Skills 技能中心** | `开源仓库` | AI 技能规范 | 基于规范驱动开发 (SDD) 的智能体技能体系 · Anthropic 官方规范 | [获取技能仓库](https://github.com/atengk/skills) |
| `08` | **clip 剪贴板历史管理器** | `桌面端应用` | 桌面级效率工具 | 轻量极速的跨平台桌面生产力工具 · Tauri v2 + Rust + React · 毫秒级回填 | [查看桌面应用](https://github.com/atengk/clip) |
| `09` | **工程化脚手架** | `企业脚手架` | 企业级脚手架 | 企业级开箱即用中后台体系架构实践 · RuoYi 全套架构落地 | [查看框架实践](https://atengk.github.io/project/) |
| `10` | **在线工具箱** | `实用工具` | 实用开发辅助 | 高频实用开发调试与格式转换工具箱 · 纯前端开箱即用 · 散列加解密 | [打开实用工具](https://atengk.github.io/tools/) |
| `11` | **VitePress Zenith 旗舰模板** | `开箱模板` | 现代研发文档模版 | 极具美感与功能深度的 Docs-as-Code 文档基座 · 顶配 VitePress 架构 | [体验旗舰模板](https://atengk.github.io/vitepress-zenith/) |
| `12` | **OSS 开源工程模板** | `开源模板` | 工业级通用模版 | 工业级 GitHub 开源规范与 CI/CD 自动化流水线基线 · 自动化发版 | [获取开源模版](https://github.com/atengk/oss-template) |
| `13` | **软件设计师备考指南** | `备考知识库` | 专业认证知识库 | 软考中级知识体系提炼与考题攻坚指南 · 9 大考纲精要与题库排错 | [开启系统备考](https://atengk.github.io/ruankao-software-designer/) |

---

## 📂 工程目录架构解构

```text
atengk.github.io/
├── public/                 # 静态资源目录（图标/SVG 矢量/Logo）
│   ├── icons/              # 各项目卡片专属图标矢量文件 (*.svg)
│   ├── favicon.svg         # 站点高清矢量 Favicon
│   └── hero.svg            # Hero 背景装饰矢量
├── src/
│   ├── components/         # 表现层原子与业务组件
│   │   ├── LightHero.tsx       # 极简现代 Hero 首屏（居中黄金排版 + 双子星社交胶囊）
│   │   └── LightBentoGrid.tsx  # 三端自适应 Bento 栅格网格（核心架构矩阵 + 开源生态与工具）
│   ├── data/               # 领域数据驱动模型
│   │   └── projects.ts         # 全网项目元数据集中注册表 (PROJECTS 数组)
│   ├── lib/                # 工具函数库
│   │   └── utils.ts            # Tailwind 类名合并工具方法 (cn)
│   ├── styles/             # 样式定义
│   │   └── globals.css         # 全局样式（Tailwind v4 主题与工程网格定义）
│   ├── App.tsx             # 应用主入口（微弱网格背景、顶部漫射光晕与黄金版心容器）
│   └── main.tsx            # React 根挂载入口
├── index.html              # HTML 模板入口
├── package.json            # 依赖声明与任务指令配置
├── tsconfig.json           # TypeScript 编译配置
└── vite.config.ts          # Vite 6 构建插件与别名配置
```

---

## 🚀 模块扩展开发指南

本项目采用**数据驱动与组件解耦**的现代化分层设计。后续若需要添加新的项目卡片、调整展示顺序或新增独立业务版块，请遵循以下三层指引：

### 分层 1：快速接入常规生态 / 工具卡片（数据驱动，零改动组件）

若新项目属于生态或周边实用工具，只需在数据文件中注册，系统将自动在下半区的「开源生态与实用工具」自适应渲染，无需修改任何组件代码。

#### 步骤说明：

1. **准备项目矢量图标**：
   - 准备一张 SVG 矢量图或 `128x128` 像素透明背景的高清 PNG；
   - 存入 `./public/icons/` 目录，例如 `public/icons/my-new-tool.svg`。

2. **在数据注册表中追加条目**：
   - 打开 `./src/data/projects.ts`，在 `PROJECTS` 数组尾部（或指定排序位置）添加配置对象：

```typescript
// src/data/projects.ts
{
  id: 'my-new-tool',                         // 唯一标识符（字母/数字/连字符）
  title: '云原生网关控制台',                     // 卡片主标题
  tagline: '高性能 API 网关动态路由与流量治理平台', // 简短一句话描述（15~25字最佳）
  tags: ['Gateway', '云原生', 'Go'],         // 关键技术标签列表（推荐 2~3 个）
  icon: '/icons/my-new-tool.svg',            // 图标相对路径（存放在 public/icons/ 下）
  link: 'https://github.com/atengk/gateway', // 点击跳转的完整外部或内部链接
  linkText: '查看网关控制台',                 // 外链引导按钮文案
  category: 'tools',                         // 分类: 'architecture' | 'ai' | 'engineering' | 'tools' | 'learning' | 'templates'
  badge: '新特性',                           // 可选：右上角展示的胶囊角标文字
  tier: 3,                                   // Bento Grid 展示层级权重（1 为超大卡片，2 为核心卡片，3 为轻量卡片）
},
```

---

### 分层 2：升级/新增核心架构旗舰卡片（专属低饱和微色与微交互定制）

若新项目具备战略地位，需展示在首屏最显眼的「核心架构矩阵」中（配有 48px 专属大底衬图标、低饱和度专属徽章与悬浮微光光晕），请执行以下两步：

#### 步骤说明：

1. **在数据注册表中声明**：
   - 参考【分层 1】，在 `./src/data/projects.ts` 中注册项目数据，设定唯一的 `id`（例如 `id: 'gateway-core'`），并将 `tier` 设为 `1` 或 `2`。

2. **在栅格组件中注册主题与 ID**：
   - 打开 `./src/components/LightBentoGrid.tsx`；
   - 在 `CORE_PROJECT_IDS` 数组中加入该项目的 ID：

   ```typescript
   // src/components/LightBentoGrid.tsx
   const CORE_PROJECT_IDS = [
     'fullstack-matrix',
     'ateng-agent',
     'ateng-mcp',
     'linux-infra',
     'java-backend',
     'vue-frontend',
     'gateway-core', // 新增的核心卡片 ID
   ] as const
   ```

   - 在 `CARD_THEMES` 对象中配置专属的低饱和微色主题（遵循 `ThemeConfig` 接口规范）：

   ```typescript
   // src/components/LightBentoGrid.tsx
   const CARD_THEMES: Record<string, ThemeConfig> = {
     // ... 既有核心卡片主题 ...
     'gateway-core': {
       iconBg: 'bg-cyan-50/70 border-cyan-100/60', // 品牌图标底衬微色与边框
       badgeStyle: 'bg-cyan-50/80 text-cyan-700/90 border-cyan-200/50', // 专属低饱和度科技徽章样式
       hoverBorder: 'hover:border-cyan-200/70', // 悬浮时微光边框
       hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(6,182,212,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]', // 悬浮时柔和漫射阴影
     },
   }
   ```

> 💡 **布局提示**：核心架构矩阵在电脑端为 3 列网格，平板端为 2 列网格。核心项目总数建议保持为 6 或 3 的倍数（如 6 项、9 项），以确保各端网格呈现完美的对称几何结构。

---

### 分层 3：扩展全新独立 Section 业务版块（架构级扩展）

若后续需要新增全新的独立业务版块（例如「博客文章精选」、「开源数据看板」或「技术路线图」），可按组件化工程规范开发并挂载：

#### 步骤说明：

1. **创建独立 Section 组件**：
   - 在 `./src/components/` 目录下创建新文件，例如 `./src/components/BlogSection.tsx`：

   ```tsx
   /**
    * 博客精选与技术动态展示 Section 组件。
    *
    * @author Ateng
    * @since 2026-10-12
    */
   export function BlogSection() {
     return (
       <section className="space-y-4 sm:space-y-4.5">
         <div className="flex items-center justify-between">
           <h2 className="flex items-center text-base sm:text-lg font-bold text-slate-900 tracking-tight">
             <span className="w-1.5 h-3.5 rounded-full bg-slate-400 mr-2.5 inline-block" />
             最新技术洞察
           </h2>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5 lg:gap-5">
           {/* 自定义业务卡片内容 */}
         </div>
       </section>
     )
   }
   ```

2. **在根视口编排层挂载**：
   - 打开 `./src/App.tsx`，导入并将其挂载在 `<main>` 容器中：

   ```tsx
   // src/App.tsx
   import { LightHero } from './components/LightHero'
   import { LightBentoGrid } from './components/LightBentoGrid'
   import { BlogSection } from './components/BlogSection' // 引入新业务模块

   export default function App() {
     return (
       <div className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden">
         {/* 1. 微弱高雅的网格背景（顶部向下方柔和淡出） */}
         <div
           className="pointer-events-none absolute inset-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-70"
           aria-hidden="true"
         />

         {/* 2. 顶部氛围漫射光晕（多层轻柔径向光晕） */}
         <div
           className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(99,102,241,0.06),transparent_75%)]"
           aria-hidden="true"
         />
         <div
           className="pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-200/25 via-sky-100/15 to-transparent blur-3xl rounded-full"
           aria-hidden="true"
         />

         {/* 3. 沉浸式主界面内容（响应式黄金版心：中屏 max-w-6xl，宽屏 xl:max-w-7xl） */}
         <main className="relative z-10 flex-1 max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-[max(3.5rem,env(safe-area-inset-bottom))] w-full space-y-8 sm:space-y-10 lg:space-y-12">
           <LightHero />
           <LightBentoGrid />
           <BlogSection /> {/* 顺畅挂载新模块，继承页面全局间距律动 */}
         </main>
       </div>
     )
   }
   ```

---

## 🛠️ 本地开发与工作流规范

本项目推荐使用 [pnpm](https://pnpm.io/) 作为包管理工具以获取极速依赖解析：

```bash
# 1. 克隆项目仓库
git clone https://github.com/atengk/atengk.github.io.git
cd atengk.github.io

# 2. 安装项目依赖
pnpm install

# 3. 启动本地开发服务 (默认监听 http://localhost:5173，毫秒级 HMR 热更新)
pnpm dev

# 4. 执行全量静态打包验证 (TypeScript 类型诊断 + Vite 生产构建)
pnpm build

# 5. 本地预览生产打包结果
pnpm preview
```

---

## 🚢 自动化部署与持续交付

项目基于 **GitHub Actions** 实现纯静态 SPA 的全自动化构件部署（CI/CD 流水线位于 `.github/workflows/deploy.yml`）：

1. 每次向 `main` 分支执行推送或手动触发（`workflow_dispatch`）后，自动触发 Pages 部署流水线；
2. 自动化 Runner 完成 Node.js 22 环境配置、依赖缓存挂载并执行 `pnpm install` 与 `pnpm build` 打包；
3. 基于官方 `actions/upload-pages-artifact@v3` 与 `actions/deploy-pages@v4`，直接将静态打包产物目录（`dist/`）无缝发布至 GitHub Pages 权威边缘节点，实现即时全球 CDN 分发。

---

## 📄 开源许可证

本项目基于 [Apache License 2.0](LICENSE) 开源协议分发与维护，遵循开源开放协作原则。