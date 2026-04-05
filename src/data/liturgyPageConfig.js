import { paths } from '../constants/paths.js'

const rel = (to, label, description) => ({
  to,
  label,
  description,
  kind: 'On this site',
})

/** Related links for the Liturgy teaching page. */
export const liturgyPageConfig = {
  relatedItems: [
    rel(paths.practice.mezmur, 'Mezmur practice', 'Hymns inside the liturgy.'),
    rel(paths.practice.tselot, 'Tselot practice', 'Personal prayer beside communal worship.'),
    rel(paths.learn.churchKnowledge, 'Church knowledge', 'Context for worship and feasts.'),
  ],
}
