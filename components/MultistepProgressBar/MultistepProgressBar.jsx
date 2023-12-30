import React from 'react'

import Style from './MultistepProgressBar.module.css'

const MultistepProgressBar = ({activeStep}) => {
  const progressWidth = ((activeStep - 1) / (3 - 1)) * 100;
  return (
    <div className={Style.multistepProgressBar}>
        <div className={Style.multistepProgressBar_steps}>
            <span  className={`${Style.multistepProgressBar_steps_circle} ${
            activeStep >= 1 ? Style.multistepProgressBar_steps_circle_active : ''
          }`}>1</span>
            <span className={`${Style.multistepProgressBar_steps_circle} ${
            activeStep >= 2 ? Style.multistepProgressBar_steps_circle_active : ''
          }`}>2</span>
            <span className={`${Style.multistepProgressBar_steps_circle} ${
            activeStep >= 3 ? Style.multistepProgressBar_steps_circle_active : ''
          }`}>3</span>
            <div className={Style.multistepProgressBar_steps_progress}>
                <span className={Style.multistepProgressBar_steps_progress_indicator}
                style={{ width: `${progressWidth}%` }}></span>
            </div>
            
        </div>
    </div>
  )
}

export default MultistepProgressBar