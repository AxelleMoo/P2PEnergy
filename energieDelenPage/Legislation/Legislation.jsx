import React from 'react'
import { TiTick, TiTimes } from "react-icons/ti";
import Image from 'next/image'


import Style from './Legislation.module.css'
import images from '../../img'

const Legislation = () => {
  return (
    <div className={Style.legislation}>
        <div className={Style.legislation_box}>
            <div className={Style.legislation_box_energiedelen}>
                <span className={Style.legislation_box_energiedelen_span}>Energiedelen</span>
                <small className={Style.legislation_box_energiedelen_small}>
                    Geen vergoeding
                </small>
                <div className={Style.legislation_box_energiedelen_info}>
                    <div className={Style.legislation_box_energiedelen_info_box}>
                        <p className={Style.legislation_box_energiedelen_info_para}>
                            <span>
                                <TiTick/>
                            </span>
                            Energiedelen binnen een appartementsgebouw of multifunctioneel gebouw
                        </p>
                        <div className={Style.legislation_box_energiedelen_info_box_img}>
                            <Image className={Style.legislation_box_energiedelen_info_box_img_img} src={images.apartment} alt="aprtment" width={100} height={100}/>
                        </div>
                    </div>
                    <div className={Style.legislation_box_energiedelen_info_box}>
                        <p className={Style.legislation_box_energiedelen_info_para}>
                            <span>
                                <TiTick/>
                            </span>
                            Energiedelen binnen een energiegemeenschap
                        </p>
                        <div className={Style.legislation_box_energiedelen_info_box_img}>
                            <Image className={Style.legislation_box_energiedelen_info_box_img_img} src={images.community} alt="community" width={310} height={215}/>
                        </div>
                    </div>
                    <div className={Style.legislation_box_energiedelen_info_box}>
                        <p className={Style.legislation_box_energiedelen_info_para}>
                            <span>
                                <TiTick/>
                            </span>
                            Energiedelen met jezelf
                        </p>
                        <div className={Style.legislation_box_energiedelen_info_box_img}>
                            <Image className={Style.legislation_box_energiedelen_info_box_img_img} src={images.selfsharing} alt="self sharing" width={350} height={100}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Style.legislation_box_energiedelen}>
                <span className={Style.legislation_box_energiedelen_span}>Persoon-aan-persoon</span>
                <small className={Style.legislation_box_energiedelen_small}>
                    Wel vergoeding
                </small>
                <div className={Style.legislation_box_energiedelen_info}>
                    <div className={Style.legislation_box_energiedelen_info_box}>
                        <p className={Style.legislation_box_energiedelen_info_para}>
                            <span>
                                <TiTick/>
                            </span>
                            Persoon-aan-persoonverkoop
                            
                        </p>
                        <div className={Style.legislation_box_energiedelen_info_box_img}>
                            <Image className={Style.legislation_box_energiedelen_info_box_img_img} src={images.oneToOne} alt="one-to-one" width={280} height={78}/>
                        </div>
                        
                    </div>
                    <div className={Style.legislation_box_energiedelen_info_box}>
                        <p className={Style.legislation_box_energiedelen_info_para}>
                            <span>
                                <TiTick/>
                            </span>
                            Meervoudige persoon-aan-persoonverkoop
                        </p>
                        <div className={Style.legislation_box_energiedelen_info_box_img}>
                            <Image className={Style.legislation_box_energiedelen_info_box_img_img} src={images.manyToOne} alt="many-to-one" width={285} height={215}/>
                        </div>
                        
                    </div>

                    <div className={Style.legislation_box_energiedelen_info_box}>
                        <p className={Style.legislation_box_energiedelen_info_para}>
                            <span>
                                <TiTimes/>
                            </span>
                            Persoon-aan-meervoudige persoonverkoop
                            
                        </p>
                        <div className={Style.legislation_box_energiedelen_info_box_img}>
                            <Image className={Style.legislation_box_energiedelen_info_box_img_img} src={images.oneToMany} alt="one-to-many" width={290} height={215}/>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Legislation