import React from 'react'
import {
  GalleryDetails,
  GalleryImg,
  GalleryItemContainer,
  TextDetails
} from './SpecialGalleryItem.styles.ts'
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx'
import { Link } from 'react-router-dom'

interface IGalleryProps {
  title: string
  name: string
  date: string
  img: string
  to: string
}

const SpecialGalleryItem: React.FC<IGalleryProps> = ({ to, img, title, name, date }) => {
  return (
    <GalleryItemContainer>
      <Link to={to}>
        <GalleryImg src={img} alt="Artwork" />
        <GalleryDetails>
          <TextDetails>
            <h3>{title || 'Unknow'}</h3>
            <span>{name || 'Unknow'}</span>
            <span>{date || 'Unknow'}</span>
          </TextDetails>
        </GalleryDetails>
      </Link>
      <FavoriteButton />
    </GalleryItemContainer>
  )
}

export default SpecialGalleryItem
