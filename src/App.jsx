function App() {
  return (
    <main className="min-h-screen py-12 px-[var(--spacing-page-x)]">
      <div className="mx-auto max-w-[var(--spacing-page-max)]">
        <p className="text-[var(--text-section-label)] font-[var(--text-section-label-weight)] uppercase tracking-wide text-primary">
          Phase 1 checkpoint
        </p>
        <div
          className="mt-[var(--spacing-section-label-gap)] h-1 w-12 rounded-full"
          style={{ backgroundColor: 'var(--color-accent)' }}
        />
        <p className="mt-8 text-[var(--text-body)]" style={{ color: 'var(--color-text-muted)' }}>
          Design tokens and theme applied. Ready for Phase 2.
        </p>
      </div>
    </main>
  )
}

export default App
