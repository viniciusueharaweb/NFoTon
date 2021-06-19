import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    background: {
      primary: string
      secondary: string
      hover: string
    }
    typography: {
      color: string
      secondaryColor: string
    }
  }
}
