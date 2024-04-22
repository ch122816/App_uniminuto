import React, { useState } from 'react';
import './clasificacion.css';

export function Clasificacion() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Maneja el cambio de opción seleccionada en el select
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Maneja el cambio de valor en el campo de texto
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedOption(event.target.value); // Actualiza la opción seleccionada al valor del campo de texto
  };

  // Maneja el envío de la clasificación
  const handleEnviarClasificacion = () => {
    // Aquí puedes escribir la lógica para enviar la clasificación
    console.log('Clasificación:', selectedOption);
  };

  return (
    <div>
      <h1 className="h1_clas">Clasificación</h1>

      <div className="contenedor_clas">
        <div className="columna_clas columna1_clas">
        <h2 className="h2_clasificacion">Clasificaciòn de la practica</h2>
          <input
            type="text"
            list="opciones"
            placeholder="SELECCIONAR"
            value={inputValue}
            onChange={handleInputChange}
          />
          <datalist id="opciones">
          <option value="Contrato Aprendizaje" />
          <option value="Proyecto Especial" />
          <option value="Investigación" />
          <option value="Emprendimiento" />
          <option value="Mentoría Docente" />
          <option value="Vinculación Laboral" />
          <option value="Vínculo Laboral Intermediación" />
          </datalist>
          <div className='cont_boton'>
          <button className='button_enviar_clasificacion' type="button" onClick={handleEnviarClasificacion}>Enviar</button>
          </div>
        </div>
        <div className="columna_clas columna2_cals">
          <h2 className="h2_clas">Video tutorial</h2>
          <video controls width="250">
            <source src="ruta/al/video.mp4" type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
          <h2 className="h2_t">Documentos y manuales</h2>
          <a href="ruta/al/archivo.pdf" target="_blank" rel="noopener noreferrer">Instructivo auto matriculacion.pdf</a>
          <h1></h1>
          <a href="ruta/al/archivo.pdf" target="_blank" rel="noopener noreferrer">Lineamientos_PP_acuerdo009.pdf</a>
        </div>
      </div>
    </div>
  );
}

export default Clasificacion;
