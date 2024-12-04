import React, { useState } from 'react'
import SearchBar from '@/components/SearchBar/index.tsx'
import SpecialGallery from '@/components/SpecialGallery/index.tsx'
import Gallery from '@/components/Gallery/index.tsx'
import { Block } from '@/style/Pages.styles.ts'
import Loader from '@/components/Loader/index.tsx'
import { useFetchArtworks } from '@/hooks/useFetchArtwork.ts'

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
          />
        </>
      )}
    </Block>
  )
}

export default HomePage
