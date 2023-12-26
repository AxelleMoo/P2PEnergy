import React from 'react'

import StartDelen from '../startDelenPage/StartDelen'

import Style from '../styles/startDelen.module.css'

const startDelen = () => {
  


  return (
    <div className={Style.startDelen}>
      <div className={Style.startDelen_info}>
        <h1>Start met energiedelen</h1>
        <p>In slechts vier stappen kan je je energie delen en beginnen met geld verdienen. Telkens na elke stap kan je het proces stoppen. 
          De laatste stap houdt in dat er een simulatie wordt gemaakt en pas als je deze ontvangen hebt kan je bevestigen. 
        </p>
      </div>
      <StartDelen/>
      
    </div>
  )
}

export default startDelen