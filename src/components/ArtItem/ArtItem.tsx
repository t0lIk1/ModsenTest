import { ArtText, ArtImg, ArtTitle, ArtDetails, ArtBlock, ArtInfo } from './ArtItem.styles'
import { Container } from '../../style/Container.styles'
import { Block } from '../../style/Pages.styles'
import NoImg from '../../assets/img/NoImg(big).png'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useArtworksService } from '../../services/ArtService.ts'
import FavoriteButton from '../FavoriteButton/FavoriteButton.tsx'

interface Artwork {
  id: number
  title?: string
  artist_title?: string
  image_url?: string
  date_display?: string
  dimensions?: string
  credit_line?: string
  repository?: string
  place_of_origin?: string
  artist_nationality?: string
}

const ArtItem: React.FC = () => {
  const { getArtwork, hasError, isLoading } = useArtworksService()
  const { id } = useParams<{ id: string }>()
  const [artwork, setArtwork] = useState<Artwork | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtwork(Number(id))
        setArtwork(data)
      } catch (error) {
        console.error(error)
        throw new Error('Error fetching artwork')
      }
    }

    fetchData()
  }, [id, getArtwork])

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (hasError) {
    return <h1>{hasError}</h1>
  }
  if (!artwork) {
    return <h1>Artwork not found</h1>
  }

  return (
    <Block>
      <Container>
        <ArtBlock>
          <ArtImg>
            <img src={artwork.image_url || NoImg} alt="" />
            <FavoriteButton />
          </ArtImg>
          <ArtInfo>
            <ArtTitle>
              <h3>{artwork.title}</h3>
              <span>{artwork.artist_title || 'Unknown'}</span>
              <span>{artwork.date_display || 'Unknown'}</span>
            </ArtTitle>
            <ArtDetails>
              <h3>Overview</h3>
              <ArtText>
                <span>
                  <strong>Artist nationality:</strong> {artwork.artist_nationality || 'Unknown'}
                </span>
                <span>
                  <strong>Dimensions:</strong> {artwork.dimensions || 'Unknown'}
                </span>
                <span>
                  <strong>Credit Line:</strong> {artwork.credit_line || 'Unknown'}
                </span>
                <span>
                  <strong>Place of origin:</strong> {artwork.place_of_origin || 'Unknown'}
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
