function Divider({ className = '' }) {
  return (
    <hr
      className={`border-0 ${className}`}
      style={{
        height: '1px',
        backgroundColor: 'var(--color-divider)',
      }}
      aria-hidden
    />
  )
}

export default Divider
