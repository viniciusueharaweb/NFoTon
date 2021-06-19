import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    backgroundColor: string
    typography: {
      color: string
    }
  }
}
