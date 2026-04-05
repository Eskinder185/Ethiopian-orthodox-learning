import '../../styles/ContentComponents.css'

export default function VerseCard({
  text,
  reference,
  label = 'Daily verse',
  className = '',
}) {
  return (
    <section className={'verse-card' + (className ? ` ${className}` : '')}>
      <h3 className="verse-card__label">{label}</h3>
      <p className="verse-card__text">{text}</p>
      <p className="verse-card__ref">{reference}</p>
    </section>
  )
}
