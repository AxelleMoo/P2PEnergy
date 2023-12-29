import React from 'react'
import Image from 'next/image'

import { Info, HeroSection, Stappenplan, Title } from '../components/componentsindex';

const index = () => {
  return (
    <div>
      <HeroSection/>
      <Info/>
      <Title heading="Hoe werkt het?" 
        paragraph="Het gehele proces is vereenvoudigd voor jouw gemak. 
        In slechts vier eenvoudige stappen ben je al op weg naar het profiteren van 
        een voordelige elektriciteitsrekening. Bovendien heb je de flexibiliteit om op 
        elk moment in het proces te stoppen."/>
      <Stappenplan/>
    </div>
  )
}

export default index