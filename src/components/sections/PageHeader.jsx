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

  return (
    <PageHero
      title={title}
      subtitle={intro}
      eyebrow={eyebrow}
      sectionLabel={label}
      compact={compact}
      className={className}
    >
      {children}
    </PageHero>
  )
}
