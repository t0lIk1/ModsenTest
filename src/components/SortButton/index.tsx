import { SortWrapper } from '@/components/SortButton/styled.ts'
import { SortButtonProps } from '@/types/type.ts'

const SortButton: React.FC<SortButtonProps> = ({ sortType, setSortType }) => {
  return (
    <SortWrapper>
      <label>
        <input
          type="radio"
          name="sort"
          value="alphabetical"
          checked={sortType === 'alphabetical'}
          onChange={() => setSortType('alphabetical')}
        />
        A-Z
      </label>
      <label>
        <input
          type="radio"
          name="sort"
          value="date_display"
          checked={sortType === 'date_display'}
          onChange={() => setSortType('date_display')}
        />
        Date
      </label>
    </SortWrapper>
  )
}

export default SortButton
