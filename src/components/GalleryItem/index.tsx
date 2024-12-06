import { Link } from 'react-router-dom'

import FavoriteButton from '@/components/FavoriteButton/index.tsx'
import { IGalleryProps } from '@/types/type.ts'

import {
  GalleryDetails,
  GalleryImg,
  GalleryInfo,
  GalleryItemContainer,
  TextDetails
} from './styled.ts'

const GalleryItem: React.FC<IGalleryProps> = ({
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
          <GalleryInfo>
            <GalleryImg src={image_url} />
            <TextDetails>
              <h3>{title || 'Untitled'}</h3>
              <span>{artist_title || 'Unknown Artist'}</span>
              <span>{date_display || ''}</span>
            </TextDetails>
          </GalleryInfo>
        </GalleryDetails>
      </Link>
      <FavoriteButton itemId={id} />
    </GalleryItemContainer>
  )
}

export default GalleryItem
