import React, { useState } from 'react';
import './publicaciones_cp.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom

export function Publicaciones() {
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate(); // Inicializa navigate

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        
        // Redirige según la opción seleccionada
        if (selectedValue === 'Practica1') {
            navigate('./pages/stepper/stepper.jsx'); // Usa navigate
        }
    };

    return (
        <body className='body_publ'>
            <div className="contenedor_1">
                <div className="seccion_1">
                <label htmlFor="slct" className="select">
      <select id="slct" onChange={handleSelectChange} required>
        <option value="" disabled selected>Select option</option>
        <option value="Inscripción_empreas">Inscripción Empresas</option>
        <option value="Solicitud_de_pre_inscripcion">Solicitud de pre-inscripcion</option>
        <option value="Consulta_masiva">Consulta masiva</option>
        <option value="Estadisticas">Estadisticas</option>
      </select>
      <svg>
        <use xlinkHref="#select-arrow-down" />
      </svg>
    </label>
                </div>

                <div>
                    <h1 className="mi-clase">PUBLICACIONES</h1>
                </div>
            </div>
        </body>
    );
}

export default Publicaciones;
