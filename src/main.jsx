import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login/login.jsx';
import Background from './background/background.jsx';
import Backgroundp1 from './backgroundp1/backgroundp1.jsx';
import Inscription from './Inscription/inscription.jsx';
import Taller from './Taller/taller.jsx';
import Clasificacion from './Clasificacion/clasificacion.jsx';
import Legalizacion_contrato from './Legalizacion/legalizacion_contrato.jsx';
import Legalizacion_proyecto from './Legalizacion/legalizacion_proyecto.jsx';
import Legalizacion_emprendimiento from './Legalizacion/legalizacion_emprendimiento.jsx';
import Legalizacion_investigacion from './Legalizacion/legalizacion_investigacion.jsx';
import Legalizacion_monitoria from './Legalizacion/legalizacion_monitoria.jsx';
import Legalizacion_vinculo from './Legalizacion/legalizacion_vinculo.jsx';
import Legalizacion_intermediacion from './Legalizacion/legalizacion_intermediacion.jsx';
import Stepper from './pages/stepper/stepper.jsx';
import Publicaciones from './Publicaciones/publicaciones.jsx';
import Publicaciones_cp from './Publecaciones_cp/publicaciones_cp.jsx';
// import Chat_box from './chat_box/chat_box.jsx';

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
    <Clasificacion/>
    <Legalizacion_contrato/>
    <Legalizacion_proyecto/>
    <Legalizacion_emprendimiento/>
    <Legalizacion_investigacion/>
    <Legalizacion_monitoria/>
    <Legalizacion_vinculo/>
    <Legalizacion_intermediacion/>
    <Publicaciones_cp/>
    {/* <Chat_box/> */}
  </Router>
);
