import ContentCard from '../cards/ContentCard.jsx'

/**
 * Hub card for /calendar — mirrors LanguageSectionCard for consistent navigation.
 */
export default function CalendarSectionCard({
  to,
  title,
  description,
  category = 'Calendar',
  className = '',
}) {
  return (
    <ContentCard
      to={to}
      title={title}
      description={description}
      category={category}
      className={`calendar-section-card${className ? ` ${className}` : ''}`}
    />
  )
}
