import { Stepper } from "../../Components/stepper/stepper";
import { TemplateLayout } from "../../Components/TemplateLayout/TemplateLayout";
import { PageBar } from "../../Components/PageBar/PageBar";
import {Register} from "../Register/Register";
import Workshop from "../Workshop/Workshop"
import Classification from "../Classification/Classification"
const dic= {
    'Pre-inscripcion': <Register/>,
    'Taller y evaluacion': <Workshop/>,
    'Clasificación': <Classification/>,
    'Radicacion de Documentos':<Register/> ,
    'Legalizacion de practicas': <Register/>,
    'Seguimiento': <Register/>
  };
export function PracticePage (){
    return (
        <>
        <TemplateLayout>
            <p></p>
        <PageBar/>
        <p></p>
            <Stepper componentes = {dic}></Stepper>    
        
        </TemplateLayout>

        </>
    )
}