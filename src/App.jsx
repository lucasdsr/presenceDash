import PageLayout from './components/PageLayout'
import SectionTopDivider from './components/SectionTopDivider'
import SectionLabel from './components/SectionLabel'
import ProvenExperience from './components/ProvenExperience'
import ImpactStatistics from './components/ImpactStatistics'
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

      <div className="flex flex-row items-start mt-headline-to-stats gap-two-col-gap">
        <ImpactStatistics />
        <section
          aria-label="World map"
          className="flex-1 min-h-[400px]"
        />
      </div>

      <PartnerLogosGrid className="mt-partner-section" />
    </PageLayout>
  )
}

export default App
