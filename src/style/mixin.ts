import { css } from 'styled-components'

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const flexSpaceBetween = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const hoverEffect = css`
  &:hover {
    color: ${({ theme }) => theme.colors.hover};
    transition: color 0.3s ease-in-out;
  }
`

export const textBasic = css`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fontFamily.basic};
`

export const boxShadow = css`
  box-shadow: ${({ theme }) => theme.shadows.basic};
`
