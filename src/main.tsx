import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ChatExample } from './App'
import './default.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ChatExample />
  </StrictMode>,
)
