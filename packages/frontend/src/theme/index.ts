import { DefaultTheme } from 'styled-components'
import { colors } from './colors'

const {
  neutrals: { white, black },
} = colors

export const light: DefaultTheme = {
  name: 'light',
  backgroundColor: colors.neutrals.white['400'],
  typography: {
    color: black['400'],
  },
}

export const dark: DefaultTheme = {
  name: 'dark',
  backgroundColor: black['500'],
  typography: {
    color: white['400'],
  },
}
const variations = { light, dark }

export type VariantionType = keyof typeof variations

export default variations
