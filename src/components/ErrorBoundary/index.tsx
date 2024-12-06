import { Component, ErrorInfo } from 'react'

import ErrorBlock from '@/components/ErrorBlock'
import { Props, State } from '@/types/type.ts'

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return <ErrorBlock />
    }

    return this.props.children
  }
}

export default ErrorBoundary
