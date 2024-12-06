interface IGalleryProps {
  title: string
  name: string
  dateDisplay: string
  img: string
  itemId: number
  to: string
}
declare const GalleryItem: React.FC<IGalleryProps>
export default GalleryItem
