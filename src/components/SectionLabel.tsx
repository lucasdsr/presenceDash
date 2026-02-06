import type { SectionLabelProps } from './SectionLabel.interface'

function SectionLabel({ id, className = '', children }: SectionLabelProps) {
  return (
    <p
      id={id}
      className={`uppercase tracking-[0.04em] text-primary text-section-label font-section-label font-semibold ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export default SectionLabel
