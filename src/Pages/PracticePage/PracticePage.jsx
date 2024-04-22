import { Stepper } from "../../Components/stepper/stepper";
import { TemplateLayout } from "../../Components/TemplateLayout/TemplateLayout";
import { PageBar } from "../../Components/PageBar/PageBar";
import {Register} from "../Register/Register";
import Workshop from "../Workshop/Workshop";
import Classification from "../Classification/Classification";
import Legalization from "../Legalization/Legalization"

const dic= {
    'Pre-inscripcion': <Register/>,
    'Taller y evaluacion': <Workshop/>,
    'Clasificación': <Classification/>,
    'Legalizacion de practicas': <Legalization/>,
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