import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { GalleryDetails, GalleryImg, GalleryItemContainer, TextDetails } from './styled.ts'
import FavoriteButton from '@/components/FavoriteButton/index.tsx'
import { FavoritesContext } from '@/components/FavoriteButton/FavoritesContext.tsx'
import { IGalleryProps } from '@/types/type.ts'

const SpecialGalleryItem: React.FC<IGalleryProps> = ({
  image_url,
  title,
  artist_title,
  date_display,
  id,
  to
}) => {
  const { isFavorite } = useContext(FavoritesContext)
  return (
    <GalleryItemContainer>
      <Link to={to}>
        <GalleryDetails>
          <GalleryImg src={image_url} />
          <TextDetails>
            <h3>{title}</h3>
            <span>{artist_title}</span>
            <span>{date_display}</span>
          </TextDetails>
        </GalleryDetails>
      </Link>
      <FavoriteButton
        itemId={id}
        title={title}
        artist_title={artist_title}
        image_url={image_url}
        isFavorite={isFavorite(id)}
      />
    </GalleryItemContainer>
  )
}

export default SpecialGalleryItem
