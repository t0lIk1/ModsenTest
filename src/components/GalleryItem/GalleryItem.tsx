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
  // eslint-disable-next-line
  img: any
}

const GalleryItem = ({ img, title, name, status }: IGalleryProps) => {
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
          <img src={favorite} alt="" />
        </FavoriteButton>
      </GalleryDetails>
    </GalleryItemContainer>
  )
}

export default GalleryItem
