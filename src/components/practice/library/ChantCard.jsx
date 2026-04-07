import { formatPrimaryLabel, formatTagLabel, pickDisplayTags } from './chantDisplayUtils.js'
import { chantLibraryCopy } from './chantLibraryCopy.js'

/**
 * @param {object} props
 * @param {import('../../../data/chants/chants.js').ChantEntry} props.entry
 * @param {() => void} props.onPractice
 * @param {number} [props.maxTags]
 */
export default function ChantCard({ entry, onPractice, maxTags = 2 }) {
  const formLabel = entry.form === 'werb' ? chantLibraryCopy.typeWerb : chantLibraryCopy.typeMezmur
  const primaryLabel = formatPrimaryLabel(entry.category.primary)
  const tags = pickDisplayTags(entry.category, maxTags)

  return (
    <article className="chant-card chant-card--browse">
      <div className="chant-card__main">
        <p className="chant-card__title-am" lang="am">
          {entry.title}
        </p>
        {entry.transliterationTitle ? (
          <p className="chant-card__title-tr">{entry.transliterationTitle}</p>
        ) : null}

        <div className="chant-card__badges-row">
          <span className={'chant-card__badge chant-card__badge--' + entry.form}>{formLabel}</span>
          <span className="chant-card__badge chant-card__badge--primary">{primaryLabel}</span>
        </div>

        {tags.length > 0 ? (
          <ul className="chant-card__tags" aria-label="Tags">
            {tags.map((tag) => (
              <li key={tag} className="chant-card__tag">
                {formatTagLabel(tag)}
              </li>
            ))}
          </ul>
        ) : null}
      </div>

      <div className="chant-card__actions chant-card__actions--single">
        <button type="button" className="chant-card__action btn btn--primary" onClick={onPractice}>
          {chantLibraryCopy.practice}
        </button>
      </div>
    </article>
  )
}
