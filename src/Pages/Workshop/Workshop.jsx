import React, { useState, useRef } from 'react';
import './Workshop.css';
import FileUploader from '../../Components/FileUploader/FileUploader';
import DocumentLink from '../../Components/DocumentLink/DocumentLink';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import ApprovalStatus from '../../Components/ApprovalStatus/ApprovalStatus'; // Importa el componente ApprovalStatus

function Workshop() {
  const [archivoElegido, setArchivoElegido] = useState(null); // Estado para el archivo seleccionado
  const [enviado, setEnviado] = useState(false); // Estado para controlar si se ha enviado el archivo
  const inputRef = useRef(null); // Referencia al input file

  // Maneja el cambio de archivo seleccionado
  const handleArchivoSeleccionado = (event) => {
    const archivo = event.target.files[0];
    setArchivoElegido(archivo);
    setEnviado(false); // Cuando se selecciona un nuevo archivo, se reinicia el estado de enviado
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
    setEnviado(false); // Se asegura de que el botón de "Enviar" vuelva a aparecer
  };

  return (
    <div>
      <h1 className="h1_t">Etapa taller y evaluacion</h1>

      <div className="contenedor">
        <div className="columna columna1">
          <h2>Ingreso a Moddle</h2>
          <button>Acceso Institucional</button>

          <h2>Carga evidencia taller</h2>
          <FileUploader label="Subir archivo" onChange={handleArchivoSeleccionado} />
          
          {archivoElegido ? (
            <>
              <p>Archivo seleccionado: {archivoElegido.name}</p>
              <button type="button" onClick={handleVolverACargar}>Volver a cargar</button>
              <p></p>
            </>
          ) : (
            <p>Ningún archivo seleccionado</p>
          )}

          {archivoElegido && !enviado && (
            <button type="button" onClick={handleEnviarArchivo}>Enviar</button>
          )}

          {enviado && (
            <ApprovalStatus />
          )}
        </div>

        <div className="columna columna2">
          <h1>Video tutorial</h1>
          <VideoPlayer src="ruta/al/video.mp4" />

          <h1>Documentos y manuales</h1>
          <DocumentLink href="ruta/al/archivo.pdf" text="Instructivo auto matriculacion.pdf" />
          <DocumentLink href="ruta/al/archivo.pdf" text="Lineamientos_PP_acuerdo009.pdf" />      
        </div>
      </div>
    </div>
  );
}

export default Workshop;
