import React from 'react';
import Image from 'next/image';
import {RiSendPlaneFill, iSendPlaneFill} from 'react-icons/ri'
import {TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube, TiSocialInstagram, TiArrowSortedDown, TiArrowSortedUp} from 'react-icons/ti';


//INTRNAL IMPORT
import images from '../../img'
import Style from './Footer.module.css'

const Footer = () => {
  return (
    <div className={Style.footer}>
      <div className={Style.footer_box}>
        <div className={Style.footer_box_social}>
          <Image className={Style.footer_box_social_} src={images.voltex} alt="footer logo" height={130} width={200}/>
          <p>
            Digitaal platform dat energiedelen mogelijk maakt. Word prosument of consument en begin meteen met geld te besparen.
          </p>
          <div className={Style.footer_social}>
            <a href="#">
              <TiSocialFacebook/>
            </a>
            <a href="#">
              <TiSocialTwitter/>
            </a>
            <a href="#">
              <TiSocialYoutube/>
            </a>
            <a href="#">
              <TiSocialInstagram/>
            </a>
            <a href="#">
              <TiSocialLinkedin/>
            </a>
          </div>
        </div>
        
        <div className={Style.subscibe}>
          <h3>Subscribe</h3>
          <div className={Style.subscribe_box}>
            <input type='email' placeholder='Enter you email *'/>
            <RiSendPlaneFill className={Style.subscribe_box_send}/>
          </div>
          <div className={Style.subscribe_box_info}>
            <p>Schrijf je in voor het allerlaatste nieuws over energiedelen en kom als eerste onze nieuwe features te weten.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer