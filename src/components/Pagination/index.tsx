import NextButton from '@/assets/Combined Shape.svg'
import { PaginationProps } from '@/types/type.ts'

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  pageNumbers,
  onPageChange,
  onNextClick,
  onPreviousClick
}) => {
  return (
    <div className="pagination">
      <button type="button" onClick={onPreviousClick} disabled={currentPage <= 1}>
        <img src={NextButton} alt="previous" style={{ transform: 'rotate(180deg)' }} />
      </button>
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
      <button type="button" onClick={onNextClick} disabled={currentPage >= totalPages}>
        <img src={NextButton} alt="next" />
      </button>
    </div>
  )
}

export default Pagination
