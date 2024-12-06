import { useParams } from 'react-router-dom'

import NoImg from '@/assets/img/NoImg(big).png'
import ErrorBoundary from '@/components/ErrorBoundary'
import FavoriteButton from '@/components/FavoriteButton/index.tsx'
import Loader from '@/components/Loader/index.tsx'
import { useFetchArtworks } from '@/hooks/useFetchArtwork.ts'
import { Block, Container } from '@/style/common.styles.ts'

import { ArtBlock, ArtDetails, ArtImg, ArtInfo, ArtText, ArtTitle } from './styled'

const ArtItem: React.FC = () => {
  const { id: ParamsId } = useParams<{ id: string }>()
  const { artwork, isLoading } = useFetchArtworks(Number(ParamsId))

  if (isLoading) {
    return <Loader />
  }

  if (!artwork) {
    return <h1>Artwork not found</h1>
  }

  const {
    id,
    image_url,
    artist_title,
    title,
    date_display,
    artist_nationality,
    credit_line,
    dimensions,
    place_of_origin
  } = artwork

  return (
    <Block>
      <Container>
        <ArtBlock>
          <ErrorBoundary>
            <ArtImg>
              <img src={image_url || NoImg} alt="" />
              <FavoriteButton itemId={id} />
            </ArtImg>
            <ArtInfo>
              <ArtTitle>
                <h3>{title}</h3>
                <span>{artist_title || 'Unknown'}</span>
                <span>{date_display || 'Unknown'}</span>
              </ArtTitle>
              <ArtDetails>
                <h3>Overview</h3>
                <ArtText>
                  <span>
                    <strong>Artist nationality:</strong> {artist_nationality || 'Unknown'}
                  </span>
                  <span>
                    <strong>Dimensions:</strong> {dimensions || 'Unknown'}
                  </span>
                  <span>
                    <strong>Credit Line:</strong> {credit_line || 'Unknown'}
                  </span>
                  <span>
                    <strong>Place of origin:</strong> {place_of_origin || 'Unknown'}
                  </span>
                </ArtText>
              </ArtDetails>
            </ArtInfo>
          </ErrorBoundary>
        </ArtBlock>
      </Container>
    </Block>
  )
}

export default ArtItem
