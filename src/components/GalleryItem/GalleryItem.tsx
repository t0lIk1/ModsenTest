import React, { useContext } from 'react'
import {
  GalleryDetails,
  GalleryImg,
  GalleryItemContainer,
  TextDetails,
  GalleryInfo
} from './GalleryItem.styles.ts'
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../FavoriteButton/FavoritesContext.tsx'

interface IGalleryProps {
  title: string
  name: string
  status: string
  img: string
  itemId: string
  to: string
}

const GalleryItem: React.FC<IGalleryProps> = ({ img, title, name, status, itemId, to }) => {
  // eslint-disable-next-line
  // @ts-ignore
  const { isFavorite } = useContext(FavoritesContext)

  return (
    <GalleryItemContainer>
      <Link to={to}>
        <GalleryDetails>
          <GalleryInfo>
            <GalleryImg src={img} />
            <TextDetails>
              <h3>{title}</h3>
              <span>{name}</span>
              <span>{status}</span>
            </TextDetails>
          </GalleryInfo>
        </GalleryDetails>
      </Link>
      <FavoriteButton
        itemId={itemId}
        title={title}
        artist_title={name}
        image_url={img}
        isFavorite={isFavorite(itemId)} // Передаем состояние избранного
      />
    </GalleryItemContainer>
  )
}

export default GalleryItem
