import { useParams } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { ArtBlock, ArtDetails, ArtImg, ArtInfo, ArtText, ArtTitle } from './styled'
import { Container } from '@/style/Container.styles.ts'
import { Block } from '@/style/Pages.styles.ts'
import NoImg from '@/assets/img/NoImg(big).png'
import { useArtworksService } from '@/services/ArtService.ts'
import FavoriteButton from '@/components/FavoriteButton/index.tsx'
import { FavoritesContext } from '@/components/FavoriteButton/FavoritesContext.tsx'
import Loader from '@/components/Loader/index.tsx'
import { ArtworkDetails } from '@/types/type.ts'

const useFetchArtwork = () => {
  const { getArtwork, hasError, isLoading } = useArtworksService()
  const { id: ParamsId } = useParams<{ id: string }>()
  const [artwork, setArtwork] = useState<ArtworkDetails | null>(null)
  const { isFavorite } = useContext(FavoritesContext)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtwork(Number(ParamsId))
        setArtwork(data)
      } catch (error) {
        console.error(error)
        throw new Error('Error fetching artwork')
      }
    }

    fetchData()
  }, [ParamsId, getArtwork])

  return { hasError, isLoading, artwork, isFavorite }
}

const ArtItem: React.FC = () => {
  const { hasError, isLoading, artwork, isFavorite } = useFetchArtwork()

  if (isLoading) {
    return <Loader />
  }
  if (hasError) {
    return <h1>{hasError}</h1>
  }
  if (!artwork) {
    return <h1>Artwork not found</h1>
  }

  return <View artwork={artwork} isFavorite={isFavorite} />
}

interface ViewProps {
  artwork: ArtworkDetails
  isFavorite: (id: number) => boolean
}

const View: React.FC<ViewProps> = ({ artwork, isFavorite }) => {
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
          <ArtImg>
            <img src={image_url || NoImg} alt="" />
            <FavoriteButton
              itemId={id}
              title={title}
              artist_title={artist_title}
              image_url={image_url || NoImg}
              isFavorite={isFavorite(id)}
            />
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
        </ArtBlock>
      </Container>
    </Block>
  )
}

export default ArtItem
