import { Outlet } from 'react-router-dom'
import SiteGuide from '../guide/SiteGuide.jsx'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'
import './Layout.css'

/**
 * Wraps every page: top navigation, main content area, footer.
 * Nested routes render inside <Outlet />.
 */
export default function Layout() {
  return (
    <div className="layout">
      <Navbar />
      <main className="layout__main" id="main-content">
        <Outlet />
      </main>
      <Footer />
      <SiteGuide />
    </div>
  )
}
