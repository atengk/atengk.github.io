/**
 * 极简现代高端三端自适应矩阵卡片组件。
 *
 * 采用 0 运行时代价的纯静态高级语义色彩系统（Semantic Color Identity）：
 * - 告别全站死灰，恢复各大架构专属品牌微色彩（AI 紫、Linux 绿、Java 琥珀、Vue 薄荷青、选型蓝）；
 * - 舒展大气的经典 Bento 纵深网格骨架（48px 品牌大标 + 专属精致角标）；
 * - 纯白微质感底衬，悬浮时呈现温润品牌漫反射微光泽。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, type ProjectItem } from '../data/projects'

interface ThemeConfig {
  iconBg: string
  badgeBg: string
  badgeText: string
  badgeBorder: string
  tagBg: string
  tagText: string
  tagBorder: string
  hoverBorder: string
  hoverShadow: string
}

const CARD_THEMES: Record<string, ThemeConfig> = {
  'fullstack-matrix': {
    iconBg: 'bg-indigo-50 border-indigo-100/80',
    badgeBg: 'bg-indigo-50/90',
    badgeText: 'text-indigo-700',
    badgeBorder: 'border-indigo-200/60',
    tagBg: 'bg-indigo-50/80',
    tagText: 'text-indigo-700',
    tagBorder: 'border-indigo-100',
    hoverBorder: 'hover:border-indigo-300',
    hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(99,102,241,0.14)]',
  },
  'ateng-agent': {
    iconBg: 'bg-purple-50 border-purple-100/80',
    badgeBg: 'bg-purple-50/90',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200/60',
    tagBg: 'bg-purple-50/80',
    tagText: 'text-purple-700',
    tagBorder: 'border-purple-100',
    hoverBorder: 'hover:border-purple-300',
    hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(168,85,247,0.14)]',
  },
  'ateng-mcp': {
    iconBg: 'bg-sky-50 border-sky-100/80',
    badgeBg: 'bg-sky-50/90',
    badgeText: 'text-sky-700',
    badgeBorder: 'border-sky-200/60',
    tagBg: 'bg-sky-50/80',
    tagText: 'text-sky-700',
    tagBorder: 'border-sky-100',
    hoverBorder: 'hover:border-sky-300',
    hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(14,165,233,0.14)]',
  },
  'linux-infra': {
    iconBg: 'bg-emerald-50 border-emerald-100/80',
    badgeBg: 'bg-emerald-50/90',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200/60',
    tagBg: 'bg-emerald-50/80',
    tagText: 'text-emerald-700',
    tagBorder: 'border-emerald-100',
    hoverBorder: 'hover:border-emerald-300',
    hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(16,185,129,0.14)]',
  },
  'java-backend': {
    iconBg: 'bg-amber-50 border-amber-100/80',
    badgeBg: 'bg-amber-50/90',
    badgeText: 'text-amber-800',
    badgeBorder: 'border-amber-200/60',
    tagBg: 'bg-amber-50/80',
    tagText: 'text-amber-800',
    tagBorder: 'border-amber-100',
    hoverBorder: 'hover:border-amber-300',
    hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(245,158,11,0.14)]',
  },
  'vue-frontend': {
    iconBg: 'bg-teal-50 border-teal-100/80',
    badgeBg: 'bg-teal-50/90',
    badgeText: 'text-teal-700',
    badgeBorder: 'border-teal-200/60',
    tagBg: 'bg-teal-50/80',
    tagText: 'text-teal-700',
    tagBorder: 'border-teal-100',
    hoverBorder: 'hover:border-teal-300',
    hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(20,184,166,0.14)]',
  },
}

const DEFAULT_THEME: ThemeConfig = {
  iconBg: 'bg-slate-50 border-slate-100',
  badgeBg: 'bg-slate-50',
  badgeText: 'text-slate-700',
  badgeBorder: 'border-slate-200/60',
  tagBg: 'bg-slate-50',
  tagText: 'text-slate-600',
  tagBorder: 'border-slate-100',
  hoverBorder: 'hover:border-slate-300',
  hoverShadow: 'hover:shadow-[0_12px_28px_-8px_rgba(15,23,42,0.08)]',
}

export function LightBentoGrid() {
  const coreIds = ['fullstack-matrix', 'ateng-agent', 'ateng-mcp', 'linux-infra', 'java-backend', 'vue-frontend']
  const coreProjects = coreIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p))

  const secondaryProjects = PROJECTS.filter((p) => !coreIds.includes(p.id))

  return (
    <div className="relative space-y-8 sm:space-y-10">
      {/* 1. 核心架构矩阵（第一视觉主角：经典 Bento 舒展网格，融入专属品牌语义色） */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
            核心架构矩阵
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {coreProjects.map((p) => {
            const theme = CARD_THEMES[p.id] ?? DEFAULT_THEME
            return (
              <div key={p.id} className="h-full">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`group block h-full p-5 sm:p-5.5 bg-white rounded-2xl border border-slate-200/90 shadow-2xs ${theme.hoverBorder} ${theme.hoverShadow} hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between`}
                >
                  <div>
                    {/* 上部：48px 专属微底衬大图标 + 右侧精致语义角标与外链箭头 */}
                    <div className="flex items-center justify-between mb-3.5">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-xl ${theme.iconBg} border p-2 sm:p-2.5 flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-105`}
                      >
                        <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="flex items-center gap-2">
                        {p.badge && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${theme.badgeBg} ${theme.badgeText} border ${theme.badgeBorder} shadow-2xs`}
                          >
                            {p.badge}
                          </span>
                        )}
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
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

                  {/* 底部：与卡片主题色呼应的淡雅微彩标签，单行整齐绝不破框 */}
                  <div className="mt-4 pt-3 border-t border-slate-100/90 flex items-center gap-1.5 min-w-0">
                    {p.tags.slice(0, 2).map((t) => (
                      <span
                        key={t}
                        className={`text-[11px] sm:text-xs px-2.5 py-0.5 rounded-md ${theme.tagBg} ${theme.tagText} border ${theme.tagBorder} font-medium whitespace-nowrap truncate max-w-[155px]`}
                      >
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

      {/* 2. 开源生态与周边工具（第二视觉配角：精致轻快） */}
      <section className="space-y-3.5 sm:space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            开源生态与实用工具
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {secondaryProjects.map((p, idx) => {
            const isLastInTablet = idx === secondaryProjects.length - 1
            return (
              <div
                key={p.id}
                className={`h-full ${isLastInTablet ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <a
                  href={p.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group block h-full p-3.5 sm:p-4 bg-white rounded-xl border border-slate-200/90 shadow-2xs hover:border-slate-300 hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-between gap-3"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-50 border border-slate-100 p-2 shrink-0 flex items-center justify-center transition-transform duration-200 group-hover:scale-105">
                      <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-slate-950 transition-colors">
                        {p.title}
                      </div>
                      <div className="text-xs text-slate-500 truncate mt-0.5 font-normal">
                        {p.tagline}
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0" />
                </a>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
