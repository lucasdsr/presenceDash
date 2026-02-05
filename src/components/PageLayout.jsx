function PageLayout({ children }) {
  return (
    <main className="min-h-screen py-12 px-[var(--spacing-page-x)]">
      <div className="mx-auto max-w-[var(--spacing-page-max)]">
        {children}
      </div>
    </main>
  )
}

export default PageLayout
