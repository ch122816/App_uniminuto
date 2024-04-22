import { Stepper } from "../../Components/Stepper/Stepper";
import { TemplateLayout } from "../../Components/TemplateLayout/TemplateLayout";
import {Register} from "../Register/Register"
import {Workshop} from "../Workshop/Workshop"
const dic= {
    'Taller y evaluacion': <Register/>,
    'Clasificacion': <Workshop/>,
    // 'Radicacion de Documentos': ,
    // 'Legalizacion de practicas': ,
    // 'Seguimiento': 
  };
export function PracticePage (){
    return (
        <>
        <TemplateLayout>
            <div>Title</div>
            <Stepper componentes = {dic}></Stepper>    
        </TemplateLayout>

        </>
    )
}