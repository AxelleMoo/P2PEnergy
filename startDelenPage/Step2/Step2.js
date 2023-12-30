import React from 'react'

import { Button } from '../../components/componentsindex'

import Style from './Step2.module.css'

const Step2 = ({onNextStep}) => {
  return (
    <div className={Style.step2}>
      <div className={Style.step2_box}>
          <h1>
            Je hebt succesvol een account aangemaakt
          </h1>
          <p>
            Je ontving een email van Fluvius. Bevestig de toegang tot de data van je elektriciteitsmeter zodat wij
            onze Voltex simulatie kunnen uitvoeren. <br />
            Klik op volgene stap als je je toegang hebt verleend. <br />
            Lukt dit niet? Gelieve contact op te nemen met onze klantendienst. <br />
            0484/93.21.22
          </p>
          <div className={Style.step2_box_btn}>
            <Button classStyle={Style.button} btnName="Volgende stap" handleClick={() => onNextStep()}/>
          </div>
      </div>
    </div>
  )
}

export default Step2