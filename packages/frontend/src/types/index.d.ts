import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    backgroundColor: Colors
    typography: {
      color: Colors
    }
  }
}
