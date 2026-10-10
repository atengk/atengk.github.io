/**
 * 个人网站主页根组件，装配 Lenis 阻尼滚动引擎与基础界面骨架。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { useEffect } from 'react'
import Lenis from 'lenis'
import { ArrowUpRight, Mail, MessageCircle, Sparkles } from 'lucide-react'
import { PROJECTS, SITE_METADATA, SOCIAL_LINKS } from './data/projects'

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

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    const rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col selection:bg-indigo-500/20 selection:text-indigo-300">
      {/* 顶部极简导航栏 */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-zinc-950/70 border-b border-zinc-800/60">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.svg" alt="Logo" className="w-8 h-8 rounded-lg" />
            <span className="font-semibold tracking-tight text-zinc-100">
              {SITE_METADATA.title}
            </span>
          </div>

          <div className="flex items-center gap-4 text-sm">
            <a
              href={SITE_METADATA.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-zinc-400 hover:text-zinc-100 transition-colors"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </header>

      {/* 主视觉区域与骨架容器 */}
      <main className="flex-1 max-w-6xl mx-auto px-6 py-16 w-full">
        {/* Hero 区域 */}
        <section className="text-center py-12 border-b border-zinc-800/60">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-indigo-400 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>架构基座已就绪 · React 19 + Tailwind v4 + Vite</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-zinc-100 mb-4">
            {SITE_METADATA.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-8 font-normal">
            {SITE_METADATA.tagline}
          </p>

          <div className="flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.name}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-sm font-medium text-zinc-300 transition-colors inline-flex items-center gap-2"
              >
                {item.icon === 'github' && <GithubIcon className="w-4 h-4" />}
                {item.icon === 'mail' && <Mail className="w-4 h-4" />}
                {item.icon === 'message-circle' && <MessageCircle className="w-4 h-4" />}
                <span>{item.name}</span>
              </a>
            ))}
          </div>
        </section>

        {/* 矩阵项目骨架网格 */}
        <section className="py-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-xl font-bold text-zinc-100">技术生态矩阵</h2>
              <p className="text-sm text-zinc-400 mt-1">
                基础架构架子已搭建完成，项目数据契约已就绪（共 {PROJECTS.length} 个子站与开源资产）
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="group relative p-5 rounded-xl bg-zinc-900/60 border border-zinc-800/80 hover:border-zinc-700 hover:bg-zinc-900 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-zinc-800/80 p-2 border border-zinc-750 flex items-center justify-center">
                      <img src={project.icon} alt={project.title} className="w-6 h-6 object-contain" />
                    </div>
                    {project.badge && (
                      <span className="text-[11px] px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700">
                        {project.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-semibold text-zinc-100 group-hover:text-indigo-300 transition-colors flex items-center gap-1.5">
                    {project.title}
                    <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-indigo-400 transition-colors" />
                  </h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {project.tagline}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-800/50 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded bg-zinc-950/60 text-zinc-400 border border-zinc-800/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      {/* 底部版权信息 */}
      <footer className="border-t border-zinc-900 py-8 text-center text-xs text-zinc-500">
        <p>© 2026 {SITE_METADATA.author}. 保留所有权利 · 全栈架构决策与生产实践指南</p>
      </footer>
    </div>
  )
}
