function SectionTopDivider() {
  return (
    <div className="flex w-full items-end gap-0" aria-hidden>
      <div
        className="shrink-0"
        style={{
          width: 'var(--section-underline-width)',
          height: 'var(--section-underline-height)',
          background: '#062EFE',
          clipPath: 'polygon(0 0, 68px 0, 72px 4px, 0 4px)',
        }}
      />
      <div
        className="flex-1 shrink-0"
        style={{
          height: 'var(--section-underline-height)',
          backgroundColor: 'var(--color-divider)',
        }}
      />
    </div>
  )
}

export default SectionTopDivider
