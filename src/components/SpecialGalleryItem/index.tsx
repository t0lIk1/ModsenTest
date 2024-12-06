import { Link } from 'react-router-dom'

import FavoriteButton from '@/components/FavoriteButton/index.tsx'
import { IGalleryProps } from '@/types/type.ts'

import { GalleryDetails, GalleryImg, GalleryItemContainer, TextDetails } from './styled.ts'

const SpecialGalleryItem: React.FC<IGalleryProps> = ({
  image_url,
  title,
  artist_title,
  date_display,
  id,
  to
}) => {
  return (
    <GalleryItemContainer>
      <Link to={to}>
        <GalleryDetails>
          <GalleryImg src={image_url} alt={title} />
          <TextDetails>
            <h3>{title}</h3>
            <span>{artist_title}</span>
            <span>{date_display}</span>
          </TextDetails>
        </GalleryDetails>
      </Link>
      <FavoriteButton itemId={id} />
    </GalleryItemContainer>
  )
}

export default SpecialGalleryItem
