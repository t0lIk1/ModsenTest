import styled from 'styled-components'

import { flexCenter } from '@/style/mixin.ts'
import theme from '@/style/theme.ts'

export const NotFoundBlock = styled.div`
  width: 100vw;
  height: 100vh;
  ${flexCenter};
  flex-direction: column;

  h1,
  p {
    font-family: ${theme.fontFamily.basic}, sans-serif;
    color: ${theme.colors.secondary};
    font-size: 3vw;
  }
`
