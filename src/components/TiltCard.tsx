/**
 * 3D 陀螺仪透视倾斜与三端高精度指针自适应卡片容器组件。
 *
 * 采用 (hover: hover) and (pointer: fine) 双重媒体特性感知：
 * - 电脑与外接高精度指针设备（iPad 触控板 / 鼠标）：激活 3D 物理透视倾斜与镜面光追；
 * - 移动端与平板手指触控：自动切换为 iOS 原生轻弹微按压（active:scale-[0.985]），
 *   实现电脑、平板、手机三端无缝切换与零晃动交互。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { useState, useRef, useEffect, type MouseEvent, type ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  borderBeam?: boolean
  beamGradient?: string
}

export function TiltCard({
  children,
  className = '',
  borderBeam = false,
  beamGradient,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null)
  const [transform, setTransform] = useState('')
  const [isPrecisePointer, setIsPrecisePointer] = useState(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 检验是否为高精度指针设备（鼠标/触控板），排除手指粗触控
      const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)')
      setIsPrecisePointer(mediaQuery.matches)

      const handleChange = (e: MediaQueryListEvent) => {
        setIsPrecisePointer(e.matches)
      }
      mediaQuery.addEventListener('change', handleChange)
      return () => mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isPrecisePointer) return
    setIsHovered(true)

    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = x / rect.width - 0.5
    const centerY = y / rect.height - 0.5

    const rotateX = -centerY * 12
    const rotateY = centerX * 12

    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`
    )
  }

  const handleMouseLeave = () => {
    if (!isPrecisePointer) return
    setIsHovered(false)
    setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)')
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isPrecisePointer ? transform : undefined,
        transition: isHovered
          ? 'transform 0.08s ease-out'
          : 'transform 0.35s cubic-bezier(0.2, 0, 0, 1)',
        transformStyle: isPrecisePointer ? 'preserve-3d' : undefined,
        willChange: isHovered ? 'transform' : 'auto',
      }}
      className={`relative rounded-2xl overflow-hidden active:scale-[0.985] active:shadow-md transition-all ${className}`}
    >
      {/* 高精度环形激光流光动效（自主待机运转，通电即震撼） */}
      {borderBeam && (
        <div
          aria-hidden="true"
          className="absolute -inset-[1.5px] rounded-2xl z-0 pointer-events-none opacity-85 transition-opacity duration-300"
          style={{
            background:
              beamGradient ||
              'conic-gradient(from 0deg, transparent 0deg, #6366f1 90deg, #a855f7 180deg, #38bdf8 270deg, transparent 360deg)',
            animation: 'spin 3.5s linear infinite',
          }}
        />
      )}

      {/* 卡片主内容层 */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  )
}
