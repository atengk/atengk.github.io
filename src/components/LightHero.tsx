/**
 * 极简现代 Hero 首屏组件。
 *
 * 针对电脑、平板、手机三端阶梯排版深度适配：
 * - 手机：紧凑清晰，防字号溢出折行；
 * - 平板：沉稳均衡，双手握持视野适宜；
 * - 电脑：大气从容，全屏排版气场充裕。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { motion } from 'motion/react'
import { Mail, MessageCircle } from 'lucide-react'
import { SITE_METADATA, SOCIAL_LINKS } from '../data/projects'

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  )
}

const SOCIAL_STYLES: Record<string, string> = {
  github: 'hover:border-slate-400 hover:text-slate-950 hover:shadow-[0_8px_20px_-6px_rgba(15,23,42,0.22)]',
  mail: 'hover:border-indigo-300 hover:text-indigo-600 hover:shadow-[0_8px_20px_-6px_rgba(99,102,241,0.28)]',
  'message-circle': 'hover:border-sky-300 hover:text-sky-600 hover:shadow-[0_8px_20px_-6px_rgba(14,165,233,0.28)]',
}

export function LightHero() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="relative pt-1 sm:pt-2 lg:pt-3 pb-2 sm:pb-3 lg:pb-4 text-center max-w-4xl mx-auto space-y-3.5 sm:space-y-4.5 px-2 sm:px-0"
    >
      {/* 1. 动态科技呼吸状态徽章 */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 border border-slate-200/90 shadow-xs backdrop-blur-md text-[11px] sm:text-xs font-medium text-slate-700">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-slate-400 font-bold text-[10px] tracking-wide">SYSTEM ACTIVE</span>
          <span className="text-slate-300">|</span>
          <span className="font-semibold text-slate-800">全栈工程架构决策中枢</span>
        </div>
      </div>

      {/* 2. 核心大标题与标语（钛金属光泽掠影 + 液态极光漫流） */}
      <div className="space-y-1.5 sm:space-y-2.5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight animate-shimmer-title leading-tight drop-shadow-xs">
          {SITE_METADATA.title}
        </h1>
        <p className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-indigo-600 via-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent tracking-tight animate-gradient-flow">
          {SITE_METADATA.tagline}
        </p>
      </div>

      {/* 3. 描述文案（电脑/平板单行，移动端自然防溢出） */}
      <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed sm:whitespace-nowrap">
        {SITE_METADATA.description}
      </p>

      {/* 4. 极客动态状态中枢指示条 (Telemetry Strip) */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] sm:text-xs text-slate-600">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-slate-200/80 shadow-2xs backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping"></span>
          <span className="font-semibold text-slate-700">6 大核心架构矩阵</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-slate-200/80 shadow-2xs backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></span>
          <span className="font-semibold text-slate-700">7 项开源生态工程</span>
        </div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/85 border border-slate-200/80 shadow-2xs backdrop-blur-md">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
          <span className="font-semibold text-slate-700">2026 工业级基线</span>
        </div>
      </div>

      {/* 4. 社交直达快捷立体药丸（紧凑间距） */}
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        {SOCIAL_LINKS.map((item) => {
          const brandStyle = SOCIAL_STYLES[item.icon] ?? 'hover:border-slate-300 hover:text-slate-900'
          return (
            <a
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className={`px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/95 hover:bg-white backdrop-blur-md border border-slate-200/90 text-xs sm:text-sm font-semibold text-slate-700 shadow-xs active:scale-95 transition-all duration-300 flex items-center gap-2 ${brandStyle}`}
            >
              {item.icon === 'github' && <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {item.icon === 'mail' && <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              {item.icon === 'message-circle' && <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
              <span>{item.name}</span>
            </a>
          )
        })}
      </div>
    </motion.section>
  )
}
