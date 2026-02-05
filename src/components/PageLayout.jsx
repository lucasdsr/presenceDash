function PageLayout({ children }) {
  return (
    <main className="min-h-screen py-12 px-page-x">
      <div className="mx-auto max-w-page">
        {children}
      </div>
    </main>
  )
}

export default PageLayout
