import NextButton from '@/assets/Combined Shape.svg'
import { PaginationProps } from '@/types/type.ts'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageNumbers,
  onPageChange,
  onNextClick
}) => {
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
      <button type="button" onClick={onNextClick} disabled={currentPage >= totalPages}>
        <img src={NextButton} alt="next" />
      </button>
    </div>
  )
}

export default Pagination
