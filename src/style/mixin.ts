// src/styles/mixins.ts
import { css } from 'styled-components'

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const boxShadow = css`
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`

export const textStyle = css`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.text};
`
