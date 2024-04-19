import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login/login.jsx';
import Background from './background/background.jsx';
import Backgroundp1 from './backgroundp1/backgroundp1.jsx';
import Inscription from './Inscription/inscription.jsx';
import Taller from './Taller/taller.jsx';
import Stepper from './pages/stepper/stepper.jsx';
import Publicaciones from './Publicaciones/publicaciones.jsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

const SpecialButton = ({ text }) => {
  return (
    <button>
      {text}
    </button>
  );
}

root.render(
  <Router>
    <Background /> 
    <Routes>
      <Route path="/" element={<LoginForm />} />
      <Route path="/publicaciones" element={<Publicaciones />} />
    </Routes>
    <Backgroundp1 />
    <Stepper />
    <Inscription/>
    <Taller/>

  </Router>
);
