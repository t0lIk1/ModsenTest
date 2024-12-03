import styled from 'styled-components'
import { SortButtonProps } from '@/types/type.ts'

export const SortWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
  }
`

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
