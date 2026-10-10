/**
 * 亮色极客科技风三端自适应矩阵组件。
 *
 * 针对电脑（3列）、平板（2列双边闭环）、手机（单列堆叠）三端深度调优：
 * - 核心 6 大项目在平板端完美契合 2 列 x 3 行对称网格；
 * - 次要生态 7 项在平板端尾部自适应通栏（md:col-span-2 lg:col-span-1），
 *   达成三端全场景下毫无缺口的治愈级视觉对称。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { motion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, type ProjectItem } from '../data/projects'
import { TiltCard } from './TiltCard'

interface CoreTheme {
  borderBeam: boolean
  beamGradient: string
  iconBg: string
  badgeStyle: string
  hoverText: string
  linkText: string
  ambientGlow: string
  tagStyle: string
}

const CORE_THEMES: Record<string, CoreTheme> = {
  'fullstack-matrix': {
    borderBeam: true,
    beamGradient:
      'conic-gradient(from 0deg, transparent 0deg, #6366f1 90deg, #a855f7 180deg, #38bdf8 270deg, transparent 360deg)',
    iconBg: 'bg-indigo-50/90 border-indigo-200/80',
    badgeStyle: 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-xs',
    hoverText: 'group-hover:text-indigo-600',
    linkText: 'text-indigo-600',
    ambientGlow: 'from-indigo-500/[0.18] via-purple-500/[0.08] to-transparent',
    tagStyle: 'bg-indigo-50/80 text-indigo-700 border-indigo-200/60',
  },
  'ateng-agent': {
    borderBeam: true,
    beamGradient:
      'conic-gradient(from 0deg, transparent 0deg, #a855f7 90deg, #ec4899 180deg, #8b5cf6 270deg, transparent 360deg)',
    iconBg: 'bg-purple-50/90 border-purple-200/80',
    badgeStyle: 'bg-purple-50 text-purple-700 border border-purple-200/80',
    hoverText: 'group-hover:text-purple-600',
    linkText: 'text-purple-600',
    ambientGlow: 'from-purple-500/[0.18] via-pink-500/[0.08] to-transparent',
    tagStyle: 'bg-purple-50/80 text-purple-700 border-purple-200/60',
  },
  'ateng-mcp': {
    borderBeam: true,
    beamGradient:
      'conic-gradient(from 0deg, transparent 0deg, #0284c7 90deg, #38bdf8 180deg, #818cf8 270deg, transparent 360deg)',
    iconBg: 'bg-sky-50/90 border-sky-200/80',
    badgeStyle: 'bg-sky-50 text-sky-700 border border-sky-200/80',
    hoverText: 'group-hover:text-sky-600',
    linkText: 'text-sky-600',
    ambientGlow: 'from-sky-500/[0.18] via-indigo-500/[0.08] to-transparent',
    tagStyle: 'bg-sky-50/80 text-sky-700 border-sky-200/60',
  },
  'linux-infra': {
    borderBeam: true,
    beamGradient:
      'conic-gradient(from 0deg, transparent 0deg, #059669 90deg, #10b981 180deg, #34d399 270deg, transparent 360deg)',
    iconBg: 'bg-emerald-50/90 border-emerald-200/80',
    badgeStyle: 'bg-emerald-50 text-emerald-700 border border-emerald-200/80',
    hoverText: 'group-hover:text-emerald-600',
    linkText: 'text-emerald-600',
    ambientGlow: 'from-emerald-500/[0.18] via-teal-500/[0.08] to-transparent',
    tagStyle: 'bg-emerald-50/80 text-emerald-700 border-emerald-200/60',
  },
  'java-backend': {
    borderBeam: true,
    beamGradient:
      'conic-gradient(from 0deg, transparent 0deg, #d97706 90deg, #f59e0b 180deg, #fbbf24 270deg, transparent 360deg)',
    iconBg: 'bg-amber-50/90 border-amber-200/80',
    badgeStyle: 'bg-amber-50 text-amber-800 border border-amber-200/80',
    hoverText: 'group-hover:text-amber-600',
    linkText: 'text-amber-700',
    ambientGlow: 'from-amber-500/[0.18] via-orange-500/[0.08] to-transparent',
    tagStyle: 'bg-amber-50/80 text-amber-800 border-amber-200/60',
  },
  'vue-frontend': {
    borderBeam: true,
    beamGradient:
      'conic-gradient(from 0deg, transparent 0deg, #0d9488 90deg, #14b8a6 180deg, #2dd4bf 270deg, transparent 360deg)',
    iconBg: 'bg-teal-50/90 border-teal-200/80',
    badgeStyle: 'bg-teal-50 text-teal-700 border border-teal-200/80',
    hoverText: 'group-hover:text-teal-600',
    linkText: 'text-teal-600',
    ambientGlow: 'from-teal-500/[0.18] via-emerald-500/[0.08] to-transparent',
    tagStyle: 'bg-teal-50/80 text-teal-700 border-teal-200/60',
  },
}

const DEFAULT_THEME: CoreTheme = {
  borderBeam: false,
  beamGradient:
    'conic-gradient(from 0deg, transparent 0deg, #6366f1 90deg, #a855f7 180deg, #38bdf8 270deg, transparent 360deg)',
  iconBg: 'bg-slate-50 border-slate-200/80',
  badgeStyle: 'bg-slate-50 text-slate-700 border border-slate-200/80',
  hoverText: 'group-hover:text-indigo-600',
  linkText: 'text-indigo-600',
  ambientGlow: 'from-slate-500/[0.08] to-transparent',
  tagStyle: 'bg-slate-50 text-slate-600 border-slate-200/80',
}

export function LightBentoGrid() {
  const coreIds = ['fullstack-matrix', 'ateng-agent', 'ateng-mcp', 'linux-infra', 'java-backend', 'vue-frontend']
  const coreProjects = coreIds
    .map((id) => PROJECTS.find((p) => p.id === id))
    .filter((p): p is ProjectItem => Boolean(p))

  const secondaryProjects = PROJECTS.filter((p) => !coreIds.includes(p.id))

  return (
    <div className="relative space-y-12 sm:space-y-14 lg:space-y-16">
      {/* 1. 核心 6 大项目（手机 1 列 / 平板 2 列 / 电脑 3 列） */}
      <section className="relative z-10 space-y-4 sm:space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <span>核心架构矩阵</span>
          </h2>
          <span className="text-[11px] sm:text-xs text-slate-400 font-mono font-medium">
            6 CORE PLATFORMS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {coreProjects.map((p, idx) => {
            const theme = CORE_THEMES[p.id] ?? DEFAULT_THEME
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
                className="h-full"
              >
                <TiltCard
                  borderBeam={theme.borderBeam}
                  beamGradient={theme.beamGradient}
                  className="h-full rounded-2xl ring-1 ring-slate-900/5 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.06)] hover:shadow-[0_16px_40px_-8px_rgba(15,23,42,0.12)] transition-shadow duration-300"
                >
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="relative group block h-full p-4.5 sm:p-5 lg:p-5.5 bg-white/95 backdrop-blur-md rounded-2xl border border-white/90 flex flex-col justify-between overflow-hidden"
                  >
                    {/* 卡片右上角专属语义微流光（Ambient Corner Glow，消除大白纸感） */}
                    <div
                      aria-hidden="true"
                      className={`absolute -top-12 -right-12 w-48 h-48 rounded-full bg-gradient-to-br ${theme.ambientGlow} blur-2xl pointer-events-none transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative z-10">
                      {/* 图标与专属语义角标 */}
                      <div className="flex items-center justify-between mb-3 sm:mb-3.5">
                        <div
                          className={`w-11 h-11 sm:w-12 sm:h-12 rounded-2xl ${theme.iconBg} p-2 sm:p-2.5 flex items-center justify-center shadow-xs transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-1 group-hover:shadow-[0_8px_20px_-4px_rgba(99,102,241,0.25)]`}
                        >
                          <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                        </div>
                        {p.badge && (
                          <span
                            className={`px-2.5 py-0.5 rounded-full text-xs font-bold tracking-wide shadow-2xs ${theme.badgeStyle}`}
                          >
                            {p.badge}
                          </span>
                        )}
                      </div>

                      {/* 标题与描述（字号饱满有力，间距紧凑自然） */}
                      <h3
                        className={`text-base sm:text-lg lg:text-xl font-black text-slate-900 ${theme.hoverText} transition-colors flex items-center gap-1.5`}
                      >
                        <span>{p.title}</span>
                        <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 shrink-0" />
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 mt-1 sm:mt-1.5 font-medium leading-relaxed line-clamp-2">
                        {p.tagline}
                      </p>
                    </div>

                    {/* 弹性防挤压标签栏与进入引导 */}
                    <div className="relative z-10 mt-4 sm:mt-5 pt-3 sm:pt-3.5 border-t border-slate-100/90 flex items-center justify-between text-xs gap-2">
                      <div className="flex flex-wrap items-center gap-1.5 min-w-0 pr-1">
                        {p.tags.slice(0, 2).map((t) => (
                          <span
                            key={t}
                            className={`text-[11px] px-2.5 py-0.5 rounded-lg border font-medium whitespace-nowrap shadow-2xs ${theme.tagStyle}`}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span
                        className={`${theme.linkText} font-bold group-hover:translate-x-1 transition-transform duration-300 shrink-0 inline-flex items-center gap-0.5 text-xs sm:text-sm`}
                      >
                        访问 →
                      </span>
                    </div>
                  </a>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* 2. 精选生态与周边工具（平板端第 7 项自适应跨 2 列，消灭末尾缺口） */}
      <section className="space-y-3.5 sm:space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 tracking-tight">
            开源生态与实用工具
          </h2>
          <span className="text-[11px] sm:text-xs text-slate-400 font-mono font-medium">
            {secondaryProjects.length} ECOSYSTEM & TOOLS
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 lg:gap-3.5">
          {secondaryProjects.map((p, idx) => {
            const isLastInTablet = idx === secondaryProjects.length - 1
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: 0.25 + idx * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className={`h-full ${isLastInTablet ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <TiltCard className="h-full rounded-2xl ring-1 ring-slate-900/5 shadow-[0_2px_12px_-2px_rgba(15,23,42,0.04)] hover:shadow-[0_8px_24px_-4px_rgba(15,23,42,0.08)] transition-shadow duration-300">
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="group block h-full p-4 sm:p-4.5 bg-white/90 backdrop-blur-md rounded-2xl border border-white/90 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-slate-50/90 border border-slate-200/80 p-2 shrink-0 flex items-center justify-center shadow-2xs transition-all duration-300 group-hover:scale-105 group-hover:-translate-y-0.5 group-hover:shadow-[0_6px_16px_-4px_rgba(99,102,241,0.22)]">
                        <img src={p.icon} alt={p.title} className="w-full h-full object-contain" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs sm:text-sm font-bold text-slate-800 truncate group-hover:text-indigo-600 transition-colors">
                          {p.title}
                        </div>
                        <div className="text-[11px] sm:text-xs text-slate-500 truncate mt-0.5 font-medium">
                          {p.tagline}
                        </div>
                      </div>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
                  </a>
                </TiltCard>
              </motion.div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
