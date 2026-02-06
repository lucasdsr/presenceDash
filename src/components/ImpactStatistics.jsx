import StatBlock from './StatBlock'
import Divider from './Divider'

const STATS = [
  {
    number: '45',
    title: 'Countries',
    description: 'With live operations around the world',
  },
  {
    number: '100',
    title: 'Partners',
    description: 'Active Unique B2B Partners',
  },
  {
    number: '2.5',
    title: 'Billions',
    description: 'Addressable users through our active partnerships',
  },
]

function ImpactStatistics({ className = '' }) {
  return (
    <aside
      className={`flex flex-col items-center md:items-center w-full md:w-impact-stats ${className}`.trim()}
      aria-label="Impact statistics"
    >
      {STATS.map((stat, index) => (
        <div key={stat.title} className="flex flex-col items-center md:items-start w-full">
          <StatBlock
            number={stat.number}
            title={stat.title}
            description={stat.description}
          />
          {index < STATS.length - 1 && (
            <Divider className="w-full mt-stat-block-gap mb-stat-block-gap" />
          )}
        </div>
      ))}
    </aside>
  )
}

export default ImpactStatistics
