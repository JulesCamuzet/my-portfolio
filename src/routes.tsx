import React, { ReactNode } from 'react'

import HomePage from './pages/Home'
import ThemeHOC from './hoc/Theme'

export const routes: {
  url: string
  name: string
  element: ReactNode
}[] = [
  {
    url: '/',
    element: (
      <ThemeHOC>
        <HomePage />
      </ThemeHOC>
    ),
    name: 'home',
  },
]
