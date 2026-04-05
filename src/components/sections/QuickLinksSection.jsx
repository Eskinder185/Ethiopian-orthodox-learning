import '../../styles/ContentComponents.css'
import SectionTitle from './SectionTitle.jsx'
import ContentCard from '../cards/ContentCard.jsx'

/**
 * Heading + grid of link cards (home or hub “quick links”).
 */
export default function QuickLinksSection({
  id,
  title,
  subtitle,
  links = [],
  className = '',
}) {
  return (
    <section
      className={'quick-links-section' + (className ? ` ${className}` : '')}
      aria-labelledby={id}
    >
      <SectionTitle id={id} title={title} subtitle={subtitle} />
      <div className="feature-grid feature-grid--quick">
        {links.map((item) => (
          <ContentCard
            key={item.to}
            to={item.to}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
    </section>
  )
}
