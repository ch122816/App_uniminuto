import { Stepper } from "../../Components/Stepper/Stepper";
import { TemplateLayout } from "../../Components/TemplateLayout/TemplateLayout";
import {Register} from "../Register/Register"
import {Workshop} from "../Workshop/Workshop"
import './PracticePage.css'
const dic= {
    'Taller y evaluacion': <Register/>,
    'Clasificacion': <Workshop/>,
    'Radicacion de Documentos': <Register/>,
    'Legalizacion de practicas': <Register/>,
    'Seguimiento': <Register/>
  };
export function PracticePage (){
    return (
        <>
        <TemplateLayout>
            <article className="practice-layout" >
                <h1 className="practice-title" >Title</h1>
                <span className="practice-stepper" ><Stepper componentes = {dic}></Stepper></span>
                  
                <section className="practice-content" ></section>
            </article>
           
        </TemplateLayout>

        </>
    )
}