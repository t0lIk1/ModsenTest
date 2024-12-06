import { useEffect, useState } from 'react'

const useDebounce = <T>(callback: T, delay = 1000) => {
  const [debouncedCallback, setDebouncedCallback] = useState(callback)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedCallback(callback)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [callback, delay])

  return debouncedCallback
}

export default useDebounce
