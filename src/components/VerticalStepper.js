import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

export default function ShceduleStepper({ steps }) {
  const [activeStep, setActiveStep] = useState(0);

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep} orientation='vertical'>
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel onClick={handleStep(index)}>
              <b>{step.label}</b>
            </StepLabel>
            <StepContent className='step-content'>
              <p>{step.time}</p>
              <p>{step.location}</p>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
