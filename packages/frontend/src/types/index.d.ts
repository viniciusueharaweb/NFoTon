import 'styled-components'
import { Breakpoints } from '../theme/breakpoints'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    background: {
      primary: string
      secondary: string
      hover: string
      border: string
    }
    typography: {
      color: string
      secondaryColor: string
    }
    breakpoints: Breakpoints
  }
}
