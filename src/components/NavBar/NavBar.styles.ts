// NavBar.styles.ts
import styled from 'styled-components'

export const NavBarWrapper = styled.nav`
  background: linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%);
  color: #fff;
  font-family: 'Inter', sans-serif;
`

export const NavBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }
`

export const Menu = styled.div`
  display: flex;
  gap: 1.3rem;

  a {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: #fff;
    font-size: 1rem;

    &:hover {
      color: #ffa500; /* Оранжевый цвет при наведении */
      transition: color 0.3s ease-in-out;
    }
  }
`
