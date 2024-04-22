import React, { useState, useRef } from 'react';
import './taller.css';

export function Taller() {
  const [archivoElegido, setArchivoElegido] = useState(null); // Estado para el archivo seleccionado
  const [enviado, setEnviado] = useState(false); // Estado para controlar si se ha enviado el archivo
  const inputRef = useRef(null); // Referencia al input file

  // Maneja el cambio de archivo seleccionado
  const handleArchivoSeleccionado = (event) => {
    const archivo = event.target.files[0];
    setArchivoElegido(archivo);
  };

  // Maneja el clic en el botón para abrir el selector de archivos
  const handleAbrirSelectorArchivos = () => {
    inputRef.current.click();
  };

  // Maneja el envío del archivo seleccionado
  const handleEnviarArchivo = () => {
    // Aquí puedes escribir la lógica para enviar el archivo
    console.log('Archivo seleccionado:', archivoElegido);
    setEnviado(true); // Marca el archivo como enviado
  };

  // Maneja el clic en el botón para volver a cargar
  const handleVolverACargar = () => {
    // Resetea el estado del archivo elegido y el estado de envío
    setArchivoElegido(null);
    setEnviado(false);
  };

  return (
    <div>
      <h1 className="h1_t">Etapa taller y evaluacion</h1>

      <div className="contenedor">
        <div className="columna columna1">
          <h2 className="h2_t">Ingreso a Moddle</h2>
          <button className='button_ingreso_moddle'>
            <img src="./Taller/Logos_uniminuto11.png" className="icono_archivo" />
            Acceso Institucional
          </button>
          <h2 className="h2_t">Carga evidencia taller</h2>
          <button className='button_subir_archivo' type="button" onClick={handleAbrirSelectorArchivos}> Subir archivo</button>
          {archivoElegido ? `Archivo seleccionado: ${archivoElegido.name}` : '  Ningún archivo seleccionado'}
          <h1></h1>
          {enviado ? (
            <div>
              <p>¡El archivo se ha enviado correctamente!</p>
              <div className="container_volver_a_cargar_leg1">
              <button className='button_volver_cargar_leg1' type="button" onClick={handleVolverACargar}>Volver a cargar</button>
              </div>
              <p></p>
              <div className="titulo">
  <h2>Aprobación de Centro Progresa</h2>
</div>
<div className="container">
  <div className="column">
    <h3>Estado de Aprobación</h3>
    <br />
          <select className='Estado' name="Estado_aprobacion" id="Estado">
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
          ) : (
            <div>
              <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleArchivoSeleccionado} />
              <button className='button_enviar' type="button" onClick={handleEnviarArchivo}>Enviar</button>
            </div>
          )}
        </div>
        <div className="columna columna2">
          <h2 className="h2_t">Video tutorial</h2>
          <video className="Video" controls width="250">
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

export default Taller;
