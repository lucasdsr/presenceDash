import type { DividerProps } from './Divider.interface'

function Divider({ className = '' }: DividerProps) {
  return (
    <hr
      className={`border-0 h-px bg-divider ${className}`.trim()}
      aria-hidden
    />
  )
}

export default Divider
