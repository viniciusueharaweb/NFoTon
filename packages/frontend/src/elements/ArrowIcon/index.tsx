import { Container } from './styles'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { useTheme } from '../../hooks/useTheme'
import { IconBaseProps } from 'react-icons'

export interface ArrowIconProps extends IconBaseProps {
  variant?: 'right' | 'up' | 'down' | 'left'
  disabled?: boolean
}

export default function ArrowIcon({
  variant,
  disabled = false,
  size = 22,
  ...rest
}: ArrowIconProps) {
  const {
    theme: {
      colors: {
        neutrals: { gray },
      },
    },
  } = useTheme()
  const baseStyle = { ...rest, size, color: gray['500'] }
  return (
    <Container variant={variant} disabled={disabled}>
      <HiArrowNarrowRight {...baseStyle} />
    </Container>
  )
}