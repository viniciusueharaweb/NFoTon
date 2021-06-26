import { useTheme } from '../../hooks/useTheme'
import { Container } from './styles'
import { HiPlay } from 'react-icons/hi'


export default function CircleButton({ ...rest }) {
  const { theme } = useTheme()
  const baseStyle = { ...rest, size:80, color: theme.colors.neutrals.gray[500] }   
  return (
    <Container>
      <HiPlay {...baseStyle} />
    </Container>
  )
}
