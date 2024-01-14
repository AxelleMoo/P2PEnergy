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
                <h1>Groen Rendement, Simpel Gedeeld</h1>
                <p>Laat jouw energie voor je werken – Groen en winstgevend</p>
                <Button btnName='Quick Scan' handleClick={() => router.push("/quick-scan")}/>
            </div>
            <div className={Style.heroSection_box_right}>
                <Image
                className={Style.heroSection_box_right_img}
                src={images.home}
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