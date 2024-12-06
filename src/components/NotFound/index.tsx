import { NotFoundBlock } from '@/components/NotFound/styled.ts'
import theme from '@/style/theme.ts'

const NotFound: React.FC = () => {
  return (
    <NotFoundBlock theme={theme}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>
    </NotFoundBlock>
  )
}

export default NotFound
