import React, {useState, useRef} from 'react'
import Form from './Form/Form';

import { ConOrProsument, Button, ProviderOptions } from '../components/componentsindex'
import axios from 'axios'

import Style from './StartDelen.module.css'

const startDelen = ({setAccountCreated}) => {
  const [clientType, setClientType] = useState(null);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
    bankAccount: '',
    role: 'prosument',
    eanCode: '',
    provider: '',
    contract: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const startDelenBoxRef = useRef(null);
  const cleanedError = error.replace('User validation failed:', '');
  const formattedError = cleanedError.split(', ').map((err, index) => (
    <React.Fragment key={index}>
      {err}
      <br />
    </React.Fragment>
  ));

  // const refreshpage = () => {
  //   window.location.reload();
  // }

  const userSignup = async (e, formData) => {
    console.log(formData)
    try{
      setLoading(true);
      const res = await axios({
        method: "POST",
        url: "/api/v1/users/signup",
        withCredentials: true,
        data:{
          "firstname": formData.firstname,
          "lastname": formData.lastname,
          "email": formData.email,
          "password": formData.password,
          "passwordConfirm": formData.repeatPassword,
          "bankAccount": formData.bankAccount,
          "role": clientType,
          "eanCode": formData.eanCode,
          "provider": formData.provider,
          "contract": formData.contract
        }
      })

      if (res.data.status === "success"){
        setAccountCreated(true);
        if (startDelenBoxRef.current) {
          startDelenBoxRef.current.style.display = 'none';
        }
        setLoading(false);
        // window.setTimeout(() => {
        //   location.reload(true);
        // }, 1500);
      }
    }catch(error){
      setError(error.response.data.message)
      console.log(error.response.data.message)
    }
  }

  const updateProviderAndContract = (newProvider, newContract) => {
    setFormData(prevFormData => ({
        ...prevFormData,
        provider: newProvider,
        contract: newContract
    }));
};

  return (
    <div className={Style.startDelen}>
      <div className={Style.startDelen_box} ref={startDelenBoxRef}>
        <h3>Ik ben een: </h3>
        <ConOrProsument setClientType={setClientType}/>
        <Form formData={formData} setFormData={setFormData} clientType={clientType}/>
        <ProviderOptions
          updateFormData={updateProviderAndContract}
         />
        <div className={Style.errorBox}>
          {error && (
            <p className={Style.errorMessage}>{formattedError}</p>
          )}
        </div>
        <div className={Style.Form_box_btn}>
          <Button
            btnName="Volgende stap"
            handleClick={(e) => userSignup(e, formData)}
            classStyle={Style.button}
          />
        </div>
        
      </div>
      
      
    </div>
  )
}

export default startDelen