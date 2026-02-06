function PaginationDots({ pageCount, currentPage, onPageSelect }) {
  if (pageCount <= 1) return null

  return (
    <div
      className="flex justify-center gap-1.5 mt-4"
      role="tablist"
      aria-label="Partner logos pages"
    >
      {Array.from({ length: pageCount }, (_, i) => (
        <button
          key={i}
          type="button"
          role="tab"
          aria-selected={i === currentPage}
          aria-label={`Page ${i + 1}`}
          onClick={() => onPageSelect(i)}
          className={`h-1 w-6 rounded-sm transition-colors ${
            i === currentPage ? 'bg-accent' : 'bg-divider hover:bg-text-muted'
          }`}
        />
      ))}
    </div>
  )
}

export default PaginationDots
