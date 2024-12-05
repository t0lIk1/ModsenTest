import styled from 'styled-components'

import { FavoriteBut } from '@/components/FavoriteButton/styled.ts'

export const ArtBlock = styled.div`
  display: flex;
  gap: 80px;
`

export const ArtImg = styled.div`
    position: relative;

    img {
        max-width: 497px;
        max-height: 570px;
    }
}

${FavoriteBut} {
    position: absolute;
    top: 15px;
    right: 15px;
    background: #fff;

    &:hover {
        background: rgba(251, 215, 178, 0.9);

    }
`
export const ArtInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 40px;
`
export const ArtTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  h3 {
    font-weight: 400;
    font-size: 32px;
    color: #393939;
  }
  span {
    font-weight: 400;
    font-size: 24px;
    color: #e0a449;
  }
  span:last-child {
    font-weight: 700;
    font-size: 16px;
    color: #393939;
  }
`
export const ArtDetails = styled.div`
  h3 {
    font-weight: 400;
    font-size: 32px;
    color: #393939;
    margin-bottom: 32px;
  }
`
export const ArtText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-weight: 400;
  font-size: 16px;
  color: #393939;

  strong {
    color: #e0a449;
  }
`
