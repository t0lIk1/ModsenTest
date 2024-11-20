import React from 'react'
import {
  GalleryDetails,
  GalleryImg,
  GalleryItemContainer,
  FavoriteButton,
  TextDetails
} from './SpecialGalleryItem.styles.ts'
import favorite from '../../assets/Vector.svg'

interface IGalleryProps {
  title: string
  name: string
  status: string
  img: string // Тип string подходит для пути к изображению
}

const SpecialGalleryItem: React.FC<IGalleryProps> = ({ img, title, name, status }) => {
  return (
    <GalleryItemContainer>
      <GalleryImg src={img} alt="Artwork" />
      <GalleryDetails>
        <TextDetails>
          <h3>{title}</h3>
          <span>{name}</span>
          <span>{status}</span>
        </TextDetails>
        <FavoriteButton>
          <img src={favorite} alt="Favorite" />
        </FavoriteButton>
      </GalleryDetails>
    </GalleryItemContainer>
  )
}

export default SpecialGalleryItem
