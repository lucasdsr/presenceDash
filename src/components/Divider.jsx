function Divider({ className = '' }) {
  return (
    <hr
      className={`border-0 h-px bg-divider ${className}`.trim()}
      aria-hidden
    />
  )
}

export default Divider
