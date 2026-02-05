function StatBlock({ number, title, description }) {
  return (
    <div
      className="flex flex-col items-start"
      style={{ gap: 'var(--spacing-stat-inner-gap)', width: 'var(--width-impact-stats)' }}
    >
      <div
        className="flex flex-row items-start"
        style={{ gap: 'var(--spacing-stat-inner-gap)' }}
      >
        <span
          className="font-[500] text-primary"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'var(--text-stat-number)',
            lineHeight: 'var(--text-stat-number-height)',
          }}
        >
          {number}
        </span>
        <span
          className="font-[500]"
          style={{
            fontFamily: 'var(--font-poppins)',
            fontSize: 'var(--text-stat-plus)',
            lineHeight: 'var(--text-stat-plus-height)',
            color: 'var(--color-accent)',
          }}
        >
          +
        </span>
      </div>
      <h3
        className="font-[500]"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'var(--text-stat-title)',
          lineHeight: 'var(--text-stat-title-height)',
          color: 'var(--color-accent)',
        }}
      >
        {title}
      </h3>
      <p
        className="font-normal"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'var(--text-stat-desc)',
          lineHeight: 'var(--text-stat-desc-height)',
          color: 'var(--color-text-muted)',
        }}
      >
        {description}
      </p>
    </div>
  )
}

export default StatBlock
