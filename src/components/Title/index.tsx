import styled from 'styled-components'
import { TitleProps } from '@/types/type.ts'

const TitleContainer = styled.div`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 64px;
  text-transform: capitalize;

  .main-text {
    color: #333;
  }

  .sub-text {
    color: #f17900;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 0;
    gap: 8px;
  }
`

const Title: React.FC<TitleProps> = ({ mainText, subText, icon }) => {
  return (
    <TitleContainer>
      <div className="main-text">{mainText}</div>
      <div className="sub-text">
        {icon ? <img src={icon} alt="" /> : null}
        {subText}
      </div>
    </TitleContainer>
  )
}

export default Title
