import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar.tsx'
import SpecialGallery from '../components/SpecialGallery/SpecialGallery.tsx'
import Gallery from '../components/Gallery/Gallery.tsx'
import { Block } from '../style/Pages.styles.ts'
import { useArtworksService } from '../services/ArtService.ts'

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
}

const HomePage: React.FC = () => {
  const { isLoading, hasError, getArtworks } = useArtworksService()
  const [artworks, setArtworks] = useState<Artwork[]>([])
  const [loading, setLoading] = useState<boolean>(isLoading)
  const [error, setError] = useState<string | null>(hasError)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtworks()
        setArtworks(data)
        // eslint-disable-next-line
      } catch (error) {
        setError('Failed to fetch artworks')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <Block>
        <SearchBar />
        <SpecialGallery />
        <Gallery title="Our special gallery" subtitle="Topics for you" artworks={artworks} />
      </Block>
    </>
  )
}

export default HomePage
