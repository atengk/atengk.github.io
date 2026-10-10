/**
 * 通用样式类名合并辅助工具方法。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * 组合并合并 TailwindCSS 类名，自动处理冲突与条件渲染。
 *
 * @param inputs 类名或条件类名数组
 * @returns 合并优化后的类名字符串
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
