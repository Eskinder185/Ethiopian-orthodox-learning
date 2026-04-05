import '../../styles/ContentComponents.css'
import SectionTitle from './SectionTitle.jsx'

/**
 * Section heading + responsive grid for cards (practice tiles, features, etc.).
 */
export default function FeatureGrid({
  title,
  subtitle,
  id,
  variant = 'featured',
  children,
  className = '',
}) {
  const gridClass =
    variant === 'quick' ? 'feature-grid feature-grid--quick' : 'feature-grid feature-grid--featured'

  return (
    <div className={'feature-grid-wrap' + (className ? ` ${className}` : '')}>
      {title ? (
        <SectionTitle id={id} title={title} subtitle={subtitle} />
      ) : null}
      <div className={gridClass}>{children}</div>
    </div>
  )
}
