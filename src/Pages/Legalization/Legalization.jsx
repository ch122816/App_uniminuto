import { useState, useRef } from 'react';
import { useEffect } from 'react';
import './Legalization';
import jsonData from '../../Logic/example.json'; // Importar el JSON con la información
import FileUploader from '../../Components/FileUploader/FileUploader';
import DocumentLink from '../../Components/DocumentLink/DocumentLink';
import VideoPlayer from '../../Components/VideoPlayer/VideoPlayer';
import ApprovalStatus from '../../Components/ApprovalStatus/ApprovalStatus';


export function Legalization() {
  const [selectedOption, setSelectedOption] = useState('');
  const [inputValue, setInputValue] = useState('');
  const [enviado, setEnviado] = useState(false); // Estado para controlar si se ha enviado el formulario
  const fileInputRef1 = useRef(null); // Referencia al primer elemento de entrada de archivo
  const fileInputRef2 = useRef(null); // Referencia al segundo elemento de entrada de archivo
  const fileInputRef3 = useRef(null); // Referencia al tercer elemento de entrada de archivo

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setSelectedOption(event.target.value);
  };

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

  useEffect(() => {
    const legalizacion = JSON.parse(JSON.stringify(jsonData));
    const seleccion = sessionStorage.getItem('clasificacion');
    for (let clave in legalizacion) {
        if (seleccion === clave) {
            setData(legalizacion[clave]);
            break;
        }
    }
  }, []);


  // Obtener los datos correspondientes a la opción seleccionada del JSON
  const selectedData = selectedOption ? jsonData[selectedOption] : null;

  return (
   <div>
      <h1 className="h1_leg">Legalización Prácticas</h1>

      <div className="contenedor">
        <div className="columna columna1">
          {selectedData && (
            <>
              <h2 className="h2_leg">Video explicativo de legalización</h2>
              <VideoPlayer src={selectedData.video} />
              <p></p>
              <DocumentLink href={selectedData.instructivo} text="Instructivo de legalización" />
              <p></p>
              <div className="titulo">
                <h2>Aprobación de Centro Progresa</h2>
              </div>
              <div className="container">
                <div className="column">
                  <h3>Estado de Aprobación</h3>
                  <br />
                  <ApprovalStatus />
                  <br />
                </div>
                <div className="column">
                  <h3>Observaciones</h3>
                  {/* Contenido de las observaciones */}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="columna columna2">
          <h1 className="h1_diff">Subir documentos</h1>
          <div className='cont_boton'>
            {selectedData && selectedData.documentos.map((documento, index) => (
              <div key={index}>
                <h2 className="h2_leg">{documento.nombre}</h2>
                <p className='p_leg'>{documento.placeholder}</p>
                <FileUploader ref={index === 0 ? fileInputRef1 : index === 1 ? fileInputRef2 : fileInputRef3} />
              </div>
            ))}
            {!enviado && <button className='button_enviar' type="button" onClick={handleEnviarClasificacion}>Enviar</button>}
            {enviado && <button className='button_volver_cargar' type="button" onClick={handleVolverACargar}>Volver a Cargar</button>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Legalization;
