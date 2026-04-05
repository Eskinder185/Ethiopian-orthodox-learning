import { Link } from 'react-router-dom'
import PagePlaceholder from '../components/layout/PagePlaceholder.jsx'
import { paths } from '../constants/paths.js'

export default function NotFoundPage() {
  return (
    <PagePlaceholder
      title="Page not found"
      intro="That address does not match any section of the site."
      slotHeading={null}
    >
      <p>
        <Link to={paths.home}>Return to home</Link>
      </p>
    </PagePlaceholder>
  )
}
