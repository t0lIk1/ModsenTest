interface GalleryProps {
  title?: string
  subtitle?: string
  artworks: Artwork[]
  sortButton?: boolean
}
interface Artwork {
  id: number
  title: string
  artist_title: string
  image_url?: string
  date_display?: string
}
declare const Gallery: React.FC<GalleryProps>
export default Gallery
