import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { DefaultTheme, ThemeProvider as StyledProvider } from 'styled-components'
import variations, { VariantionType } from '../theme'
import { getFromLS, setToLS } from '../utils/storage'

type ThemeProps = {
  children: ReactNode
}

type ThemeContextData = {
  theme: DefaultTheme
  themeLoading: boolean
  changeSelectedTheme(theme: VariantionType): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [theme, setTheme] = useState<DefaultTheme>(variations.light)
  const [themeLoading, setThemeLoading] = useState(true)

  useEffect(() => {
    const themeName: VariantionType = getFromLS({ key: '@nfoton/selected-theme' })
    setTheme(variations[themeName] || variations.light)
    setThemeLoading(false)
  }, [])

  const changeSelectedTheme = (themeName: VariantionType) => {
    setTheme(variations[themeName])
    setToLS({ key: '@nfoton/selected-theme', themeName })
  }

  return (
    <ThemeContext.Provider value={{ theme, changeSelectedTheme, themeLoading }}>
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
