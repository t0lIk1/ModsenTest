import styled from 'styled-components'

export const Load = styled.span`
  width: 3rem;
  height: 3rem;
  border: 5px solid #bebebe;
  border-bottom-color: #ff3d00;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const LoaderWrapper = styled.div`
  width: 100%;
  height: 20em;
  display: flex;
  align-items: center;
  justify-content: center;
`
