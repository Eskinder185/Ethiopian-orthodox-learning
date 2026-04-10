import { useMemo } from 'react'
import { defaultChantFilterState } from '../../../utils/chantFilters.js'
import { slugToFilterLabel } from '../../../utils/chantFilterUi.js'
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

/**
 * @param {object} props
 * @param {import('../../../utils/chantFilters.js').ChantFilterState} props.filters
 * @param {(p: import('../../../utils/chantFilters.js').ChantFilterState) => void} props.onChange
 * @param {string[]} props.saintSlugs — from catalog (unique)
 * @param {string[]} props.usageSlugs — from catalog (unique)
 */
export default function ChantQuickFilterStrip({ filters, onChange, saintSlugs = [], usageSlugs = [] }) {
  const patch = (partial) => onChange({ ...defaultChantFilterState, ...filters, ...partial })

  const saintOptions = useMemo(
    () => [
      { id: 'all', label: chantLibraryCopy.filterAll },
      ...saintSlugs.map((id) => ({ id, label: slugToFilterLabel(id) })),
    ],
    [saintSlugs],
  )

  const usageOptions = useMemo(
    () => [
      { id: 'all', label: chantLibraryCopy.filterAll },
      ...usageSlugs.map((id) => ({ id, label: slugToFilterLabel(id) })),
    ],
    [usageSlugs],
  )

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

      {saintOptions.length > 1 ? (
        <Row label={chantLibraryCopy.filterSaint}>
          {saintOptions.map((o) => (
            <Chip
              key={o.id}
              pressed={o.id === 'all' ? filters.saint === 'all' : filters.saint === o.id}
              onClick={() => patch({ saint: o.id })}
              label={o.label}
            />
          ))}
        </Row>
      ) : null}

      {usageOptions.length > 1 ? (
        <Row label={chantLibraryCopy.filterUsage}>
          {usageOptions.map((o) => (
            <Chip
              key={o.id}
              pressed={o.id === 'all' ? filters.usage === 'all' : filters.usage === o.id}
              onClick={() => patch({ usage: o.id })}
              label={o.label}
            />
          ))}
        </Row>
      ) : null}
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
