import React from 'react'
import Image from 'next/image'

import { Info, HeroSection, Stappenplan, Title } from '../components/componentsindex';

const index = () => {
  return (
    <div>
      <HeroSection/>
      <Info/>
      <Title heading="Hoe werkt het?" paragraph="Het hele proces is zo makkelijk mogelijk gemaakt voor jou. In slechts 4 stappen ben je al aan het genieten van een voordelige elektriciteitsrekening. Bovendien kan je altijd na elke stap in het proces stoppen."/>
      <Stappenplan/>
    </div>
  )
}

export default index