import PageHero from './PageHero.jsx'

/**
 * Standard page top: optional section label (category), eyebrow, title, intro, then optional children.
 * Pass `category` or `sectionLabel` for the pill above the title (same style as content-page__category).
 */
export default function PageHeader({
  title,
  intro,
  eyebrow,
  category,
  sectionLabel,
  compact = false,
  children,
  className = '',
}) {
  const label = sectionLabel ?? category
  const subtitleParagraphs = Array.isArray(intro) ? intro : undefined
  const subtitle = typeof intro === 'string' ? intro : undefined

  return (
    <PageHero
      title={title}
      subtitle={subtitle}
      subtitleParagraphs={subtitleParagraphs}
      eyebrow={eyebrow}
      sectionLabel={label}
      compact={compact}
      className={className}
    >
      {children}
    </PageHero>
  )
}
