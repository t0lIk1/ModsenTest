import { useState, useCallback } from 'react'

interface HttpHook {
  isLoading: boolean
  hasError: string | null
  request: (url: string, method?: string, body?: BodyInit | null) => Promise<any>
  clearError: () => void
}

export const useHttp = (): HttpHook => {
  const [isLoading, setLoading] = useState<boolean>(true)
  const [hasError, setError] = useState<string | null>(null)

  const request = useCallback(
    async (url: string, method: string = 'GET', body: BodyInit | null = null) => {
      setLoading(true)
      try {
        const response = await fetch(url, { method, body })

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`)
        }

        const data = await response.json()
        setLoading(false)
        return data
      } catch (e) {
        setLoading(false)
        setError((e as Error).message)
        throw e
      }
    },
    []
  )

  const clearError = useCallback(() => setError(null), [])

  return { isLoading, hasError, request, clearError }
}
