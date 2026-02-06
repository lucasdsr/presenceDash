import type { SectionLabelProps } from './SectionLabel.interface'

function SectionLabel({ id, className = '', children }: SectionLabelProps) {
  return (
    <p
      id={id}
      className={`font-sans font-semibold text-[16px] leading-[16px] tracking-[0.04em] uppercase text-text-muted w-our-impact h-[16px] flex-none order-0 grow-0 ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export default SectionLabel
