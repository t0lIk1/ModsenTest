import { DefaultTheme } from 'styled-components'

const theme: DefaultTheme = {
  colors: {
    base: '#fff',
    primary: '#e0a449',
    secondary: '#393939',
    accent: '#f17900',
    background: '#fafafa',
    text: '#343333',
    hover: '#ffa500'
  },
  fontFamily: {
    basic: '"Inter", sans-serif',
    second: '"Lexend Deca", sans-serif'
  },
  spacing: {
    small: '32px',
    medium: '40px',
    large: '120px'
  },
  weight: {
    regular: 400,
    bold: 700
  },
  shadows: {
    basic: '0 4px 6px rgba(0, 0, 0, 0.1)'
  }
}

export default theme
