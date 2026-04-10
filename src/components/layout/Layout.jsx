import { Outlet, useLocation } from 'react-router-dom'
import SiteGuide from '../guide/SiteGuide.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import ScrollToHash from './ScrollToHash.jsx'
import './Layout.css'

function useMainSectionClass() {
  const { pathname } = useLocation()
  if (pathname === '/') return 'home'
  if (pathname.startsWith('/learn')) return 'learn'
  if (pathname.startsWith('/calendar')) return 'calendar'
  if (pathname.startsWith('/practice')) return 'practice'
  return ''
}

/**
 * Wraps every page: top navigation, main content area, footer.
 * Nested routes render inside <Outlet />.
 */
export default function Layout() {
  const section = useMainSectionClass()
  const mainMod = section ? ` layout__main--${section}` : ''

  return (
    <div className={`layout${section ? ` layout--${section}` : ''}`.trim()}>
      <Navbar />
      <main className={`layout__main${mainMod}`.trim()} id="main-content">
        <ScrollToHash />
        <Outlet />
      </main>
      <Footer />
      <SiteGuide />
    </div>
  )
}
