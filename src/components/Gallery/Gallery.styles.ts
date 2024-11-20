import styled from 'styled-components'

export const GallerySection = styled.section`
  background-color: #f9f9f9;
`

export const GalleryWrapper = styled.div``

export const TitleWrapper = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h3 {
    font-weight: 400;
    font-size: 32px;
    color: #393939;
  }

  span {
    font-weight: 400;
    font-size: 16px;
    color: #e0a449;
  }
`

export const GalleryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  text-align: left;

  a {
    text-decoration: none;
    color: inherit;
  }
`
