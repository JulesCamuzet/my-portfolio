import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'

import { routes } from './routes'
import './index.css'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => {
          return (
            <Route key={route.name} path={route.url} element={route.element} />
          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default App
