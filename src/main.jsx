import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginForm from './login/login.jsx'
import { Background } from './background/background.jsx'
import { Inscription } from './Inscription/inscription.jsx'
// import Publaciones from './Publicaciones/publicaciones.jsx'
// import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))

const SpecialButton = ({text})  => {
return(
  <button>
    {text}
  </button> 
)
}

root.render(
  <>
  <Background/>
  <LoginForm />
  {/* <Publicaciones/>*/}
  <Inscription/> 
  </>
  )
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,

