import { Link } from 'react-router-dom'
import { paths } from '../../constants/paths.js'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <p className="site-footer__note">
        Ethiopian Orthodox learning and practice — guided routines, respectful
        summaries, and links to trusted sources.{' '}
        <Link to={paths.about} className="site-footer__link">
          About this site
        </Link>
      </p>
      <p className="site-footer__copy">© {year} Orthodox Learning</p>
    </footer>
  )
}
