import React, { useState } from 'react';
import './Classification.css';

import DocumentLink from '../../Components/DocumentLink/DocumentLink';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';


export function Classification() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');


  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedOption(event.target.value); 
  };


  const handleEnviarClasificacion = () => {
    sessionStorage.setItem('clasificacion', selectedOption);
    console.log('Clasificación:', selectedOption);
  };

  return (
    <div>
      <h1 className="h1_clas">Clasificación</h1>

      <div className="contenedor_clas">
        <div className="columna_clas columna1_clas">
          <h2 className="h2_clasificacion">Clasificación de la práctica</h2>
          <input
            type="text"
            list="opciones"
            placeholder="SELECCIONAR"
            value={inputValue}
            onChange={handleInputChange}
          />
          <datalist id="opciones">
          <option value="Contrato Aprendizaje"></option>
          <option value="Proyecto Especial"></option>
          <option value="Investigación"></option>
          <option value="Emprendimiento"></option>
          <option value="Mentoría Docente"></option>
          <option value="Vinculación Laboral"></option>
          <option value="Vínculo Laboral Intermediación"></option>
          </datalist>
          <div className='cont_boton'>
            <button className='button_enviar_clasificacion' type="button" onClick={handleEnviarClasificacion}>Enviar</button>
          </div>
        </div>
        <div className="columna_clas columna2_cals">
          <h2 className="h2_clas">Video tutorial</h2>
          <VideoPlayer src="ruta/al/video.mp4" />
          <h2 className="h2_t">Documentos y manuales</h2>
          <DocumentLink href="ruta/al/archivo.pdf" text="Instructivo auto matriculacion.pdf" />
          <DocumentLink href="ruta/al/archivo.pdf" text="Lineamientos_PP_acuerdo009.pdf" />
        </div>
      </div>
    </div>
  );
}

export default Classification;
