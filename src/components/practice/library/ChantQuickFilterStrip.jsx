import { defaultChantFilterState } from '../../../utils/chantFilters.js'
import { chantLibraryCopy } from './chantLibraryCopy.js'

const FORM = [
  { id: 'all', label: 'All' },
  { id: 'mezmur', label: 'Mezmur' },
  { id: 'werb', label: 'Werb' },
]

const PRIMARY = [
  { id: 'all', label: 'All' },
  { id: 'major-holiday', label: 'Major holiday' },
  { id: 'mary', label: 'Mary' },
  { id: 'saint', label: 'Saint' },
  { id: 'liturgical', label: 'Liturgical' },
  { id: 'general', label: 'General' },
]

const FEASTS = [
  { id: 'all', label: 'All' },
  { id: 'tinsae', label: 'Tinsae' },
  { id: 'hosanna', label: 'Hosanna' },
  { id: 'gena', label: 'Gena' },
  { id: 'timket', label: 'Timket' },
  { id: 'meskel', label: 'Meskel' },
]

const SEASONS = [
  { id: 'all', label: 'All' },
  { id: 'fasika', label: 'Fasika' },
  { id: 'tsige', label: 'Tsige' },
  { id: 'filseta', label: 'Filseta' },
  { id: 'gena', label: 'Gena' },
]

const THEMES = [
  { id: 'all', label: 'All' },
  { id: 'resurrection', label: 'Resurrection' },
  { id: 'peace', label: 'Peace' },
  { id: 'praise', label: 'Praise' },
  { id: 'cross', label: 'Cross' },
  { id: 'intercession', label: 'Intercession' },
  { id: 'incarnation', label: 'Incarnation' },
]

const CONF = [
  { id: 'all', label: 'All' },
  { id: 'high', label: 'High' },
  { id: 'medium', label: 'Medium' },
  { id: 'low', label: 'Low' },
]

/**
 * @param {object} props
 * @param {import('../../../utils/chantFilters.js').ChantFilterState} props.filters
 * @param {(p: import('../../../utils/chantFilters.js').ChantFilterState) => void} props.onChange
 */
export default function ChantQuickFilterStrip({ filters, onChange }) {
  const patch = (partial) => onChange({ ...defaultChantFilterState, ...filters, ...partial })

  return (
    <div className="chant-quick-filters" id="chant-quick-filters">
      <Row label={chantLibraryCopy.filterForm}>
        {FORM.map((o) => (
          <Chip
            key={o.id}
            pressed={
              o.id === 'all'
                ? filters.form === 'all'
                : filters.form === o.id
            }
            onClick={() => patch({ form: o.id === 'all' ? 'all' : /** @type {'mezmur'|'werb'} */ (o.id) })}
            label={o.label}
          />
        ))}
      </Row>

      <Row label={chantLibraryCopy.filterPrimary}>
        {PRIMARY.map((o) => (
          <Chip
            key={o.id}
            pressed={
              o.id === 'all'
                ? filters.primary === 'all'
                : filters.primary === o.id
            }
            onClick={() =>
              patch({
                primary:
                  o.id === 'all'
                    ? 'all'
                    : /** @type {'major-holiday'|'mary'|'saint'|'liturgical'|'general'} */ (o.id),
              })
            }
            label={o.label}
          />
        ))}
      </Row>

      <Row label={chantLibraryCopy.filterFeast}>
        {FEASTS.map((o) => (
          <Chip
            key={o.id}
            pressed={
              o.id === 'all' ? filters.majorHoliday === 'all' : filters.majorHoliday === o.id
            }
            onClick={() => patch({ majorHoliday: o.id })}
            label={o.label}
          />
        ))}
      </Row>

      <Row label={chantLibraryCopy.filterSeason}>
        {SEASONS.map((o) => (
          <Chip
            key={o.id}
            pressed={o.id === 'all' ? filters.season === 'all' : filters.season === o.id}
            onClick={() => patch({ season: o.id })}
            label={o.label}
          />
        ))}
      </Row>

      <Row label={chantLibraryCopy.filterThemes}>
        {THEMES.map((o) => (
          <Chip
            key={o.id}
            pressed={o.id === 'all' ? filters.theme === 'all' : filters.theme === o.id}
            onClick={() => patch({ theme: o.id })}
            label={o.label}
          />
        ))}
      </Row>

      <Row label={chantLibraryCopy.filterConfidence}>
        {CONF.map((o) => (
          <Chip
            key={o.id}
            pressed={
              o.id === 'all'
                ? filters.confidence === 'all'
                : filters.confidence === o.id
            }
            onClick={() =>
              patch({
                confidence:
                  o.id === 'all'
                    ? 'all'
                    : /** @type {'high'|'medium'|'low'} */ (o.id),
              })
            }
            label={o.label}
          />
        ))}
      </Row>
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div className="chant-quick-filters__row">
      <span className="chant-quick-filters__row-label">{label}</span>
      <div className="chant-quick-filters__chips" role="group">
        {children}
      </div>
    </div>
  )
}

function Chip({ label, pressed, onClick }) {
  return (
    <button
      type="button"
      className={'chant-quick-filters__chip' + (pressed ? ' is-active' : '')}
      aria-pressed={pressed}
      onClick={onClick}
    >
      {label}
    </button>
  )
}
