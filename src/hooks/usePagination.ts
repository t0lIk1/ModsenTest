import { useState } from 'react'

export const usePagination = (totalItems: number, itemsPerPage: number) => {
  const [currentPage, setCurrentPage] = useState(1)
  const [startPage, setStartPage] = useState(1)
  const maxPagesToShow = 4

  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const currentItems = (items: any[]) => {
    return items.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
  }

  const handlePageChange = (page: number) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    if (page > startPage + maxPagesToShow - 1) {
      setStartPage(startPage + 1)
    }
  }

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      if (currentPage + 1 > startPage + maxPagesToShow - 1) {
        setStartPage(startPage + 1)
      }
    }
  }

  const pageNumbers = () => {
    const pages = []
    for (let i = startPage; i < startPage + maxPagesToShow && i <= totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  return { currentPage, totalPages, currentItems, handlePageChange, handleNextClick, pageNumbers }
}
