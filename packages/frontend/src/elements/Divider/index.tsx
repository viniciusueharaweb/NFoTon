import { Divider as DividerStyled } from './styles'

export type DividerProps = {
  height: 'light' | 'thin'
}

export default function Divider({ height = 'light' }: DividerProps) {
  return (
    <DividerStyled height={height} aria-hidden="true" />
  )
}
