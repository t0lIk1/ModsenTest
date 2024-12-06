interface HttpHook {
  isLoading: boolean
  hasError: string | null
  request: (url: string, method?: string, body?: BodyInit | null) => Promise<any>
  clearError: () => void
}
export declare const useHttp: () => HttpHook
export {}
