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
    buttons: {
      primary: {
        color: string
        backgroundColor: string
      }
    }
    notifications: {
      typography: {
        color: {
          title
          subtitle
          date
        }
      }
      hover: string
    }
    breakpoints: Breakpoints
  }
}
