import { useState } from 'react';
import jsonData from '../../Logic/example.json';

export function Example() {
    const [data, setData] = useState(null);
    const seleccion = "contrato_aprendizaje";

    const extractJson = () => {
        const legalizacion = JSON.parse(JSON.stringify(jsonData));
        
        for (let clave in legalizacion) {
            if (seleccion === clave) {
                setData(legalizacion[clave]);
                break;
            }
        }
    }

    return (
        <>
            <div>{data ? data.src_video : "loading data"}</div>
            <button onClick={extractJson}>obtener json</button>
        </>
    );
}
