import { createContext } from 'react'

import { Theme } from '../hoc/Theme/types'

export const themeContext = createContext<{
  theme: Theme
  setTheme: ((theme: Theme) => void) | null
}>({ setTheme: null, theme: Theme.LIGHT })
