import React, { useEffect, useState } from 'react'
import SearchBar from '../components/SearchBar/SearchBar.tsx'
import SpecialGallery from '../components/SpecialGallery/SpecialGallery.tsx'
import Gallery from '../components/Gallery/Gallery.tsx'
import { Block } from '../style/Pages.styles.js'
import { useArtworksService } from '../services/ArtService.ts'
import Loader from '../components/Loader/Loader.tsx'

interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
  date_display?: string
}

const useFetchArtworks = () => {
  const { isLoading, hasError, getArtworks } = useArtworksService()
  const [artworks, setArtworks] = useState<Artwork[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getArtworks()

        setArtworks(data)
      } catch (e) {
        console.error(e)
      }
    }
    fetchData()
  }, [getArtworks])

  return { isLoading, hasError, artworks }
}

const HomePage: React.FC = () => {
  const { isLoading, hasError, artworks } = useFetchArtworks()
  const [isSearching, setIsSearching] = useState<boolean>(false)

  if (isLoading) return <Loader />
  if (hasError) return <div>Error loading artworks</div>

  return (
    <Block>
      <SearchBar setIsSearching={setIsSearching} />
      {!isSearching && (
        <>
          <SpecialGallery />
          <Gallery
            sortButton={true}
            title="Our special gallery"
            subtitle="Topics for you"
            artworks={artworks}
          />{' '}
        </>
      )}
    </Block>
  )
}

export default HomePage
