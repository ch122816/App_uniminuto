import { useState, useRef } from 'react';
import './Workshop.css';
import { TemplateLayout } from '../../Components/TemplateLayout/TemplateLayout';

export function Workshop() {
  const [archivoElegido, setArchivoElegido] = useState(null); // Estado para el archivo seleccionado
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
  };

  // Maneja el clic en el botón para volver a cargar
  const handleVolverACargar = () => {
    // Resetea el estado del archivo elegido
    setArchivoElegido(null);
  };

  return (
    
    <div>
      <h1 className="h1_t">Etapa taller y evaluacion</h1>

      <div className="contenedor">
        <div className="columna columna1">
          <h2>Ingreso a Moddle</h2>
          <button>Acceso Institucional</button>
          <h2>Carga evidencia taller</h2>
          <button type="button" onClick={handleAbrirSelectorArchivos}>Subir archivo</button>
          {archivoElegido ? `Archivo seleccionado: ${archivoElegido.name}` : 'Ningún archivo seleccionado'}
          {archivoElegido && <button type="button" onClick={handleVolverACargar}>Volver a cargar</button>}
          <input type="file" ref={inputRef} style={{ display: 'none' }} onChange={handleArchivoSeleccionado} />
          <button type="button" onClick={handleEnviarArchivo}>Enviar</button>
        </div>
        <div className="columna columna2">
          <h1>Video tutorial</h1>
          <video controls width="250">
            <source src="ruta/al/video.mp4" type="video/mp4" />
            Tu navegador no admite la etiqueta de video.
          </video>
          <h1>Documentos y manuales</h1>
          <a href="ruta/al/archivo.pdf" target="_blank" rel="noopener noreferrer">Instructivo auto matriculacion.pdf</a>
          <h1></h1>
          <a href="ruta/al/archivo.pdf" target="_blank" rel="noopener noreferrer">Lineamientos_PP_acuerdo009.pdf</a>
        </div>
      </div>

      <div className="ul"></div>
      <div className="ul"></div>
    </div>
    
  );
}


