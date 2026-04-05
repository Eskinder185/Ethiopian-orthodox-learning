import '../../styles/ContentComponents.css'

export default function SectionDivider({ className = '' }) {
  return <hr className={'section-divider' + (className ? ` ${className}` : '')} />
}
