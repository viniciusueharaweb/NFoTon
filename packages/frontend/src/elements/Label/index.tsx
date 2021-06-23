import * as S from './styles'

export type LabelProps = {
  variant?: 'solid' | 'outlined'
  color?: 'default' | 'popular' | 'new' | 'featured' | 'soon'
  content: string | number
}

export default function Label({ variant = 'solid', color = 'default', content }: LabelProps) {
  return (
    <S.Wrapper variant={variant} color={color} aria-labelledby={variant}>
      <span id={variant}>{content}</span>
    </S.Wrapper>
  )
}
