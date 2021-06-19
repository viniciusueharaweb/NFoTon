import { ThemeProvider } from '../src/hooks/useTheme'
import { GlobalStyles } from '../src/styles/globalStyles'
import variations from '../src/theme/index'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={variations.dark}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
  ),
]
