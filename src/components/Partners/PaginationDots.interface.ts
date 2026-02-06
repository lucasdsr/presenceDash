export interface PaginationDotsProps {
  pageCount: number
  currentPage: number
  onPageSelect: (index: number) => void
}
