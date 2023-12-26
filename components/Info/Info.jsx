import React from 'react'
import Image from 'next/image'
import Style from './Info.module.css'
import images from '../../img'


const Info = () => {
    const infoArray = [
        {
          img: images.energiedelen,
          title: "ENERGIEDELEN",
          info: "Het concept van energiedelen maakt het mogelijk om je energie aan- en te verkopen aan iedereen in België.",
        },
        {
          img: images.duurzaamheid,
          title: "DUURZAAMHEID",
          info: "Zonnepanelen genereren op bepaalde pieken heel veel elektriciteit en deze kunnen het net belasten. Door je energie door te verkopen houd je het net mee in evenwicht en ben je mede verantwoordelijk voor het gebruiken van groene energie.",
        },
        {
          img: images.decentralisatie,
          title: "DECENTRALISATIE",
          info: "Door onze technologie van blockchain maken wij het mogelijk een gedecentraliseerd platform te gebruiken waarbij energie echt van persoon tot persoon wordt verkocht.",
        },
      ];
  return (
    <div className={Style.info}>
        <div className={Style.info_box}>
            <div className={Style.info_box_voltex}>
                <div className={Style.info_box_voltex_left}>
                    <Image src={images.dataconcept} className={Style.info_box_voltex_left_img} width={500} height={500}/>
                </div>
                <div className={Style.info_box_voltex_right}>
                    <h1>Wat is Voltex?</h1>
                    <p>Voltex is een energieplatform die prosumenten en consumenten in contact zet. Ze neemt al de zorgen weg van het persoon-aan-persoon verkoop van energie. In enkele clicks is het energiedelen opgezet en kan je genieten van een voordelig tarief voor je elektriciteit.</p>
                </div>
            </div>
            
        
            <div className={Style.info_box_box}>
                {infoArray.map((el,i) => (
                    <div className={Style.info_box_box_box}>
                        <div className={Style.info_box_box_box_icon}>
                            <Image src={el.img} className={Style.info_box_icon_img} width={100} height={100}/>
                        </div>
                        <span className={Style.info_box_box_box_span}>{el.title}</span>
                        <p>{el.info}</p>
                    </div>
                ))}
            </div>
        </div>
        
    </div>
  )
}

export default Info