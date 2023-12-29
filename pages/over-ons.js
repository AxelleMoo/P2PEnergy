import React from 'react';
import Image from 'next/image';

import Style from '../styles/overOns.module.css'
import images from "../img"


const overOns = () => {
    const founderArray = [
        {
          name: "Axelle Moortgat",
          position: "Co-founder and Chief Executive",
          images: images.pfaxelle,
        },
        {
          name: "Tom Moortgat",
          position: "Co-founder and Chief Executive",
          images: images.pftom,
        },
      ];
    
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>Over Ons</h1>
            <p>
                Bij Voltex geloven we in een duurzame toekomst waarin energie niet alleen wordt opgewekt, 
                maar ook gedeeld. Onze missie is om gemeenschappen te versterken door het concept van 
                "energiedelen" te omarmen. We streven ernaar de afhankelijkheid van traditionele energiebronnen 
                te verminderen en te bouwen aan een veerkrachtig netwerk van duurzame energiebronnen.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={images.okconcept} className={Style.aboutus_box_hero_right_img}/>
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>Oprichters</h2>
          <p>
            Ons gepassioneerde team heeft zich verenigd met een gemeenschappelijk doel: 
            de wereldwijde energietransitie leiden door innovatie en verantwoordelijkheid.
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        
      </div>
    </div>
  )
}

export default overOns