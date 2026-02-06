import SectionLabel from '../SectionLabel'
import SectionTopDivider from '../SectionTopDivider'
import type { ImpactSectionProps } from './ImpactSection.interface'

function ImpactSection({ children }: ImpactSectionProps) {
  return (
    <section aria-labelledby="impact-heading">
      <SectionTopDivider />
      <SectionLabel id="impact-heading" className="mt-section-label-gap w-our-impact h-4 font-semibold text-base leading-4 tracking-[0.04em] text-text-muted flex-none">
        OUR IMPACT
      </SectionLabel>
      {children && (
        <div className="mt-block-gap">{children}</div>
      )}
    </section>
  )
}

export default ImpactSection
