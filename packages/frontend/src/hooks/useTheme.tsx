import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider as StyledProvider } from 'styled-components'
import theme from '../theme'
import { VariantionType } from '../types'
import { getFromLS, setToLS } from '../utils/storage'

type ThemeProps = {
  children: ReactNode
}

type ThemeContextData = {
  theme: DefaultTheme
  selectedThemeVariant: VariantionType
  themeLoading: boolean
  changeSelectedTheme(theme: VariantionType): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [selectedThemeVariant, setSelectedThemeVariant] = useState<VariantionType>('light')
  const [themeLoading, setThemeLoading] = useState(true)

  useEffect(() => {
    const themeName: VariantionType = getFromLS({ key: '@nfoton/selected-theme' })
    setSelectedThemeVariant(themeName || 'light')
    setThemeLoading(false)
  }, [])

  const changeSelectedTheme = (themeName: VariantionType) => {
    setSelectedThemeVariant(themeName)
    setToLS({ key: '@nfoton/selected-theme', themeName })
  }

  return (
    <ThemeContext.Provider
      value={{ theme, selectedThemeVariant, themeLoading, changeSelectedTheme }}
    >
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
