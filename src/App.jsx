import PageLayout from './components/PageLayout'
import SectionTopDivider from './components/SectionTopDivider'
import SectionLabel from './components/SectionLabel'
import ProvenExperience from './components/ProvenExperience'
import ImpactStatistics from './components/ImpactStatistics'
import WorldMap from './components/WorldMap'
import PartnerLogosGrid from './components/PartnerLogosGrid'

function App() {
  return (
    <PageLayout>
      <SectionTopDivider />

      <div className="flex flex-row items-start mt-section-label-gap gap-two-col-gap">
        <div className="w-our-impact" aria-labelledby="impact-heading">
          <SectionLabel id="impact-heading">OUR IMPACT</SectionLabel>
        </div>
        <ProvenExperience />
      </div>

      <div className="flex flex-row items-center mt-headline-to-stats gap-two-col-gap">
        <ImpactStatistics />
        <WorldMap />
      </div>

      <PartnerLogosGrid className="mt-partner-section" />
    </PageLayout>
  )
}

export default App
