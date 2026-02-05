function Divider({ className = '', style = {} }) {
  return (
    <hr
      className={`border-0 ${className}`}
      style={{
        height: '1px',
        backgroundColor: 'var(--color-divider)',
        ...style,
      }}
      aria-hidden
    />
  )
}

export default Divider
