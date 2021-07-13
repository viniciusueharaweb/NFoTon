import { Container, InputWrapper, SubmitButton, ErrorLabel } from './styles'
import { HiX } from 'react-icons/hi'
import { HiArrowNarrowRight, HiCheck } from 'react-icons/hi'
import { RiLoader2Line } from 'react-icons/ri'
import { useTheme } from '../../hooks/useTheme'

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant: 'default' | 'error' | 'sending' | 'sent'
  errorLabel?: string
  handleEraseValue?: React.MouseEventHandler<SVGElement> // used for make the (error) input empty
}

const Input: React.FC<InputProps> = ({
  variant,
  errorLabel,
  handleEraseValue,
  ...props
}: InputProps) => {
  const {
    theme: {
      colors: {
        neutrals: { gray, white },
      },
    },
  } = useTheme()
  const icons = {
    default: <HiArrowNarrowRight color={white['400']} size={18} />,
    error: <HiArrowNarrowRight color={gray['500']} size={18} />,
    sending: <RiLoader2Line color={white['400']} size={24} />,
    sent: <HiCheck color={white['400']} size={20} />,
  }

  return (
    <Container>
      <InputWrapper variant={variant}>
        <input {...props} />
        {variant === 'error' && <HiX size={18} onClick={handleEraseValue} />}
        <SubmitButton variant={variant} disabled={variant === 'error' && true} type="submit">
          {icons[variant!]}
        </SubmitButton>
      </InputWrapper>
      {variant === 'error' && <ErrorLabel>{errorLabel}</ErrorLabel>}
    </Container>
  )
}

export default Input
