import { useState } from 'react'

const PIN_ACCENT = '#062EFE'
const PIN_PRIMARY = '#020F5B'
const VIEWBOX_WIDTH = 837
const VIEWBOX_HEIGHT = 391
const PIN_NORMAL_OUTER_R = 9
const PIN_NORMAL_INNER_R = 3
const PIN_HOVER_OUTER_R = 16
const PIN_HOVER_INNER_R = 8
const BADGE_WIDTH = 114
const BADGE_HEIGHT = 28
const BADGE_TOP_OFFSET = 48
const PIN_TRANSITION = 'r 0.2s ease-out, fill 0.2s ease-out'
const BADGE_TRANSITION = 'opacity 0.2s ease-out'

const MAP_PINS = [
  { cx: 390, cy: 134.625 },
  { cx: 349, cy: 158.625 },
  { cx: 365, cy: 225.625 },
  { cx: 395, cy: 210.625 },
  { cx: 489, cy: 141.625 },
  { cx: 544, cy: 91.625 },
  { cx: 667, cy: 72.625 },
  { cx: 608, cy: 11.625 },
  { cx: 478, cy: 20.625 },
  { cx: 525, cy: 267.625 },
  { cx: 707, cy: 160.625 },
  { cx: 719, cy: 171.625 },
  { cx: 660, cy: 169.625 },
  { cx: 678, cy: 139.625 },
  { cx: 625, cy: 138.625 },
  { cx: 624, cy: 98.625 },
  { cx: 674, cy: 228.625 },
  { cx: 755, cy: 188.625 },
  { cx: 774, cy: 206.625 },
  { cx: 739, cy: 198.625 },
  { cx: 787, cy: 247.625 },
  { cx: 818, cy: 162.625 },
  { cx: 825, cy: 205.625 },
  { cx: 749, cy: 235.625 },
  { cx: 510, cy: 315.625 },
  { cx: 472, cy: 357.625 },
  { cx: 166, cy: 354.625 },
  { cx: 198, cy: 368.625 },
  { cx: 129, cy: 378.625 },
  { cx: 214, cy: 293.625 },
  { cx: 148, cy: 304.625 },
  { cx: 12, cy: 161.625 },
  { cx: 111, cy: 241.625 },
  { cx: 155, cy: 184.625 },
  { cx: 123, cy: 178.625 },
  { cx: 97, cy: 263.625 },
  { cx: 115, cy: 289.625 },
  { cx: 65, cy: 198.625 },
  { cx: 83, cy: 189.625 },
  { cx: 89, cy: 215.625 },
  { cx: 61, cy: 178.625 },
  { cx: 44, cy: 194.625 },
  { cx: 40, cy: 175.625 },
]

function WorldMap({ className = '' }) {
  const [hoveredIndex, setHoveredIndex] = useState(null)

  return (
    <section
      aria-label="World presence map"
      className={`flex-1 flex justify-center items-center min-w-0 ${className}`.trim()}
    >
      <div className="relative w-full max-w-[1080px] aspect-[1080/718] overflow-visible">
        <img
          src="/assets/map/map-no-pins.svg"
          alt=""
          role="presentation"
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-contain"
        />
        <div className="absolute left-1/2 top-1/2 w-[88%] max-w-[950px] aspect-[950/445] -translate-x-1/2 -translate-y-1/2 overflow-visible">
          <svg
            className="w-full h-full object-contain overflow-visible"
            viewBox={`0 0 ${VIEWBOX_WIDTH} ${VIEWBOX_HEIGHT}`}
            preserveAspectRatio="xMidYMid meet"
            style={{ overflow: 'visible' }}
            aria-hidden
          >
          <g>
            {MAP_PINS.map((pin, index) => {
              const isHovered = hoveredIndex === index
              const outerR = isHovered ? PIN_HOVER_OUTER_R : PIN_NORMAL_OUTER_R
              const innerR = isHovered ? PIN_HOVER_INNER_R : PIN_NORMAL_INNER_R
              const badgeX = pin.cx - BADGE_WIDTH / 2
              const badgeY = pin.cy - BADGE_TOP_OFFSET
              return (
                <g key={index}>
                  <g
                    style={{
                      opacity: isHovered ? 1 : 0,
                      transition: BADGE_TRANSITION,
                      pointerEvents: isHovered ? 'auto' : 'none',
                    }}
                  >
                    <rect
                      x={badgeX}
                      y={badgeY}
                      width={BADGE_WIDTH}
                      height={BADGE_HEIGHT}
                      rx={4}
                      fill={PIN_PRIMARY}
                    />
                    <text
                      x={pin.cx}
                      y={badgeY + BADGE_HEIGHT / 2}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="#FFFFFF"
                      fontSize={14}
                      fontWeight={400}
                      fontFamily="Poppins, system-ui, sans-serif"
                      style={{ lineHeight: 20 }}
                    >
                      Country name
                    </text>
                  </g>
                  <g
                    transform={`translate(${pin.cx}, ${pin.cy})`}
                    className="cursor-pointer"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onFocus={() => setHoveredIndex(index)}
                    onBlur={() => setHoveredIndex(null)}
                    role="button"
                    tabIndex={0}
                    aria-label={`Location ${index + 1}`}
                  >
                    <circle
                      r={outerR}
                      fill={PIN_ACCENT}
                      fillOpacity={0.3}
                      style={{ transition: PIN_TRANSITION }}
                    />
                    <circle
                      r={innerR}
                      fill={isHovered ? PIN_PRIMARY : PIN_ACCENT}
                      style={{ transition: PIN_TRANSITION }}
                    />
                  </g>
                </g>
              )
            })}
          </g>
          </svg>
        </div>
      </div>
    </section>
  )
}

export default WorldMap
