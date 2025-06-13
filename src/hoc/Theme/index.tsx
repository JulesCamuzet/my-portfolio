import React, { ReactNode, useState } from 'react'

import { themeContext } from '../../contexts/theme'
import { Theme } from './types'

type PropsType = {
  children: ReactNode
}

const ThemeHOC = ({ children }: PropsType) => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT)

  return (
    <themeContext.Provider value={{ setTheme, theme }}>
      {children}
    </themeContext.Provider>
  )
}

export default ThemeHOC
