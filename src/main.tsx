import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Global } from '@emotion/react'
import emotionReset from 'emotion-reset'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Global styles={emotionReset} />
    <App />
  </StrictMode>,
)
