/**
 * 个人技术生态矩阵项目元数据定义与初始配置数据集。
 *
 * @author Ateng
 * @since 2026-10-10
 */

export type ProjectCategory = 'architecture' | 'ai' | 'engineering' | 'tools' | 'learning' | 'templates'

export interface ProjectItem {
  /** 唯一标识符 */
  id: string
  /** 项目展示标题 */
  title: string
  /** 核心定位与副标题标语 */
  tagline: string
  /** 技术栈或领域特性标签列表 */
  tags: string[]
  /** 图标相对静态资源路径 */
  icon: string
  /** 目标访问外链 URL */
  link: string
  /** 外链引导按钮文案 */
  linkText: string
  /** 突出显示徽章角标（可选） */
  badge?: string
  /** 领域分类维度 */
  category: ProjectCategory
  /** Bento Grid 展示层级权重（1 为超大卡片，2 为核心卡片，3 为轻量卡片） */
  tier: 1 | 2 | 3
}

export interface SocialLink {
  /** 社交渠道名称 */
  name: string
  /** 链接 URL */
  link: string
  /** 图标标识符 */
  icon: string
}

export const SITE_METADATA = {
  title: '阿腾技术网站',
  enTitle: 'Ateng Matrix',
  tagline: '全栈架构决策矩阵 · 企业级智能工程基座',
  description: '汇聚前沿全端选型、AI 智能体协议、云原生架构与工业级工程实践的个人技术知识矩阵。',
  author: 'Ateng',
  email: 'kongyu2385569970@gmail.com',
  github: 'https://github.com/atengk',
  qqGroup: 'https://qm.qq.com/q/aEeS4HY6GI',
}

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'GitHub',
    link: SITE_METADATA.github,
    icon: 'github',
  },
  {
    name: 'Email',
    link: `mailto:${SITE_METADATA.email}`,
    icon: 'mail',
  },
  {
    name: 'QQ交流群',
    link: SITE_METADATA.qqGroup,
    icon: 'message-circle',
  },
]

export const PROJECTS: ProjectItem[] = [
  {
    id: 'fullstack-matrix',
    title: '全栈技术选型矩阵',
    tagline: '工业级技术栈分层收敛 · 双生架构矩阵',
    tags: ['全端全平台', '架构决策与权衡', '工业级生态基线'],
    icon: '/icons/matrix.svg',
    link: 'https://atengk.github.io/fullstack-matrix/',
    linkText: '查看决策蓝图',
    badge: '旗舰核心',
    category: 'architecture',
    tier: 1,
  },
  {
    id: 'ateng-agent',
    title: 'AI Agent 技术网站',
    tagline: '生产级自主智能体工程落地基座',
    tags: ['AI Agent', 'Skills 技能库', 'MCP 协议生态'],
    icon: '/icons/agent.svg',
    link: 'https://atengk.github.io/Ateng-Agent/',
    linkText: '探索 AI 智能体',
    badge: 'AI 标杆',
    category: 'ai',
    tier: 1,
  },
  {
    id: 'skills',
    title: 'Skills 技能中心',
    tagline: '基于规范驱动开发 (SDD) 的智能体技能体系',
    tags: ['Anthropic 官方规范', 'Matt Pocock / Superpowers', '规范驱动开发 (SDD)'],
    icon: '/icons/skills.svg',
    link: 'https://github.com/atengk/skills',
    linkText: '获取技能仓库',
    badge: '开源仓库',
    category: 'ai',
    tier: 2,
  },
  {
    id: 'ateng-mcp',
    title: 'Ateng MCP 服务矩阵',
    tagline: 'Model Context Protocol 工业级基础设施上下文',
    tags: ['Model Context Protocol', 'Kafka / RocketMQ / K8s', '生产级协议服务'],
    icon: '/icons/mcp.svg',
    link: 'https://atengk.github.io/Ateng-MCP/',
    linkText: '进入协议中心',
    badge: '生态扩展',
    category: 'ai',
    tier: 2,
  },
  {
    id: 'clip',
    title: 'clip 剪贴板历史管理器',
    tagline: '轻量极速的跨平台桌面生产力神器',
    tags: ['Tauri v2 + Rust + React', '毫秒级回填 & 离线 OCR', '常驻内存 ~25MB'],
    icon: '/icons/clip.svg',
    link: 'https://github.com/atengk/clip',
    linkText: '查看桌面应用',
    badge: '桌面端应用',
    category: 'tools',
    tier: 2,
  },
  {
    id: 'java-backend',
    title: '后端技术网站',
    tagline: '企业级微服务分布式架构体系深度沉淀',
    tags: ['Spring Boot 3 / Cloud', 'Spark / Flink 大数据', 'Spring AI 落地'],
    icon: '/icons/spring.svg',
    link: 'https://atengk.github.io/java/',
    linkText: '查看后端技术',
    category: 'engineering',
    tier: 2,
  },
  {
    id: 'vue-frontend',
    title: '前端技术网站',
    tagline: '现代化前端工程化与全平台表现层方案',
    tags: ['TypeScript', 'Vue 3 生态', 'TailwindCSS + Sass'],
    icon: '/icons/vuedotjs.svg',
    link: 'https://atengk.github.io/vue/',
    linkText: '探索前端工程',
    category: 'engineering',
    tier: 2,
  },
  {
    id: 'linux-infra',
    title: '运维技术网站',
    tagline: '容器化与自动化系统运维实践知识库',
    tags: ['Linux 核心底座', 'Docker 容器化', 'Kubernetes 集群编排'],
    icon: '/icons/linux.svg',
    link: 'https://atengk.github.io/linux/',
    linkText: '进入运维文档',
    category: 'engineering',
    tier: 2,
  },
  {
    id: 'enterprise-project',
    title: '工程化框架技术网站',
    tagline: '企业级开箱即用脚手架与中后台体系实践',
    tags: ['RuoYi-Vue-Plus', 'RuoYi-Cloud-Plus', 'RuoYi-Plus-UI'],
    icon: '/icons/project.svg',
    link: 'https://atengk.github.io/project/',
    linkText: '查看框架实践',
    category: 'engineering',
    tier: 3,
  },
  {
    id: 'online-tools',
    title: '在线工具箱',
    tagline: '高频实用开发调试与格式转换轻量工具集中营',
    tags: ['实用开发辅助', '密码与加密散列', '网络格式转换'],
    icon: '/icons/tools.svg',
    link: 'https://atengk.github.io/tools/',
    linkText: '打开实用工具',
    category: 'tools',
    tier: 3,
  },
  {
    id: 'vitepress-zenith',
    title: 'VitePress Zenith 旗舰模板',
    tagline: '极具美感与功能深度的 Docs-as-Code 文档基座',
    tags: ['顶配 VitePress 架构', '沉浸阅读与命令中心', 'Twoslash + PWA 离线'],
    icon: '/icons/zenith.svg',
    link: 'https://atengk.github.io/vitepress-zenith/',
    linkText: '体验旗舰模板',
    badge: '开箱模板',
    category: 'templates',
    tier: 3,
  },
  {
    id: 'oss-template',
    title: 'OSS 开源工程模版',
    tagline: '工业级 GitHub 开源规范与 CI/CD 自动化流水线基线',
    tags: ['工业级 GitHub 模版', 'CI/CD 自动化发版', '容器化与工程规约'],
    icon: '/icons/oss.svg',
    link: 'https://github.com/atengk/oss-template',
    linkText: '获取开源模版',
    category: 'templates',
    tier: 3,
  },
  {
    id: 'ruankao-guide',
    title: '软件设计师备考指南',
    tagline: '软考中级知识体系提炼与考题攻坚宝典',
    tags: ['软考中级知识库', '9 大考纲精要与题库排错', 'Java 21 设计模式实战'],
    icon: '/icons/ruankao.svg',
    link: 'https://atengk.github.io/ruankao-software-designer/',
    linkText: '开启系统备考',
    category: 'learning',
    tier: 3,
  },
]
