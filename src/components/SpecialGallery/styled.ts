import styled from 'styled-components'

export const GallerySection = styled.section`
  padding: 20px;
  background-color: #f9f9f9;
`

export const GalleryWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

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

export const GalleryGrid = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    display: block;
    border-radius: 8px;
    transition:
      transform 0.3s ease-in-out,
      box-shadow 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    }
  }
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
