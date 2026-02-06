import type { StatBlockProps } from './StatBlock.interface'

function StatBlock({ number, title, description }: StatBlockProps) {
  return (
    <>
      <div className="flex flex-row items-center gap-4 w-full md:hidden text-left">
        <div className="flex flex-row items-center gap-stat-inner-gap shrink-0">
          <span className="font-sans font-medium text-[34px] leading-[40px] text-primary">
            {number}
          </span>
          <span className="font-sans font-medium text-[36px] leading-[44px] text-accent">
            +
          </span>
        </div>
        <div className="flex flex-col items-start gap-1 min-w-0">
          <h3 className="font-sans font-medium text-[20px] leading-[28px] text-accent">
            {title}
          </h3>
          <p className="font-sans font-normal text-[14px] leading-[22px] text-text-muted">
            {description}
          </p>
        </div>
      </div>
      <div className="hidden md:flex flex-col items-start gap-stat-inner-gap w-impact-stats text-left">
        <div className="flex flex-row items-start gap-stat-inner-gap">
          <span className="font-sans font-medium text-stat-number leading-stat-number text-primary">
            {number}
          </span>
          <span className="font-sans font-medium text-stat-plus leading-stat-plus text-accent">
            +
          </span>
        </div>
        <h3 className="font-sans font-medium text-stat-title leading-stat-title text-accent">
          {title}
        </h3>
        <p className="font-sans font-normal text-stat-desc leading-stat-desc text-text-muted">
          {description}
        </p>
      </div>
    </>
  )
}

export default StatBlock
