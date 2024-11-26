import React, { useContext } from 'react'
import {
  GalleryDetails,
  GalleryImg,
  GalleryInfo,
  GalleryItemContainer,
  TextDetails
} from './GalleryItem.styles'
import FavoriteButton from '../FavoriteButton/FavoriteButton'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../FavoriteButton/FavoritesContext'

interface IGalleryProps {
  title: string
  name: string
  dateDisplay: string
  img: string
  itemId: number
  to: string
}

const GalleryItem: React.FC<IGalleryProps> = ({ img, title, name, dateDisplay, itemId, to }) => {
  const { isFavorite } = useContext(FavoritesContext)
  console.log(dateDisplay)
  return (
    <GalleryItemContainer>
      <Link to={to}>
        <GalleryDetails>
          <GalleryInfo>
            <GalleryImg src={img} />
            <TextDetails>
              <h3>{title || 'Untitled'}</h3>
              <span>{name || 'Unknown Artist'}</span>
              <span>{dateDisplay || 'Unknown'}</span>
            </TextDetails>
          </GalleryInfo>
        </GalleryDetails>
      </Link>
      <FavoriteButton
        itemId={itemId}
        title={title}
        artist_title={name}
        image_url={img}
        isFavorite={isFavorite(itemId)}
      />
    </GalleryItemContainer>
  )
}

export default GalleryItem
