import PageLayout from './components/PageLayout'
import SectionTopDivider from './components/SectionTopDivider'
import SectionLabel from './components/SectionLabel'
import ProvenExperience from './components/ProvenExperience'
import ImpactStatistics from './components/ImpactStatistics'

function App() {
  return (
    <PageLayout>
      <SectionTopDivider />

      <div
        className="flex flex-row items-start"
        style={{
          marginTop: 'var(--spacing-section-label-gap)',
          gap: 'var(--spacing-two-col-gap)',
        }}
      >
        <div
          style={{ width: 'var(--width-our-impact)' }}
          aria-labelledby="impact-heading"
        >
          <SectionLabel id="impact-heading">OUR IMPACT</SectionLabel>
        </div>
        <ProvenExperience />
      </div>

      <div
        className="flex flex-row items-start"
        style={{
          marginTop: 'var(--spacing-headline-to-stats)',
          gap: 'var(--spacing-two-col-gap)',
        }}
      >
        <ImpactStatistics />
        <section
          aria-label="World map"
          className="flex-1 min-h-[400px]"
        />
      </div>

      <section aria-label="Partner logos" className="mt-[var(--spacing-block-gap)]" />
    </PageLayout>
  )
}

export default App
