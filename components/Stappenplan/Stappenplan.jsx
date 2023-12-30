import React from 'react'
import Image from 'next/image'

import { useRouter } from 'next/router'
import images from '../../img'

import Style from './Stappenplan.module.css'

const Stappenplan = () => {
    const router = useRouter();
  return (
    <div className={Style.stappenplan}>
        <div className={Style.stappenplan_box}>
            <div className={Style.stappenplan_box_item}>
                <Image src={images.click} alt="Click icon" width={100} height={100}/>
                <p className={Style.stappenplan_box_item_step}>
                    <span onClick={() => router.push("/start-delen")}>Stap 1</span>
                </p>
                <h3>Vul in</h3>
                <p>Klik op de knop 'Stap 1' & vul je gegevens in.</p>
            </div>
            <div className={Style.stappenplan_box_item}>
                <Image src={images.accept} alt="Accept icon" width={100} height={100}/>
                <p className={Style.stappenplan_box_item_step}>
                    <span>Stap 2</span>
                </p>
                <h3>Simuleer</h3>
                <p>Je ontvangt een mail van Fluvius, geef toegang voor de Voltex simulatie.</p>
            </div>
            <div className={Style.stappenplan_box_item}>
                <Image src={images.profit} alt="Profit icon" width={100} height={100}/>
                <p className={Style.stappenplan_box_item_step}>
                    <span>Stap 3</span>
                </p>
                <h3>Bevestig</h3>
                <p>Ontvang een simulatie van de bespaarde kosten, bevestig en geniet van een goedkopere elektriciteitsrekening.</p>
            </div>

        </div>
    </div>
  )
}

export default Stappenplan