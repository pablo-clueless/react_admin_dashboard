import React from 'react'
import ReactDOM from 'react-dom'

import { ContextProvider } from './contexts/ContextProvider'
import App from './App'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
