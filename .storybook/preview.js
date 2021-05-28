import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'
import GlobalStyled from 'styles/global'

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyled />
      <Story />
    </ThemeProvider>
  )
]
