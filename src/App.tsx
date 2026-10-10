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
      {/* 1. 微弱高雅的网格背景（顶部向下方柔和淡出） */}
      <div
        className="pointer-events-none absolute inset-0 bg-subtle-grid [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_100%)] opacity-70"
        aria-hidden="true"
      />

      {/* 2. 顶部氛围漫射光晕（多层轻柔径向光晕，提升空间通透感与层次） */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[480px] bg-[radial-gradient(ellipse_75%_55%_at_50%_0%,rgba(99,102,241,0.06),transparent_75%)]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-indigo-200/25 via-sky-100/15 to-transparent blur-3xl rounded-full"
        aria-hidden="true"
      />

      {/* 3. 沉浸式主界面内容（响应式黄金版心：中屏 max-w-6xl，宽屏 xl:max-w-7xl，舒展大气） */}
      <main className="relative z-10 flex-1 max-w-6xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 lg:pt-12 pb-[max(3.5rem,env(safe-area-inset-bottom))] w-full space-y-8 sm:space-y-10 lg:space-y-12">
        <LightHero />
        <LightBentoGrid />
      </main>
    </div>
  )
}
