function SectionLabel({ id, className = '', children }) {
  return (
    <p
      id={id}
      className={`uppercase tracking-[0.04em] text-primary text-section-label font-section-label ${className}`.trim()}
    >
      {children}
    </p>
  )
}

export default SectionLabel
