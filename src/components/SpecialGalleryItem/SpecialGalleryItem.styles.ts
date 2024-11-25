import styled from 'styled-components'
import { FavoriteBut } from '../FavoriteButton/FavoriteButton.styles.ts'
// import { FavoriteBut } from '../FavoriteButton/FavoriteButton.styles.ts'

export const GalleryItemContainer = styled.div`
  max-height: 514px;
  max-width: 387px;
  position: relative;
  margin: 0 auto;

  ${FavoriteBut} {
    position: absolute;
    right: 10px;
    top: 10px;
  }
`

export const GalleryImg = styled.img`
  width: 100%;
  height: 444px;
  z-index: 1;
  object-fit: cover;
`

export const GalleryDetails = styled.div`
  position: relative;
`

export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: space-between;
  border: 1px solid #f0f1f1;
  padding: 21px 24px;
  width: 334px;
  height: 132px;
  background: #fff;
  z-index: 2;
  left: 50%;
  top: 100%;
  transform: translate(-50%, -50%);

  h3 {
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #393939;
    max-width: 290px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    font-weight: 400;
    font-size: 15px;
    line-height: 171%;
    letter-spacing: -0.01em;
    color: #e0a449;
  }

  span:last-child {
    font-weight: 700;
    font-size: 15px;
    line-height: 171%;
    letter-spacing: -0.01em;
    color: #393939;
  }
`
