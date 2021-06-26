import 'styled-components'
import { Breakpoints } from '../theme/breakpoints'
import { Colors } from '../theme/colors'

export type VariantionType = 'light' | 'dark'

declare module 'styled-components' {
  export interface DefaultTheme {
    variant: VariantionType
    colors: Colors
    breakpoints: Breakpoints
  }
}
