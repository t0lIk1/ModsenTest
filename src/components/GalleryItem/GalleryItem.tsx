import React from 'react'
import {
  GalleryDetails,
  GalleryImg,
  GalleryItemContainer,
  FavoriteButton,
  TextDetails
} from './GalleryItem.styles.ts'
import favorite from '../../assets/Vector.svg'

interface IGalleryProps {
  title: string
  name: string
  status: string
  img: string
}

const GalleryItem: React.FC<IGalleryProps> = ({ img, title, name, status }) => {
  return (
    <GalleryItemContainer>
      <GalleryDetails>
        <>
          <GalleryImg src={img} alt="Artwork" />
          <TextDetails>
            <h3>{title}</h3>
            <span>{name}</span>
            <span>{status}</span>
          </TextDetails>
        </>
        <FavoriteButton>
          <img src={favorite} alt="Favorite" />
        </FavoriteButton>
      </GalleryDetails>
    </GalleryItemContainer>
  )
}

export default GalleryItem
