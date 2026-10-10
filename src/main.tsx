/**
 * 客户端应用启动挂载入口，初始化 React 19 并挂载根 DOM 节点。
 *
 * @author Ateng
 * @since 2026-10-10
 */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './styles/globals.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
