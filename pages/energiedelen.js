import React from 'react'

import { Concept, Legislation, VoltexConcept } from '../energieDelenPage/energieDelenIndex'
import { Title } from '../components/componentsindex'
import Style from '../styles/energiedelen.module.css'

const energiedelen = () => {
  return (
    <div className={Style.energiedelen}>
      <Title heading="Wetgevend kader"
            paragraph="
            Sinds 2022 kunnen eigenaren van zonnepanelen, uitgerust met een digitale meter, hun surplus aan elektriciteit 
            direct verhandelen via Fluvius. Voor de distributie van deze energie zijn er verschillende opties beschikbaar, 
            welke onder te verdelen zijn in twee categorieën: het energiedelen en de persoon-aan-persoon verkoop."/>
        <div className={Style.energiedelen_box}>
            <Legislation/>
        </div>
      <Concept/>
      <VoltexConcept/>
    </div>
  )
}

export default energiedelen