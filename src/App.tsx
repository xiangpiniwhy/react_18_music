import React, { Suspense } from 'react'
import { useRoutes } from 'react-router-dom'

import routes from '@/router'
import App_header from '@/components/app_header/app_header'
import App_footer from '@/components/app_footer/app_footer'

function App() {
  return (
    <div className="App">
      <App_header />
      <Suspense fallback="loading ...">
        <div className="main">{useRoutes(routes)}</div>
      </Suspense>
      <App_footer />
    </div>
  )
}

export default App
