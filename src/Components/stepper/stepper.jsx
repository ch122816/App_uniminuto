import { useState } from 'react';
import MUIStepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import './Stepper.css';






export function Stepper({componentes}) {


  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => setActiveStep(prev => prev + 1);
  const handleBack = () => setActiveStep(prev => prev - 1);

  const isLastStep = activeStep === Object.keys(componentes).length - 1;

  return (
    
    <div className='box-stepper'>
      <MUIStepper activeStep={activeStep}>
        {Object.keys(componentes).map((label, index) => (
          <Step key={index}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </MUIStepper>
      
      <div>{Object.values(componentes)[activeStep]}</div>

      <div className='stepper-buttons'>
        <button 
          color="inherit" 
          disabled={activeStep === 0} 
          onClick={handleBack} 
          className='stepper-button'
        >
          Back
        </button>
        <button 
          onClick={handleNext} 
          disabled={isLastStep} 
          className='stepper-button'
        >
          {isLastStep ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
}
