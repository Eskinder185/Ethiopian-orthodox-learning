import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './i18n/i18n.js'
import './index.css'
import './styles/sacred-motion.css'
import './styles/sacred-badges.css'
import './styles/section-atmosphere.css'
import './styles/ui-system.css'
import './styles/content-patterns.css'
import './styles/learn-sacred-media.css'
import { ThemeProvider } from './theme/ThemeContext.jsx'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
