import ContentCard from '../cards/ContentCard.jsx'

/**
 * Hub card for /language — thin wrapper for consistent class hooks and defaults.
 */
export default function LanguageSectionCard({
  to,
  title,
  description,
  category = 'Language',
  className = '',
}) {
  return (
    <ContentCard
      to={to}
      title={title}
      description={description}
      category={category}
      className={`language-section-card${className ? ` ${className}` : ''}`}
    />
  )
}
