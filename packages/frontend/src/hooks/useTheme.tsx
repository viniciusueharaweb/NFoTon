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
  themeLoading: boolean
  changeSelectedTheme(theme: VariantionType): void
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData)

export const ThemeProvider = ({ children }: ThemeProps) => {
  const [contextTheme, setContextTheme] = useState<DefaultTheme>(theme)
  const [themeLoading, setThemeLoading] = useState(true)

  useEffect(() => {
    const themeName: VariantionType = getFromLS({ key: '@nfoton/selected-theme' })
    setContextTheme({ ...theme, variant: themeName })
    setThemeLoading(false)
  }, [])

  const changeSelectedTheme = (themeName: VariantionType) => {
    setContextTheme({ ...theme, variant: themeName })
    setToLS({ key: '@nfoton/selected-theme', themeName })
  }

  return (
    <ThemeContext.Provider
      value={{
        theme: contextTheme,
        themeLoading,
        changeSelectedTheme,
      }}
    >
      <StyledProvider theme={theme}>{children}</StyledProvider>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
