import { useMemo, useState, useRef, useEffect } from 'react'
import PartnerLogoCard from './PartnerLogoCard'
import PaginationDots from './PaginationDots'
import type { PartnerLogo } from './PartnerLogoCard.interface'
import type { PartnerLogosGridProps } from './PartnerLogosGrid.interface'

const PARTNER_LOGOS: PartnerLogo[] = [
  { src: '/assets/partners/att.svg', alt: 'AT&T' },
  { src: '/assets/partners/claro.svg', alt: 'Claro' },
  { src: '/assets/partners/oi.svg', alt: 'Oi' },
  { src: '/assets/partners/telcel.svg', alt: 'Telcel' },
  { src: '/assets/partners/tim.svg', alt: 'TIM' },
  { src: '/assets/partners/vivo.svg', alt: 'Vivo' },
]

const ROWS = 3
const COLS = 12
const TOTAL_CELLS = ROWS * COLS
const CARD_WIDTH = 92
const CARD_GAP_X = 18.5
const CARD_GAP_Y = 16
const TOTAL_CONTENT_WIDTH = COLS * CARD_WIDTH + (COLS - 1) * CARD_GAP_X

function shuffle<T>(array: T[]): T[] {
  const out = [...array]
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[out[i], out[j]] = [out[j], out[i]]
  }
  return out
}

function PartnerLogosGrid({ className = '' }: PartnerLogosGridProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [currentPage, setCurrentPage] = useState(0)

  const cells = useMemo(() => {
    const filled = Array.from({ length: TOTAL_CELLS }, () => {
      const i = Math.floor(Math.random() * PARTNER_LOGOS.length)
      return PARTNER_LOGOS[i]
    })
    return shuffle(filled)
  }, [])

  const pageCount = useMemo(
    () => (containerWidth > 0 ? Math.ceil(TOTAL_CONTENT_WIDTH / containerWidth) : 1),
    [containerWidth]
  )

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const updateWidth = () => setContainerWidth(el.clientWidth)

    updateWidth()
    const observer = new ResizeObserver(updateWidth)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const onScroll = () => {
      if (pageCount <= 1) return
      const maxScroll = TOTAL_CONTENT_WIDTH - containerWidth
      const scrollLeft = el.scrollLeft
      const atEnd = maxScroll <= 0 || scrollLeft >= maxScroll - 1
      const page = atEnd
        ? pageCount - 1
        : Math.min(Math.max(0, Math.round(scrollLeft / containerWidth)), pageCount - 1)
      setCurrentPage(page)
    }

    el.addEventListener('scroll', onScroll, { passive: true })
    return () => el.removeEventListener('scroll', onScroll)
  }, [containerWidth, pageCount])

  const fitsAllColumns = containerWidth >= TOTAL_CONTENT_WIDTH - 0.5
  const showPagination = pageCount > 1 && !fitsAllColumns

  const scrollToPage = (pageIndex: number) => {
    const el = scrollRef.current
    if (!el || containerWidth <= 0) return
    setCurrentPage(pageIndex)
    const maxScroll = TOTAL_CONTENT_WIDTH - containerWidth
    const targetScroll = Math.min(pageIndex * containerWidth, Math.max(0, maxScroll))
    el.scrollTo({
      left: targetScroll,
      behavior: 'auto',
    })
  }

  return (
    <section className={className.trim()} aria-label="Partner logos">
      <div
        ref={scrollRef}
        className="partner-logos-scroll w-full overflow-x-auto overflow-y-hidden scroll-smooth"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
        }}
      >
        <div
          className="py-px mx-auto"
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${COLS}, ${CARD_WIDTH}px)`,
            gridAutoRows: '68px',
            width: TOTAL_CONTENT_WIDTH,
            gap: `${CARD_GAP_Y}px ${CARD_GAP_X}px`,
          }}
        >
          {cells.map((logo, index) => (
            <div key={index} className="flex items-center justify-center">
              <PartnerLogoCard src={logo.src} alt={logo.alt} />
            </div>
          ))}
        </div>
      </div>
      {showPagination && (
        <PaginationDots
          pageCount={pageCount}
          currentPage={currentPage}
          onPageSelect={scrollToPage}
        />
      )}
    </section>
  )
}

export default PartnerLogosGrid
