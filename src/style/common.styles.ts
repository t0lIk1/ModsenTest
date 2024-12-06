import { styled } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  box-sizing: border-box;
  @media (max-width: 1300px) {
    padding: 0 10px;
  }
`
export const Block = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
`
