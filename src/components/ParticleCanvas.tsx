/**
 * 空气感轻量 Canvas 物理粒子微动背景组件。
 *
 * 针对电脑、平板、手机三端执行阶梯式功耗与视口密度自适应：
 * - 手机（< 768px）：~20 粒子，节能省电且 120Hz 满帧；
 * - 平板（768px ~ 1024px）：~30 粒子，双手握持视野适中；
 * - 电脑（≥ 1024px）：~42 粒子，全景视野高雅灵动。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  baseAlpha: number
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    // 三端阶梯极致性能分级密度（极客空气感，零丢帧）
    const getParticleConfig = (w: number) => {
      if (w < 768) {
        return { count: 14, maxDistance: 85, radius: 100, force: 0.04, speed: 0.28 }
      }
      if (w < 1024) {
        return { count: 20, maxDistance: 110, radius: 125, force: 0.05, speed: 0.32 }
      }
      return { count: 28, maxDistance: 135, radius: 150, force: 0.06, speed: 0.36 }
    }

    let config = getParticleConfig(width)
    const mouse = { x: -1000, y: -1000, radius: config.radius }

    const particles: Particle[] = []
    for (let i = 0; i < config.count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.speed,
        vy: (Math.random() - 0.5) * config.speed,
        radius: Math.random() * 1.3 + 0.9,
        baseAlpha: Math.random() * 0.22 + 0.12,
      })
    }

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      config = getParticleConfig(width)
      mouse.radius = config.radius
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleTouchStart = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouse.x = e.touches[0].clientX
        mouse.y = e.touches[0].clientY
      }
    }

    const handlePointerEnd = () => {
      mouse.x = -1000
      mouse.y = -1000
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handlePointerEnd)
    window.addEventListener('touchstart', handleTouchStart, { passive: true })
    window.addEventListener('touchmove', handleTouchMove, { passive: true })
    window.addEventListener('touchend', handlePointerEnd, { passive: true })

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.hypot(dx, dy)

        if (dist < mouse.radius && dist > 1) {
          const force = (mouse.radius - dist) / mouse.radius
          const angle = Math.atan2(dy, dx)
          p.vx += Math.cos(angle) * force * config.force
          p.vy += Math.sin(angle) * force * config.force
        }

        p.vx *= 0.99
        p.vy *= 0.99

        p.x += p.vx
        p.y += p.vy

        if (p.x < 0) {
          p.x = 0
          p.vx *= -1
        } else if (p.x > width) {
          p.x = width
          p.vx *= -1
        }
        if (p.y < 0) {
          p.y = 0
          p.vy *= -1
        } else if (p.y > height) {
          p.y = height
          p.vy *= -1
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(99, 102, 241, ${p.baseAlpha})`
        ctx.fill()

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const pDist = Math.hypot(p.x - p2.x, p.y - p2.y)

          if (pDist < config.maxDistance) {
            const alpha = (1 - pDist / config.maxDistance) * 0.11
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(129, 140, 248, ${alpha})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handlePointerEnd)
      window.removeEventListener('touchstart', handleTouchStart)
      window.removeEventListener('touchmove', handleTouchMove)
      window.removeEventListener('touchend', handlePointerEnd)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.65 }}
    />
  )
}
