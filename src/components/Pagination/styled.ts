import styled from 'styled-components'

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;

  button {
    padding: 10px;
    background-color: #333;
    color: white;
    border: none;
    cursor: pointer;

    &:disabled {
      background-color: #ccc;
    }
  }

  span {
    padding: 10px;
  }
`

export const PaginationWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
`

export const GalleryItemWrapper = styled.div`
  flex: 0 0 33.33%;
  padding: 10px;
`
