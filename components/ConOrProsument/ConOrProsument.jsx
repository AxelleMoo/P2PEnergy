import React, {useState} from 'react';
import Image from 'next/image'

import images from '../../img'

import Style from './ConOrProsument.module.css'

const ConOrProsument = ({setClientType}) => {
    const [typeClient, setTypeClient] = useState(null);
    const handleTypeClientChange = (option) => {
        setTypeClient(option);
        setClientType(option);
      }
  return (
    <div className={Style.conOrProsument}>
          
          <div className={Style.conOrProsument_type_box}>
            <div className={`${Style.conOrProsument_type_box_prosument} ${
                typeClient === 'prosument' ? Style.selected : ''
              }`}
              onClick={() => handleTypeClientChange('prosument')}>
              <h2>Prosument</h2>
              <Image src={images.prosument} alt="Prosument" className={Style.conOrProsument_type_prosument_img} width={200} height={200}/>
              <div>
                Ik ben een particulier of organisatie en wil mijn elektriciteit verkopen.
              </div>
              <div className={`${Style.circleIndicator} ${typeClient === 'prosument' ? Style.selected : ''}`}></div>
            </div>
            <div className={`${Style.conOrProsument_type_box_consument} ${
                  typeClient === 'consument' ? Style.selected : ''
                }`}
                onClick={() => handleTypeClientChange('consument')}>
              <h2>Consument</h2>
              <Image src={images.consument1} alt="consument" className={Style.conOrProsumenttype_prosument_img} width={180} height={180}/>
              <div>
                Ik ben een organisatie en wil elektriciteit goedkoper aankopen.
              </div>
              <div className={`${Style.circleIndicator} ${typeClient === 'consument' ? Style.selected : ''}`}></div>
            </div>
          </div>
      </div>
  )
}

export default ConOrProsument