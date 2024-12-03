import NextButton from '@/assets/Combined Shape.svg'
import { PaginationProps } from '@/types/type.ts'

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const maxPagesToShow = 4
  const pageNumbers: number[] = []

  // Generate page numbers from 1 to maxPagesToShow or totalPages, whichever is smaller
  for (let i = 1; i <= Math.min(maxPagesToShow, totalPages); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      {pageNumbers.map((number) => (
        <button
          type="button"
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? 'active' : ''}
        >
          {number}
        </button>
      ))}
      {/* Next button */}
      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= maxPagesToShow || currentPage === totalPages}
      >
        <img src={NextButton} alt="next" />
      </button>
    </div>
  )
}

export default Pagination
