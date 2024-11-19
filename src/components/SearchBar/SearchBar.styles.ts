import styled from 'styled-components'

export const HomeHeader = styled.h1`
  max-width: 684px;
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;
  text-align: center;
  color: #393939;

  span {
    color: #f17900;
  }
`

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`

export const SearchBarInputWrapper = styled.div`
  position: relative; /* Обертка для управления позиционированием иконки */
  width: 100%;
`

export const SearchBarInput = styled.input`
  border-radius: 16px;
  padding: 16px 16px 16px 64px; /* Отступ слева для иконки */
  width: 100%;
  height: 64px;
  background: rgba(57, 57, 57, 0.05);
  font-family: 'Lexend Deca', sans-serif;
  font-weight: 400;
  font-size: 16px;
  border: none;
  outline: none;
  box-sizing: border-box;
`

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 24px; /* Расстояние от левого края */
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none; /* Чтобы иконка не мешала клику по инпуту */
`
