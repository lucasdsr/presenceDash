import PageLayout from './components/PageLayout'
import ImpactSection from './components/ImpactSection'
import Divider from './components/Divider'

function App() {
  return (
    <PageLayout>
      <ImpactSection />

      <section aria-label="Statistics and description" className="mb-[var(--spacing-block-gap)]" />

      <section aria-label="World map" className="mb-[var(--spacing-block-gap)]" />

      <section aria-label="Partner logos" />
    </PageLayout>
  )
}

export default App
