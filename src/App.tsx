/**
 * 个人网站主页根组件。
 *
 * 采用 max-w-6xl 黄金凝聚版心与纯粹统一的现代左基准垂直轴线。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { LightHero } from './components/LightHero'
import { LightBentoGrid } from './components/LightBentoGrid'

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-slate-200 selection:text-slate-900 overflow-x-hidden">
      {/* 沉浸式主界面内容（max-w-6xl 黄金凝聚容器，纯粹统一的现代工程排版） */}
      <main className="relative z-10 flex-1 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 lg:pt-9 pb-[max(3rem,env(safe-area-inset-bottom))] w-full space-y-6 sm:space-y-7">
        <LightHero />
        <LightBentoGrid />
      </main>
    </div>
  )
}
