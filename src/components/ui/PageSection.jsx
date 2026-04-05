import SectionTitle from '../sections/SectionTitle.jsx'
import '../../styles/ui-system.css'

/**
 * Consistent vertical section wrapper with optional SectionTitle.
 */
export default function PageSection({
  id,
  title,
  subtitle,
  children,
  className = '',
  bodyClassName = '',
}) {
  return (
    <section
      className={`page-section${className ? ` ${className}` : ''}`}
      aria-labelledby={title && id ? id : undefined}
    >
      {title ? <SectionTitle id={id} title={title} subtitle={subtitle} /> : null}
      <div
        className={
          'page-section__body' +
          (!title ? ' page-section__body--flush' : '') +
          (bodyClassName ? ` ${bodyClassName}` : '')
        }
      >
        {children}
      </div>
    </section>
  )
}
