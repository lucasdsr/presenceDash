import { useMemo } from 'react'
import PartnerLogoCard from './PartnerLogoCard'

const PARTNER_LOGOS = [
  { src: '/assets/partners/att.svg', alt: 'AT&T' },
  { src: '/assets/partners/claro.svg', alt: 'Claro' },
  { src: '/assets/partners/oi.svg', alt: 'Oi' },
  { src: '/assets/partners/telcel.svg', alt: 'Telcel' },
  { src: '/assets/partners/tim.svg', alt: 'TIM' },
  { src: '/assets/partners/vivo.svg', alt: 'Vivo' },
]

function shuffle(array) {
  const out = [...array]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

const ROWS = 3
const COLS = 12
const TOTAL_CELLS = ROWS * COLS

function PartnerLogosGrid({ className = '' }) {
  const cells = useMemo(() => {
    const filled = Array.from({ length: TOTAL_CELLS }, () => {
      const i = Math.floor(Math.random() * PARTNER_LOGOS.length)
      return PARTNER_LOGOS[i]
    })
    return shuffle(filled)
  }, [])

  return (
    <section
      className={`grid gap-x-partner-gap-x gap-y-partner-gap-y w-max [grid-template-columns:repeat(12,92px)] ${className}`.trim()}
      aria-label="Partner logos"
    >
      {cells.map((logo, index) => (
        <div key={index} className="flex items-center justify-center">
          <PartnerLogoCard src={logo.src} alt={logo.alt} />
        </div>
      ))}
    </section>
  )
}

export default PartnerLogosGrid
