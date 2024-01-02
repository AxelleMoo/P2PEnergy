import React from 'react'
import Image from 'next/image'

import Style from './VoltexConcept.module.css'
import images from '../../img'
const VoltexConcept = () => {
  return (
    <div className={Style.voltexconcept}>
        <div className={Style.voltexconcept_box}>
            <div className={Style.voltexconcept_box_left}>
                <h2>Waarom Voltex?</h2>
                <p>
                    Bij Voltex hanteren we een innovatief concept met als doel een volledige opvang van jouw 
                    overtollige energie te realiseren. Hoe bereiken we dit? We maken slim gebruik van de nieuwe 
                    wetgeving die in 2023 is ingevoerd en meervoudige persoon-aan-persoon verkoop mogelijk maakt. 
                    Ons unieke benadering betrekt meerdere prosumenten bij grote energieverbruikers, 
                    zoals supermarkten, ijsbanen, en andere bedrijven. Hierdoor kunnen we garanderen dat alle 
                    overtollige energie volledig wordt benut. Onderzoek heeft namelijk aangetoond dat 
                    persoon-aan-persoon verkoop slechts leidt tot een opvang van 12,5%. Bij Voltex streven we naar 
                    een 100% opvang, en dit onderscheidt ons als een vooruitstrevende en effectieve energiepartner.</p>
            </div>
            <div className={Style.voltexconcept_box_right}>
                <Image className={Style.voltexconcept_box_right_img} src={images.manytosupermarket} width={500} height={500}/>
            </div>
        </div>
    </div>
  )
}

export default VoltexConcept