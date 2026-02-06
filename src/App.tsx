import { lazy, Suspense } from 'react'
import PageLayout from './components/PageLayout'
import SectionTopDivider from './components/SectionTopDivider'
import SectionLabel from './components/SectionLabel'
import ProvenExperience from './components/Impact/ProvenExperience'
import ImpactStatistics from './components/Impact/ImpactStatistics'
import WorldMap from './components/Impact/WorldMap'

const PartnerLogosGrid = lazy(() => import('./components/Partners/PartnerLogosGrid'))

function App() {
  return (
    <PageLayout>
      <SectionTopDivider />

      <div className="flex flex-col md:flex-row items-start mt-section-label-gap-mobile md:mt-section-label-gap gap-two-col-gap min-w-0 w-full max-w-full">
        <div className="w-full md:w-[220px] lg:w-[300px] xl:w-our-impact shrink-0 min-w-0" aria-labelledby="impact-heading">
          <SectionLabel id="impact-heading">OUR IMPACT</SectionLabel>
        </div>
        <ProvenExperience />
      </div>

      <div className="flex flex-col md:flex-row items-stretch md:items-center mt-headline-to-stats-mobile md:mt-headline-to-stats gap-two-col-gap">
        <WorldMap className="order-1 md:order-2 flex-1 min-w-0" />
        <ImpactStatistics className="order-2 md:order-1 w-full md:w-auto shrink-0" />
      </div>

      <Suspense fallback={<section className="mt-partner-section-mobile md:mt-partner-section min-h-[120px]" aria-label="Partner logos" />}>
        <PartnerLogosGrid className="mt-partner-section-mobile md:mt-partner-section" />
      </Suspense>
    </PageLayout>
  )
}

export default App
