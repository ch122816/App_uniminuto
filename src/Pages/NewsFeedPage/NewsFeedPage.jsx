import './NewsFeedPage.css'

import  { useState } from 'react';

import { useNavigate } from 'react-router-dom'; // Importa useNavigate desde react-router-dom


import { TemplateLayout } from '../../Components/TemplateLayout/TemplateLayout';


export function NewsFeedPage (){
    const [selectedOption, setSelectedOption] = useState('');
    const navigate = useNavigate(); // Inicializa navigate

    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedOption(selectedValue);
        
        // // Redirige según la opción seleccionada
        if (selectedValue === 'Practica1') {
            navigate('/practicas'); // Usa navigate
        }
    };

    
    return (
        <TemplateLayout>

        
        <div className='body_publ'>
            <div className="contenedor_1">
                <div className="seccion_1">
                    <div className="sidebar-box">
                        <select className="styled-select" onChange={handleSelectChange}>
                            <option value="Inscripción">Inscripción</option>
                            <option value="Practica1">Practica 1</option>
                            <option value="Practica2">Practica 2</option>
                            <option value="Practica3">Practica 3</option>
                        </select>
                    </div>
                </div>

                <div>
                    <h1 className="mi-clase">PUBLICACIONES</h1>
                </div>
            </div>
        </div>
        </TemplateLayout>

    );
    
}



