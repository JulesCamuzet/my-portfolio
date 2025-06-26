import React, { ReactNode, useState } from 'react'

import { themeContext } from '../../contexts/theme'
import ThemeSwitch from '../../components/ThemeSwitch'
import { Theme } from './types'

type PropsType = {
  children: ReactNode
}

const ThemeHOC = ({ children }: PropsType) => {
  const [theme, setTheme] = useState<Theme>(Theme.DARK)

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
