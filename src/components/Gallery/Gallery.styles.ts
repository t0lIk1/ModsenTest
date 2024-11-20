// Gallery.styles.ts
import styled from 'styled-components'

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
    overflow: hidden;
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
