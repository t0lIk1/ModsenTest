import styled from 'styled-components'

export const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 4rem;
  text-transform: capitalize;
  color: #333;

  span:nth-child(2) {
    color: #f17900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0;
    gap: 8px;
  }
  @media (max-width: 700px) {
    font-size: 3rem;
  }
`
