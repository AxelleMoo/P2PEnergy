import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router';


import Style from './HeroSection.module.css';
import images from '../../img'
import { Button } from '../componentsindex';


const HeroSection = () => {
  const router = useRouter();
  return (
    <div className={Style.heroSection}>
        <div className={Style.heroSection_box}>
            <div className={Style.heroSection_box_left}>
                <h1>Persoon-aan-Persoon verkoop</h1>
                <p>Verkoop je energie aan iemand in de buurt en help samen de gemeente groen te maken.</p>
                <Button btnName='Simuleer mijn winst' handleClick={() => router.push("/simuleer")}/>
            </div>
            <div className={Style.heroSection_box_right}>
                <Image
                className={Style.heroSection_box_right_img}
                src={images.energyHouse1}
                alt="Hero section"
                width={800}
                height={800}
                />
            </div>
        </div>
</div>
  )
}

export default HeroSection