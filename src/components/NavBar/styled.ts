import styled from 'styled-components'

import { hoverEffect } from '@/style/mixin.ts'

export const NavBarWrapper = styled.nav`
  background: linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%);
  color: ${({ theme }) => theme.colors.base};
  font-family: ${({ theme }) => theme.fontFamily.basic};
`

export const NavBarBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 0;
`

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: ${({ theme }) => theme.weight.bold};

  a {
    color: ${({ theme }) => theme.colors.base};
    text-decoration: none;
  }
`

export const BurgerMenu = styled.div`
  cursor: pointer;
  display: none;
  z-index: 7;
  @media (max-width: 768px) {
    display: block;
  }

  .burger-icon {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 28px;
    width: 38px;
    position: relative;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background-color: #fff;
      border-radius: 2px;
      transition: all 0.3s ease;
    }

    &.open {
      span:nth-child(1) {
        transform: rotate(45deg) translate(12px, 10px);
      }

      span:nth-child(2) {
        opacity: 0;
      }

      span:nth-child(3) {
        transform: rotate(-45deg) translate(8px, -6px);
      }
    }
  }
`
export const Menu = styled.div`
  display: flex;
  gap: 1.3rem;
  @media (max-width: 768px) {
    display: none;
  }
`
export const MenuMobile = styled.div`
  position: static;
  display: none;
  gap: 1.3rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    z-index: 5;
    background: linear-gradient(90deg, #343333 16.73%, #484848 58.63%, #282828 98.63%);
    padding: 4rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
    transform: translateX(100%);

    &.open {
      transform: translateX(0);
    }
  }
`

export const MenuItem = styled.div`
  a {
    display: flex;
    align-items: center;
    gap: 4px;
    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;

    ${hoverEffect};
  }
`
