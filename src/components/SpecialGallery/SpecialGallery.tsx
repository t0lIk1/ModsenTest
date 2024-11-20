import { useState } from 'react'
import art from '../../assets/img/image 1.png'
import SpecialGalleryItem from '../SpecialGalleryItem/SpecialGalleryItem.tsx'
import { Container } from '../../style/Container.styles.ts' // Assuming this is already styled
import Pagination from '../Pagination/Pagination.tsx' // Import the Pagination component
import {
  GallerySection,
  GalleryWrapper,
  TitleWrapper,
  GalleryGrid,
  PaginationWrapper
} from './SpecialGallery.styles.ts'

const data = [
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' },
  { img: art, title: 'Charles V bust length...', name: 'Giovanni Britto', status: 'Public' }
  // Add more data if needed
]

const itemsPerPage = 3 // Number of items per page

const SpecialGallery = () => {
  const [currentPage, setCurrentPage] = useState(1)

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage)

  // Get the items to display on the current page
  const currentItems = data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
  }

  return (
    <GallerySection>
      <Container>
        <GalleryWrapper>
          <TitleWrapper>
            <h3>Topics for you</h3>
            <span>Our Special Gallery</span>
          </TitleWrapper>
          <GalleryGrid>
            {currentItems.map((item, index) => (
              // eslint-disable-next-line
              <a>
                <SpecialGalleryItem
                  key={index}
                  img={item.img}
                  title={item.title}
                  name={item.name}
                  status={item.status}
                />
              </a>
            ))}
          </GalleryGrid>
        </GalleryWrapper>
        <PaginationWrapper>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </PaginationWrapper>
      </Container>
    </GallerySection>
  )
}

export default SpecialGallery
