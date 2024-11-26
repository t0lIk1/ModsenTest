import React, { useContext } from 'react'
import {
  GalleryDetails,
  GalleryImg,
  GalleryItemContainer,
  TextDetails
} from './SpecialGalleryItem.styles.ts'
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../FavoriteButton/FavoritesContext.tsx'

interface IGalleryProps {
  title: string
  name: string
  date: string
  img: string
  itemId: number
  to: string
}

const SpecialGalleryItem: React.FC<IGalleryProps> = ({ img, title, name, date, itemId, to }) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const { isFavorite } = useContext(FavoritesContext)
  return (
    <GalleryItemContainer>
      <Link to={to}>
        <GalleryDetails>
          <GalleryImg src={img} />
          <TextDetails>
            <h3>{title}</h3>
            <span>{name}</span>
            <span>{date}</span>
          </TextDetails>
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

export default SpecialGalleryItem
