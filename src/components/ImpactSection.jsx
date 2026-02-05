import SectionLabel from './SectionLabel'

function ImpactSection({ children }) {
  return (
    <section aria-labelledby="impact-heading">
      <div className="flex w-full items-end gap-0" aria-hidden>
        <div className="shrink-0 w-section-underline h-section-underline bg-accent [clip-path:polygon(0_0,68px_0,72px_4px,0_4px)]" />
        <div className="flex-1 shrink-0 h-px bg-divider" />
      </div>
      <SectionLabel id="impact-heading" className="mt-section-label-gap">
        OUR IMPACT
      </SectionLabel>
      {children && (
        <div className="mt-block-gap">{children}</div>
      )}
    </section>
  )
}

export default ImpactSection
