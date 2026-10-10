/**
 * 极简现代高端三端自适应矩阵卡片组件。
 *
 * 工业级视觉质感与微交互重构：
 * - 纯白底搭配极细微透边框（border-black/[0.06]）与扩散柔和阴影；
 * - 统一规范的低饱和度科技胶囊 Tag；
 * - 舒展的卡片高度与完整无截断的简介文字排版；
 * - 平滑 hover:-translate-y-1 浮动与 active:scale-[0.98] 触控回弹手感。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, type ProjectItem } from '../data/projects'
import { cn } from '../lib/utils'

/** 核心架构矩阵项目 ID 列表 */
const CORE_PROJECT_IDS = [
  'fullstack-matrix',
  'ateng-agent',
  'ateng-mcp',
  'linux-infra',
  'java-backend',
  'vue-frontend',
] as const

interface ThemeConfig {
  /** 品牌图标底衬微色与边框 */
  iconBg: string
  /** 专属低饱和度科技徽章样式 */
  badgeStyle: string
  /** 悬浮时微光边框 */
  hoverBorder: string
  /** 悬浮时柔和漫射阴影 */
  hoverShadow: string
}

/** 核心项目语义化低饱和微色彩配置 */
const CARD_THEMES: Record<string, ThemeConfig> = {
  'fullstack-matrix': {
    iconBg: 'bg-indigo-50/70 border-indigo-100/60',
    badgeStyle: 'bg-indigo-50/80 text-indigo-700/90 border-indigo-200/50',
    hoverBorder: 'hover:border-indigo-200/70',
    hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(99,102,241,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
  },
  'ateng-agent': {
    iconBg: 'bg-purple-50/70 border-purple-100/60',
    badgeStyle: 'bg-purple-50/80 text-purple-700/90 border-purple-200/50',
    hoverBorder: 'hover:border-purple-200/70',
    hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(168,85,247,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
  },
  'ateng-mcp': {
    iconBg: 'bg-sky-50/70 border-sky-100/60',
    badgeStyle: 'bg-sky-50/80 text-sky-700/90 border-sky-200/50',
    hoverBorder: 'hover:border-sky-200/70',
    hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(14,165,233,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
  },
  'linux-infra': {
    iconBg: 'bg-emerald-50/70 border-emerald-100/60',
    badgeStyle: 'bg-emerald-50/80 text-emerald-700/90 border-emerald-200/50',
    hoverBorder: 'hover:border-emerald-200/70',
    hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(16,185,129,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
  },
  'java-backend': {
    iconBg: 'bg-amber-50/70 border-amber-100/60',
    badgeStyle: 'bg-amber-50/80 text-amber-800/90 border-amber-200/50',
    hoverBorder: 'hover:border-amber-200/70',
    hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(245,158,11,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
  },
  'vue-frontend': {
    iconBg: 'bg-teal-50/70 border-teal-100/60',
    badgeStyle: 'bg-teal-50/80 text-teal-700/90 border-teal-200/50',
    hoverBorder: 'hover:border-teal-200/70',
    hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(20,184,166,0.12),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
  },
}

/** 默认低饱和微色配置 */
const DEFAULT_THEME: ThemeConfig = {
  iconBg: 'bg-slate-50 border-black/[0.04]',
  badgeStyle: 'bg-slate-100/90 text-slate-700 border-black/[0.05]',
  hoverBorder: 'hover:border-black/15',
  hoverShadow: 'hover:shadow-[0_16px_32px_-8px_rgba(15,23,42,0.08),0_4px_12px_-2px_rgba(15,23,42,0.03)]',
}

/** 卡片纯白底、微透边框、平滑阴影与按压弹性通用基类 */
const CARD_SURFACE_BASE = cn(
  'group block h-full bg-white rounded-2xl',
  'border border-black/[0.06]',
  'shadow-[0_2px_8px_-2px_rgba(15,23,42,0.04),0_1px_2px_rgba(15,23,42,0.02)]',
  'hover:-translate-y-1 active:scale-[0.98]',
  'transition-all duration-300 ease-out'
)

/** 统一质感的低饱和度科技胶囊 Tag 通用基类 */
const TECH_CAPSULE_TAG = cn(
  'inline-flex items-center text-[11px] sm:text-xs px-2.5 py-0.5 rounded-full font-medium',
  'bg-slate-100/75 text-slate-600 border border-black/[0.04]',
  'group-hover:bg-slate-100/95 group-hover:text-slate-700 transition-colors duration-200',
  'whitespace-nowrap truncate'
)

export function LightBentoGrid() {
  const coreProjects = CORE_PROJECT_IDS
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p))

  const secondaryProjects = PROJECTS.filter((p) => !CORE_PROJECT_IDS.includes(p.id as (typeof CORE_PROJECT_IDS)[number]))

  return (
    <div className="relative space-y-8 sm:space-y-10 lg:space-y-12">
      {/* 1. 核心架构矩阵（第一视觉主角：纯白微透边框 + 专属低饱和微光泽） */}
      <section className="space-y-4 sm:space-y-4.5">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            <span className="w-1.5 h-4 rounded-full bg-slate-900 mr-2.5 inline-block" />
            核心架构矩阵
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {coreProjects.map((p) => {
            const theme = CARD_THEMES[p.id] ?? DEFAULT_THEME
            return (
              <div key={p.id} className="h-full">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    CARD_SURFACE_BASE,
                    'p-5 sm:p-5.5 lg:p-6 flex flex-col justify-between',
                    theme.hoverBorder,
                    theme.hoverShadow
                  )}
                >
                  <div>
                    {/* 上部：48px 专属微底衬大图标 + 右侧低饱和科技角标与外链位移箭头 */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div
                        className={cn(
                          'w-11 h-11 sm:w-12 sm:h-12 rounded-xl border p-2 sm:p-2.5 flex items-center justify-center shrink-0',
                          'transition-transform duration-200 group-hover:scale-105',
                          theme.iconBg
                        )}
                      >
                        <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                      </div>

                      <div className="flex items-center gap-2">
                        {p.badge && (
                          <span
                            className={cn(
                              'px-2.5 py-0.5 rounded-full text-xs font-semibold border shadow-[0_1px_2px_rgba(0,0,0,0.02)]',
                              theme.badgeStyle
                            )}
                          >
                            {p.badge}
                          </span>
                        )}
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* 中部：饱满大标题与清晰描述 */}
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-slate-950 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 mt-1 font-normal leading-relaxed line-clamp-2">
                      {p.tagline}
                    </p>
                  </div>

                  {/* 底部：规范统一的低饱和度科技胶囊 Tag */}
                  <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center gap-1.5 min-w-0">
                    {p.tags.slice(0, 2).map((t) => (
                      <span key={t} className={cn(TECH_CAPSULE_TAG, 'max-w-[155px]')}>
                        {t}
                      </span>
                    ))}
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* 2. 开源生态与实用工具（第二视觉配角：舒展高度 + 简介文字完整不截断） */}
      <section className="space-y-4 sm:space-y-4.5">
        <div className="flex items-center justify-between">
          <h2 className="flex items-center text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            <span className="w-1.5 h-3.5 rounded-full bg-slate-400 mr-2.5 inline-block" />
            开源生态与实用工具
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4.5 lg:gap-5">
          {secondaryProjects.map((p, idx) => {
            const isLastInTablet = idx === secondaryProjects.length - 1
            return (
              <div
                key={p.id}
                className={cn('h-full', isLastInTablet && 'md:col-span-2 lg:col-span-1')}
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={cn(
                    CARD_SURFACE_BASE,
                    'p-4.5 sm:p-5 flex flex-col justify-between',
                    'hover:border-black/15 hover:shadow-[0_14px_28px_-6px_rgba(15,23,42,0.07),0_3px_8px_-2px_rgba(15,23,42,0.03)]'
                  )}
                >
                  <div>
                    {/* 上部：图标、标题、右上微胶囊与外链位移箭头 */}
                    <div className="flex items-start justify-between gap-2.5 mb-2.5">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50 border border-black/[0.04] p-2 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                          <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-slate-950 transition-colors truncate">
                          {p.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 pt-0.5">
                        {p.badge && (
                          <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-slate-100/90 text-slate-600 border border-black/[0.04]">
                            {p.badge}
                          </span>
                        )}
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                      </div>
                    </div>

                    {/* 中部：完整舒展的简介文本（彻底解决单行截断与矮挤问题） */}
                    <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed line-clamp-2 mt-1">
                      {p.tagline}
                    </p>
                  </div>

                  {/* 底部：统一规范的低饱和度科技胶囊 Tag */}
                  {p.tags.length > 0 && (
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100/80 flex items-center gap-1.5 min-w-0">
                      {p.tags.slice(0, 2).map((t) => (
                        <span key={t} className={cn(TECH_CAPSULE_TAG, 'max-w-[145px]')}>
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
