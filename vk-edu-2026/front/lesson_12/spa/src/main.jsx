import './index.css'

// import AppHashURL from './AppHashURL.jsx'
// import AppOrdinaryURL from './AppOrdinaryURL.jsx'
import AppReactRouter from './AppReactRouter.jsx'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppReactRouter />
  </StrictMode>,
)
