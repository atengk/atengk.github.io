/**
 * 个人网站主页根组件，装配 Lenis 阻尼滚动引擎、Canvas 物理粒子引力场与纯白极客天幕。
 *
 * 全面集成电脑、平板、手机三端阶梯式排版与 iOS 底部安全区适配。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { ParticleCanvas } from './components/ParticleCanvas'
import { LightHero } from './components/LightHero'
import { LightBentoGrid } from './components/LightBentoGrid'

export default function App() {
  return (
    <div className="relative min-h-screen bg-slate-50 text-slate-900 flex flex-col overflow-x-hidden selection:bg-indigo-500/20 selection:text-indigo-700">
      {/* 1. 极致轻量 Canvas 物理引力粒子场 */}
      <ParticleCanvas />

      {/* 2. 高能鲜艳 60FPS 漫反射极光流体天幕（GPU 纯硬件加速，满帧流体浪潮） */}
      <div
        aria-hidden="true"
        className="fixed -top-20 -left-20 w-[550px] sm:w-[850px] h-[550px] sm:h-[850px] rounded-full pointer-events-none z-0 animate-aurora-1"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(56, 189, 248, 0.18) 45%, transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="fixed top-1/4 -right-20 w-[500px] sm:w-[800px] h-[500px] sm:h-[800px] rounded-full pointer-events-none z-0 animate-aurora-2"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.32) 0%, rgba(236, 72, 153, 0.16) 45%, transparent 72%)',
        }}
      />
      <div
        aria-hidden="true"
        className="fixed -bottom-28 left-1/4 w-[600px] sm:w-[900px] h-[600px] sm:h-[900px] rounded-full pointer-events-none z-0 animate-aurora-3"
        style={{
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.28) 0%, rgba(99, 102, 241, 0.15) 45%, transparent 72%)',
        }}
      />


      {/* 4. 沉浸式主界面内容（max-w-7xl 黄金视界宽屏容器，黄金紧凑垂直律动） */}
      <main className="relative z-10 flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-5 sm:pt-7 lg:pt-9 pb-[max(2.5rem,env(safe-area-inset-bottom))] w-full space-y-8 sm:space-y-10 lg:space-y-11">
        <LightHero />
        <LightBentoGrid />
      </main>
    </div>
  )
}
