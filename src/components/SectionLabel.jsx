function SectionLabel({ id, className = '', children }) {
  return (
    <p
      id={id}
      className={`uppercase tracking-wide text-primary ${className}`.trim()}
      style={{
        fontSize: 'var(--text-section-label)',
        fontWeight: 'var(--text-section-label-weight)',
      }}
    >
      {children}
    </p>
  )
}

export default SectionLabel
