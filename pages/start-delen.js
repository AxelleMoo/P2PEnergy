import React, {useState} from 'react'

import { Step1, Step2, Step3 } from '../startDelenPage/startDelenIndex'
import Style from '../styles/startDelen.module.css'

import { Button, MultistepProgressBar } from '../components/componentsindex'

const startDelen = () => {
  

  const [accountCreated, setAccountCreated] = useState(false)
  const [activeStep, setActiveStep] = useState(1);
  const handleNextStep = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  return (
    <div className={Style.startDelen}>
      
      {
        !accountCreated &&
          <div className={Style.startDelen_info}>
          <h1>Start met energiedelen</h1>
          <p>In slechts drie stappen kan je je energie delen en beginnen met geld verdienen. Telkens na elke stap kan je het proces stoppen. 
            De laatste stap houdt in dat er een simulatie wordt gemaakt en pas als je deze ontvangen hebt kan je bevestigen. 
          </p>
        </div>
        
      }
      <MultistepProgressBar activeStep={activeStep}/>
      {activeStep === 1 && <Step1 onNextStep={handleNextStep} />}
      {activeStep === 2 && <Step2 onNextStep={handleNextStep} />}
      {activeStep === 3 && <Step3 />}
      
    </div>
  )
}

export default startDelen