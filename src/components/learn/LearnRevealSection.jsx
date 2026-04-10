import { useRevealOnScroll } from '../../hooks/useRevealOnScroll.js'

export default function LearnRevealSection({ className = '', children, id, ...rest }) {
  const { revealProps } = useRevealOnScroll()
  return (
    <section id={id} className={className} {...revealProps} {...rest}>
      {children}
    </section>
  )
}
