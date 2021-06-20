import { DefaultTheme } from 'styled-components'
import { colors } from './colors'
import { breakpoints } from './breakpoints'

const {
  neutrals: { white, black, gray },
} = colors

export const light: DefaultTheme = {
  name: 'light',
  background: {
    primary: colors.neutrals.white['400'],
    secondary: gray['500'],
    hover: black['400'],
    border: white['600'],
  },
  typography: {
    color: black['400'],
    secondaryColor: white['500'],
  },
  breakpoints: { ...breakpoints },
}

export const dark: DefaultTheme = {
  name: 'dark',
  background: {
    primary: black['500'],
    secondary: gray['500'],
    hover: black['400'],
    border: white['600'],
  },
  typography: {
    color: white['400'],
    secondaryColor: white['500'],
  },
  breakpoints: { ...breakpoints },
}
const variations = { light, dark }

export type VariantionType = keyof typeof variations

export default variations
