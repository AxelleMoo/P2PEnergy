import React, {useState, useRef} from 'react'
import Form from '../Form/Form';

import { ConOrProsument, Button, ProviderOptions } from '../../components/componentsindex'
import axios from 'axios'

import Style from './StartDelen.module.css'

const Step1 = ({onNextStep}) => {
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
    contract: '',
    btw: '',
    street: '',
    housnumber: '',
    addidtion: '',
    bus: '',
    place: '',
    zip: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')
  const startDelenBoxRef = useRef(null);
  

  // const refreshpage = () => {
  //   window.location.reload();
  // }

  const userSignup = async (e, formData) => {
    console.log(formData)
    try{
      setLoading(true);
      
      let dataToSend = {
        "firstname": formData.firstname,
        "lastname": formData.lastname,
        "email": formData.email,
        "password": formData.password,
        "passwordConfirm": formData.repeatPassword,
        "role": clientType
      };
    
      // if (formData.bankAccount) {
      //   dataToSend.bankAccount = formData.bankAccount;
      // }
      if (formData.eanCode) {
        dataToSend.eanCode = formData.eanCode;
      }
      if (formData.provider) {
        dataToSend.provider = formData.provider;
      }
      if (formData.contract) {
        dataToSend.contract = formData.contract;
      }

      if (formData.street) {
        dataToSend.street = formData.street;
      }
      if (formData.housnumber) {
        dataToSend.housnumber = formData.housnumber;
      }
      if (formData.addidtion) {
        dataToSend.addidtion = formData.addidtion;
      }
      if (formData.bus) {
        dataToSend.bus = formData.bus;
      }
      if (formData.place) {
        dataToSend.place = formData.place;
      }
      if (formData.zip) {
        dataToSend.zip = formData.zip;
      }
      if (formData.btw) {
        dataToSend.btw = formData.btw;
      }
      
      const res = await axios({
        method: "POST",
        url: "/api/v1/users/signup",
        withCredentials: true,
        data: dataToSend
      })

      if (res.data.status === "success"){
        // setAccountCreated(true);
        if (startDelenBoxRef.current) {
          startDelenBoxRef.current.style.display = 'none';
        }
        setLoading(false);
        // window.setTimeout(() => {
        //   location.reload(true);
        // }, 1500);
      }
    }catch(error){

      console.log(error)
      if (error.response){
        const error_message = error.response.data.message

        console.log(error_message)

        let cleanedError = error_message.replace('User validation failed:', '');
        if (cleanedError.includes('E11000 duplicate key error collection: P2PEnergy.users index: email_1')) {
          cleanedError = 'Dit emailadres is al in gebruik';
        }
        cleanedError = cleanedError.split(', ').map((err, index) => (
          <React.Fragment key={index}>
            {err}
            <br />
          </React.Fragment>
        ));
        setError(cleanedError)
      }
      
      else setError("Something went wrong");
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
            <p className={Style.errorMessage}>{error}</p>
          )}
        </div>
        <div className={Style.Form_box_btn}>
          <Button
            btnName="Volgende stap"
            handleClick={(e) => {
              userSignup(e, formData);
              if (!error)onNextStep();
              }
            }
            classStyle={Style.button}
          />
        </div>
        
      </div>
      
      
    </div>
  )
}

export default Step1