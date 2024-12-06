import { useEffect, useState } from 'react'

const useResponsiveItems = () => {
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 830) {
        setItemsPerPage(1)
      } else if (window.innerWidth < 1100) {
        setItemsPerPage(2)
      } else {
        setItemsPerPage(3)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return itemsPerPage
}

export default useResponsiveItems
