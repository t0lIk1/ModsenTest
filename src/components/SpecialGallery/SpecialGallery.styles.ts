import styled from 'styled-components'

// Style for the section
export const GallerySection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
`

// Wrapper for the entire gallery content
export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

// Style for the title and subtitle
export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 40px;

  span {
    font-size: 16px;
    color: #e0a449;
  }

  h3 {
    font-size: 32px;
    color: #393939;
  }
`

// Style for the grid of gallery items
export const GalleryGrid = styled.div`
  display: flex;
  transition: transform 0.3s ease-in-out;
  justify-content: space-between;
  a {
    cursor: pointer;
    &:hover {
      scale: 101%;
      transition: 0.3s ease;
    }
  }
`

export const GalleryItemWrapper = styled.div`
  flex: 0 0 33.33%; /* Show 3 items per row */
  padding: 10px;
`

export const PaginationWrapper = styled.div`
  text-align: right;
  margin-top: 100px;

  .pagination {
    display: inline-flex;
    gap: 10px;
    align-items: center;

    button {
      border-radius: 4px;
      width: 30px;
      height: 30px;
      background: transparent;
      cursor: pointer;
      text-align: center;
      &:disabled {
        background-color: #ddd;
        cursor: not-allowed;
      }

      &.active {
        background-color: #f17900;
        color: white;
      }

      &:hover {
        background-color: #f17900;
        color: white;
        transition: 0.3s ease-in-out;
      }
    }
  }
`

export const Pagination = styled.div`
  display: grid;
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
