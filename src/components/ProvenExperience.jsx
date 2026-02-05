function ProvenExperience() {
  return (
    <div
      className="flex flex-col items-start shrink-0"
      style={{
        gap: 'var(--spacing-proven-gap)',
        maxWidth: 'var(--width-proven)',
      }}
      aria-label="Proven experience"
    >
      <h2
        className="font-[500] text-primary"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'var(--text-proven-title)',
          lineHeight: 'var(--text-proven-title-height)',
        }}
      >
        Proven experience
      </h2>
      <p
        className="font-[500]"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'var(--text-proven-subtitle)',
          lineHeight: 'var(--text-proven-subtitle-height)',
          color: 'var(--color-accent)',
        }}
      >
        International Presence in most main emerging economies
      </p>
      <p
        className="font-normal"
        style={{
          fontFamily: 'var(--font-poppins)',
          fontSize: 'var(--text-proven-body)',
          lineHeight: 'var(--text-proven-body-height)',
          color: 'var(--color-text-muted)',
        }}
      >
        We democratize the access to digital services through mobile services for millions of users around the world. Multi-Cultural and Multidisciplinary tech drive team, with Solid relations in our partnerships in a large and growing market.
      </p>
    </div>
  )
}

export default ProvenExperience
