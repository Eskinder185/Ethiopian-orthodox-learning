import { chantLibraryCopy } from './chantLibraryCopy.js'

/**
 * Optional difficulty / seasonal / month chips — only rendered when catalog has matching fields.
 */
export default function ChantSecondaryFilters({
  filterCapabilities,
  difficultyFilter,
  onDifficultyChange,
  spotlightFilter,
  onSpotlightChange,
  ethiopianMonthName,
  idPrefix = 'chant-extra',
}) {
  const { hasDifficulty, hasSeason, hasMonth } = filterCapabilities || {}
  const showSpotlight = hasSeason || hasMonth
  if (!hasDifficulty && !showSpotlight) return null

  return (
    <div className="chant-secondary-filters">
      {hasDifficulty ? (
        <div className="chant-secondary-filters__group" role="group" aria-labelledby={`${idPrefix}-diff-label`}>
          <span id={`${idPrefix}-diff-label`} className="chant-secondary-filters__label">
            {chantLibraryCopy.filterDifficultyLabel}
          </span>
          <div className="chant-secondary-filters__chips">
            <Chip
              pressed={difficultyFilter === 'all'}
              onClick={() => onDifficultyChange('all')}
              label={chantLibraryCopy.filterDifficultyAll}
            />
            <Chip
              pressed={difficultyFilter === 'beginner'}
              onClick={() => onDifficultyChange('beginner')}
              label={chantLibraryCopy.filterBeginner}
            />
            <Chip
              pressed={difficultyFilter === 'intermediate'}
              onClick={() => onDifficultyChange('intermediate')}
              label={chantLibraryCopy.filterIntermediate}
            />
            <Chip
              pressed={difficultyFilter === 'advanced'}
              onClick={() => onDifficultyChange('advanced')}
              label={chantLibraryCopy.filterAdvanced}
            />
          </div>
        </div>
      ) : null}

      {showSpotlight ? (
        <div className="chant-secondary-filters__group" role="group" aria-labelledby={`${idPrefix}-spot-label`}>
          <span id={`${idPrefix}-spot-label`} className="chant-secondary-filters__label">
            {chantLibraryCopy.filterSpotlightLabel}
          </span>
          <div className="chant-secondary-filters__chips">
            <Chip
              pressed={spotlightFilter === 'all'}
              onClick={() => onSpotlightChange('all')}
              label={chantLibraryCopy.filterSpotlightAll}
            />
            {hasSeason ? (
              <Chip
                pressed={spotlightFilter === 'seasonal'}
                onClick={() => onSpotlightChange('seasonal')}
                label={chantLibraryCopy.filterSeasonal}
              />
            ) : null}
            {hasMonth ? (
              <Chip
                pressed={spotlightFilter === 'thisMonth'}
                onClick={() => onSpotlightChange('thisMonth')}
                label={chantLibraryCopy.filterThisMonth}
                title={ethiopianMonthName ? `Ethiopian month: ${ethiopianMonthName}` : undefined}
              />
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

function Chip({ pressed, onClick, label, title }) {
  return (
    <button
      type="button"
      className={'chant-secondary-filters__chip' + (pressed ? ' is-active' : '')}
      aria-pressed={pressed}
      onClick={onClick}
      title={title}
    >
      {label}
    </button>
  )
}
