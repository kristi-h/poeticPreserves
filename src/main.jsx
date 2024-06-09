import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import UserContext from './context/userContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <Router>
        <App />
      </Router>
    </UserContext>
  </React.StrictMode>,
)
