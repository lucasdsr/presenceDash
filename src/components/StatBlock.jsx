function StatBlock({ number, title, description }) {
  return (
    <div className="flex flex-col items-start gap-stat-inner-gap w-impact-stats">
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
  )
}

export default StatBlock
