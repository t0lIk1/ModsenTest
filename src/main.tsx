import '@/style/style.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from '@/components/App/index.tsx'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
)
