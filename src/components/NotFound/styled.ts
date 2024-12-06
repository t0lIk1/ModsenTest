import styled from 'styled-components'

import theme from '@/style/theme.ts'

export const NotFoundBlock = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1,
  p {
    font-family: ${theme.fontFamily.basic}, sans-serif;
    color: ${theme.colors.secondary};
    font-size: 3vw;
  }
`
