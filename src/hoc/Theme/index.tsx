import React, { ReactNode, useState } from 'react'

import { themeContext } from '../../contexts/theme'
import { Theme } from './types'
import ThemeSwitch from '../../components/ThemeSwitch'

type PropsType = {
  children: ReactNode
}

const ThemeHOC = ({ children }: PropsType) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      return Theme.DARK
    } else {
      return Theme.LIGHT
    }
  })

  const handleClick = () => {
    setTheme((prev) => (prev === Theme.DARK ? Theme.LIGHT : Theme.DARK))
  }

  return (
    <themeContext.Provider value={{ setTheme, theme }}>
      <ThemeSwitch theme={theme} handleClick={handleClick} />
      {children}
    </themeContext.Provider>
  )
}

export default ThemeHOC
