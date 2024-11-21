import NextButton from '../../assets/Combined Shape.svg'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

// eslint-disable-next-line react/prop-types
const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers: number[] = []

  // Generate page numbers from 1 to totalPages
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="pagination">
      {/* Page number buttons */}
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
        disabled={currentPage === totalPages}
      >
        <img src={NextButton} alt="next" />
      </button>
    </div>
  )
}

export default Pagination
