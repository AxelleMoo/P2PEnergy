import React from 'react'

import { Button, Title } from '../components/componentsindex';
import { Simulation } from '../simulationPage/simulationIndex';

const scan = () => {
  return (
    <div>
      <Title heading="Simuleer jouw besparing" paragraph="Simuleer wat jij afgelopen jaar zou hebben uitgespaard met het gebruik van 
      Voltex. Deze simulatie is gebaseerd op jouw kwartierwaarden van het afgelopen jaar en op de energieprijzen van het afgelopen jaar.
      Indien jouw kwartierwaarden niet beschikbaar zijn, zal de simulatie uitgevoerd worden op jouw dagverbruiken. Hierdoor kan de simulatie 
      lichtjes afwijken. Let wel op deze simulatie geeft geen uitsluitsel over volgend jaar. De energieprijzen schommelen namelijk zeer sterk."/>
      <Simulation/>
    </div>
  )
}

export default scan