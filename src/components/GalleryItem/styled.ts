import styled from 'styled-components'
import { FavoriteBut } from '@/components/FavoriteButton/styled.ts'

export const GalleryItemContainer = styled.div`
  position: relative;
  max-height: 130px;
  max-width: 460px;
  width: 100%;
  margin: 0 auto;
  z-index: 1;

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

  ${FavoriteBut} {
    position: absolute;
    z-index: 2;
    top: 50%;
    right: 13px;
    transform: translateY(-50%);
  }
`

export const GalleryImg = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const GalleryDetails = styled.div`
  border: 1px solid #f0f1f1;
  padding: 16px;
  background: #fff;
`

export const GalleryInfo = styled.div`
  display: flex;
  gap: 16px;
`

export const TextDetails = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    font-weight: 500;
    font-size: 17px;
    line-height: 150%;
    letter-spacing: -0.03em;
    color: #393939;
    max-width: 219px;
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
