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
              <Image src={images.prosument} alt="Prosument" className={Style.conOrProsument_type_prosument_img} width={200} height={200}/>
              <h2>Prosument</h2>
            </div>
            <div className={`${Style.conOrProsument_type_box_consument} ${
                  typeClient === 'consument' ? Style.selected : ''
                }`}
                onClick={() => handleTypeClientChange('consument')}>
              <Image src={images.consument1} alt="consument" className={Style.conOrProsumenttype_prosument_img} width={180} height={180}/>
              <h2>Consument</h2>
            </div>
          </div>
      </div>
  )
}

export default ConOrProsument