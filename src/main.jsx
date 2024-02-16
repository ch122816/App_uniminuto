import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginForm from './login/login.jsx'
import { Background } from './background/background.jsx'
import { Inscription } from './Inscription/inscription.jsx'
import { Stepper } from './pages/stepper/stepper.jsx'

// import Publaciones from './Publicaciones/publicaciones.jsx'
// import './index.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'))

const SpecialButton = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  )
}

root.render(
  <Router>
    <Routes>
      {/* {/* <Background /> */}
      <Route path="/" Component={LoginForm}></Route>
      {/* <Publicaciones/>*/}
      {/* <Inscription /> */}

      <Route path="/stepper" Component={Stepper}></Route>
    </Routes>
  </Router>
)
// <React.StrictMode>
//   <App />
// </React.StrictMode>,

