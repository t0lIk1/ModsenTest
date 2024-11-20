import styled from 'styled-components'

export const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 72px;
`

export const SearchBarInputWrapper = styled.div`
  position: relative;
  width: 100%;
`

export const SearchBarInput = styled.input`
  padding: 16px 16px 16px 64px;
  border-radius: 16px;
  width: 100%;
  height: 64px;
  background: rgba(57, 57, 57, 0.05);
  font-weight: 400;
  font-size: 14px;
  text-transform: capitalize;

  &::placeholder {
    color: rgba(57, 57, 57, 0.5);
  }
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
