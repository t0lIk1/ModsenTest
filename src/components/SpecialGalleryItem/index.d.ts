interface IGalleryProps {
  title: string
  artist_title: string
  date_display: string
  image_url: string
  id: number
  to: string
}
declare const SpecialGalleryItem: React.FC<IGalleryProps>
export default SpecialGalleryItem
