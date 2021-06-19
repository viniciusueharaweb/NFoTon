import { Container, LogoName } from './styles'

import Image from 'next/image'
interface LogoProps {
  imgPath?: string
  imgAlt?: string
  name?: string
  isVertical?: boolean
}

export default function Logo({
  imgPath = '/logo.png',
  imgAlt = 'Logo alt',
  name = 'Logo name',
  isVertical = false,
}: LogoProps) {
  return (
    <Container isVertical={isVertical}>
      <Image width={32} height={32} src={imgPath} alt={imgAlt} />
      {name && <LogoName>{name}</LogoName>}
    </Container>
  )
}
