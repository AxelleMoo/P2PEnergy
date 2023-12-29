import React, {useState} from 'react'

import StartDelen from '../startDelenPage/StartDelen'

import Style from '../styles/startDelen.module.css'

const startDelen = () => {
  

  const [accountCreated, setAccountCreated] = useState(false)

  return (
    <div className={Style.startDelen}>
      {
        !accountCreated &&
          <div className={Style.startDelen_info}>
          <h1>Start met energiedelen</h1>
          <p>In slechts vier stappen kan je je energie delen en beginnen met geld verdienen. Telkens na elke stap kan je het proces stoppen. 
            De laatste stap houdt in dat er een simulatie wordt gemaakt en pas als je deze ontvangen hebt kan je bevestigen. 
          </p>
        </div>
        
      }
      <StartDelen setAccountCreated={setAccountCreated} />
      {
        accountCreated &&
        <div className={Style.startDelen_info}>
          <h1>
            Je hebt succesvol een account aangemaakt
          </h1>
          <p>
            Binnen maximaal 24 uur ontvang je van ons een e-mail via Fluvius, 
            waarin je wordt uitgenodigd om toegang tot je slimme meter te verlenen. 
            Zodra je deze toestemming geeft, gaan wij aan de slag met het opstellen 
            van een gepersonaliseerde simulatie, die we je vervolgens toesturen. 
            In deze e-mail vind je tevens de mogelijkheid om deelname te bevestigen, 
            waarna we voor jou het delen van energie zullen activeren.
          </p>
        </div>
      }
      
    </div>
  )
}

export default startDelen