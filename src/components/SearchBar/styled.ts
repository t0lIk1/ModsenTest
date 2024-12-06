import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`

export const SearchBarInputWrapper = styled.form`
  position: relative;
  width: 100%;
`

export const SearchBarInput = styled.input<{ hasError?: boolean }>`
  padding: 16px 16px 16px 64px;
  border-radius: 16px;
  width: 100%;
  height: 64px;
  background: rgba(57, 57, 57, 0.05);
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;
  border: 2px solid ${({ hasError }) => (hasError ? 'red' : 'transparent')};
  outline: none;

  &::placeholder {
    color: rgba(57, 57, 57, 0.5);
  }

  transition: 0.3s ease-in-out border-color;
`

export const SearchIcon = styled.img`
  position: absolute;
  top: 50%;
  left: 24px;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  pointer-events: none;
`
export const SearchBarInputContainer = styled.div`
  position: relative;
`
