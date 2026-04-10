/**
 * Line icons for the seven sacraments — calm, symbolic, not playful.
 */
const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export default function SacramentIcon({ variant, className = '' }) {
  const s = stroke
  let inner = null
  switch (variant) {
    case 'baptism':
      inner = (
        <>
          <path {...s} d="M20 6v28M12 14c0-4 3.5-6 8-6s8 2 8 6-3 8-8 12c-5-4-8-8-8-12z" />
        </>
      )
      break
    case 'confirmation':
      inner = (
        <>
          <path {...s} d="M20 6l-4 10h8L20 6zM16 16h8v6c0 4-8 4-8 0v-6z" />
        </>
      )
      break
    case 'eucharist':
      inner = (
        <>
          <path {...s} d="M12 30h16M20 8v14M16 14h8" />
          <ellipse {...s} cx="20" cy="26" rx="8" ry="4" />
        </>
      )
      break
    case 'penance':
      inner = <path {...s} d="M10 28c4-8 8-12 20-14M18 12l12-2-2 12" />
      break
    case 'unction':
      inner = <path {...s} d="M18 8l-6 20h16L22 8M20 28v6" />
      break
    case 'matrimony':
      inner = (
        <>
          <path {...s} d="M12 22c0-6 4-10 8-10s8 4 8 10-8 10-8 10-8-4-8-10z" />
          <path {...s} d="M22 18h10l-2 6h6" opacity="0.55" />
        </>
      )
      break
    case 'holyOrders':
      inner = (
        <>
          <path {...s} d="M20 6v8M14 14h12M16 18h8v16H16V18z" />
          <path {...s} d="M20 22v6M17 28h6" />
        </>
      )
      break
    default:
      inner = <circle {...s} cx="20" cy="20" r="12" />
  }

  return (
    <svg className={className} viewBox="0 0 40 40" aria-hidden="true">
      {inner}
    </svg>
  )
}
