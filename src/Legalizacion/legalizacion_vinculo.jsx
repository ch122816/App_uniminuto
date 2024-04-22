import React, { useState, useRef } from 'react';
import './legalizacion.css';

export function Legalizacion_vinculo() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [enviado, setEnviado] = useState(false); // Estado para controlar si se ha enviado el formulario
  const fileInputRef1 = useRef(null); // Referencia al primer elemento de entrada de archivo
  const fileInputRef2 = useRef(null); // Referencia al segundo elemento de entrada de archivo
  const fileInputRef3 = useRef(null); // Referencia al tercer elemento de entrada de archivo

  // Maneja el cambio de opción seleccionada en el select
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Maneja el cambio de valor en el campo de texto
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedOption(event.target.value); // Actualiza la opción seleccionada al valor del campo de texto
  };

  // Maneja el envío del formulario
  const handleEnviarClasificacion = () => {
    // Aquí puedes escribir la lógica para enviar la clasificación
    console.log('Clasificación:', selectedOption);
    setEnviado(true); // Marca el formulario como enviado
  };

  // Maneja el clic en el botón "Volver a Cargar"
  const handleVolverACargar = () => {
    setEnviado(false); // Marca el formulario como no enviado
    // Limpia el valor de los elementos de entrada de archivo
    if (fileInputRef1.current) {
      fileInputRef1.current.value = '';
    }
    if (fileInputRef2.current) {
      fileInputRef2.current.value = '';
    }
    if (fileInputRef3.current) {
      fileInputRef3.current.value = '';
    }
  };

  return (
   <div>
      <h1 className="h1_leg">Legalización Prácticas</h1>

      <div className="contenedor">
        <div className="columna columna1">
          <h2 className="h2_leg">Video explicativo de legalización</h2>
          <video controls width="250">
            <source src="ruta/al/video.mp4" type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
          <p></p>
          
          <a href="ruta/al/archivo.pdf" target="_blank" rel="noopener noreferrer">Instructivo de legalización vinculo laboral certificación.pdf</a>
          <p></p>

          <div className="titulo">
            <h2>Aprobación de Centro Progresa</h2>
          </div>
          <div className="container">
            <div className="column">
              <h3>Estado de Aprobación</h3>
              <br />
              <select className='Estadoo' name="Estado_aprobacion" id="Estado">
                <option value="Pendiente">Pendiente</option>
                <option value="Rechazado">Rechazado</option>
                <option value="Aprobado">Aprobado</option>
              </select>
              <br />
            </div>
            <div className="column">
              <h3>Observaciones</h3>
              {/* Contenido de las observaciones */}
            </div>
          </div>
        </div>
        <div className="columna columna2">
        <h1 className="h1_diff">Subir documentos</h1>
          <div className='cont_boton'>
            {/* Mostrar los tres elementos de entrada de archivo siempre */}
            <h2 className="h2_leg">Certificado de vinculacion</h2>
            <p className='p_leg'>Selecciona archivo pdf</p>
            <input type="file" ref={fileInputRef1} />
            <h2 className="h2_leg">Certificado de ARL</h2>
            <p className='p_leg'>Selecciona archivo pdf</p>
            <input type="file" ref={fileInputRef2} />
            <h2 className="h2_leg">Certificado de EPS</h2>
            <p className='p_leg'>Selecciona archivo pdf</p>
            <input type="file" ref={fileInputRef3} />
            {/* Mostrar el botón "Enviar" si el formulario no se ha enviado */}
            {!enviado && <button className='button_enviar' type="button" onClick={handleEnviarClasificacion}>Enviar</button>}
            {/* Mostrar el botón "Volver a Cargar" si el formulario se ha enviado */}
            {enviado && <button className='button_volver_cargar' type="button" onClick={handleVolverACargar}>Volver a Cargar</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legalizacion_vinculo;
