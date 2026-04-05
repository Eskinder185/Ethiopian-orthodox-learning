import { Link } from 'react-router-dom'
import '../../styles/ui-system.css'

/**
 * Primary / secondary / ghost actions — use for in-app navigation and buttons.
 */
export default function ActionButton({
  to,
  href,
  variant = 'primary',
  children,
  className = '',
  external,
  type = 'button',
  ...rest
}) {
  const cls = `btn btn--${variant}${className ? ` ${className}` : ''}`

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={cls}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <button type={type} className={cls} {...rest}>
      {children}
    </button>
  )
}
