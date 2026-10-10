/**
 * 极简现代高端 Hero 首屏组件。
 *
 * 经典大气居中黄金视界，深邃通透的静谧排版与精致双子星社交胶囊。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { Mail } from 'lucide-react'
import { SITE_METADATA, SOCIAL_LINKS } from '../data/projects'
import { cn } from '../lib/utils'

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

export function LightHero() {
  return (
    <section className="relative text-center max-w-4xl mx-auto space-y-4 sm:space-y-4.5 px-2 sm:px-0">
      {/* 1. 核心大标题与标语（权威沉稳居中，拉开大字阶视觉层次） */}
      <div className="space-y-2 sm:space-y-2.5">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-tight drop-shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
          {SITE_METADATA.title}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-800 bg-clip-text text-transparent tracking-tight">
          {SITE_METADATA.tagline}
        </p>
      </div>

      {/* 2. 描述文案（清晰舒展的大气留白） */}
      <p className="text-xs sm:text-sm md:text-base text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed">
        {SITE_METADATA.description}
      </p>

      {/* 3. 社交直达入口（极细微透边框、柔和阴影与 active:scale-[0.98] 弹性微胶囊） */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-0.5">
        {SOCIAL_LINKS.map((item) => (
          <a
            key={item.name}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "inline-flex items-center gap-2 px-4 py-1.5 sm:px-4.5 sm:py-2 rounded-full",
              "bg-white text-xs sm:text-sm font-semibold text-slate-700 hover:text-slate-950",
              "border border-black/[0.06] hover:border-black/15",
              "shadow-[0_2px_8px_-2px_rgba(15,23,42,0.05),0_1px_2px_rgba(15,23,42,0.03)]",
              "hover:shadow-[0_8px_16px_-4px_rgba(15,23,42,0.08)]",
              "hover:-translate-y-0.5 active:scale-[0.98] transition-all duration-200 ease-out"
            )}
          >
            {item.icon === 'github' && <GithubIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-800" />}
            {item.icon === 'mail' && <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />}
            <span>{item.name}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
