import styled from 'styled-components'

export const Block = styled.div`
  font-family: 'Lexend Deca', sans-serif;
  display: flex;
  flex-direction: column;
  padding: 40px 0;
  gap: 40px;
  background-color: #f9f9f9;
  min-height: 100vh;

  > :not(:last-child) {
    flex: 1;
  }
`
