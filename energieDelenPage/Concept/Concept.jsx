import React from 'react'
import Image from 'next/image'

import Style from './Concept.module.css'
import images from "../../img"

const Concept = () => {
  return (
    <div className={Style.concept}>
        <div className={Style.concept_box}>
            <div className={Style.concept_box_right}>
                <h2>Hoe werkt het?</h2>
                <p>Als een huishouden met zonnepanelen, ook bekend als een prosument, ben je verbonden met een 
                    energieleverancier die je een vergoeding biedt voor je overtollige opgewekte energie. Neem 
                    bijvoorbeeld een prosument die deze maand 150 kWh heeft teruggeleverd aan het net en hiervoor 
                    van zijn leverancier 5 cent per kWh ontvangt. Een consument, daarentegen, is iemand die energie 
                    van het net afneemt. In ons voorbeeld is de consument klant bij energieleverancier Y en heeft 
                    deze maand 300 kWh verbruikt, tegen een tarief van 25 cent per kWh.
                    <br/>
                    <br/>
                    Bij Voltex overbruggen we het verschil tussen de prijzen voor het injecteren en afnemen van energie. 
                    In dit scenario stellen we zowel de injectie- als afnameprijs vast op 15 cent per kWh. Als er nu 100 
                    kWh van de prosument naar de consument wordt overgedragen via Voltex, betaalt de consument 15 euro 
                    (100 kWh x 0,15 euro per kWh) aan de prosument. Dit betekent dat de consument 15 euro betaalt in 
                    plaats van de 25 euro die hij normaal aan zijn energieleverancier zou moeten betalen, terwijl 
                    de prosument 15 euro ontvangt in plaats van 5 euro.
                    <br/>
                    <br/>
                    Maar hoe werkt het met de energieleveranciers? Voltex communiceert naar jouw energieleverancier 
                    hoeveel energie je hebt gedeeld. Deze gedeelde energie wordt vervolgens van jouw factuur 
                    bij de leverancier afgetrokken. Je hoeft dus zelf niets extra te regelen.
                </p>
            </div>
            <div className={Style.concept_box_left}>
                <Image className={Style.concept_box_left_img} src={images.exampleconcept} alt="example concept" width={600} height={470}/>
            </div>
        
            
        </div>
        <div className={Style.concept_bill}>
            <div className={Style.concept_bill_box}>
                <h3>Eindafrekening consument</h3>
                <div className={Style.concept_bill_box_box}>
                    <Image className={Style.concept_bill_box_img} alt = "bill consument" src={images.billConsument} width={500} height={250}/>
                </div>
            </div>
            <div className={Style.concept_bill_box}>
                <h3>Eindafrekening prosument</h3>
                <div className={Style.concept_bill_box_box}>
                    <Image className={Style.concept_bill_box_img} alt = "bill prosument" src={images.billProsument} width={500} height={250}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Concept