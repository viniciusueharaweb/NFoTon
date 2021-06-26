import Logo from '../../elements/Logo'
import { Container, BurgerButton } from './styles'
import BurgerIcon from '../../elements/BurgerIcon'
import { useState } from 'react'
import Media from '../Media'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const burgerVariant = isMenuOpen ? 'open' : 'closed'

  const handleToggleMenu = (state?: boolean) => {
    const toggleState = state ? state : !isMenuOpen
    setIsMenuOpen(toggleState)
  }

  return (
    <Container>
      <Logo name="crypter" />
      <Media breakpoint="xl">
        <BurgerButton type="button" onClick={() => handleToggleMenu()}>
          <BurgerIcon variant={burgerVariant} />
        </BurgerButton>
      </Media>
    </Container>
  )
}
