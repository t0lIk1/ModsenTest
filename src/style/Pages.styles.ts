import styled from 'styled-components'

export const Block = styled.div`
  height: 100vh;
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;
`

export const SortWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;

  label {
    display: flex;
    align-items: center;
    gap: 5px;
  }
`
