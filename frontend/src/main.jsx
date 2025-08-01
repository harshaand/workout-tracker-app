import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './css/index.scss'
import './css/buttons.scss'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <App />
)
