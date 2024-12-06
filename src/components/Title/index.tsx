import { TitleContainer } from '@/components/Title/styled.ts'
import { TitleProps } from '@/types/type.ts'

const Title: React.FC<TitleProps> = ({ mainText, subText, icon }) => {
  return (
    <TitleContainer>
      <span>{mainText}</span>
      <span>
        {icon ? <img src={icon} alt="" /> : null}
        {subText}
      </span>
    </TitleContainer>
  )
}

export default Title
