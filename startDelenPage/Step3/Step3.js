import React from 'react'

import Style from './Step3.module.css'

import { Button } from '../../components/componentsindex'

const Step3 = () => {
  return (

  <div className={Style.step3}>
    <div className={Style.step3_box}>
        <h1>
          Simulatie wordt opgestuurd
        </h1>
        <p>
        Jouw simulatie wordt momenteel gegenereerd en kan je binnen de 24 uur in je mailbox verwachten.<br />
            Geen mail ontvangen na 24 uur? Gelieve contact op te nemen met onze klantendienst. <br />
            0484/93.21.22<br />
            Je mag dit venster sluiten.
        </p>
    </div>
  </div>
  )
}

export default Step3