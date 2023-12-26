import React, {useState} from 'react'
import Form from './Form/Form';

import { ConOrProsument, Button } from '../components/componentsindex'
import axios from 'axios'

import Style from './StartDelen.module.css'

const startDelen = () => {
  const [clientType, setClientType] = useState(null);

  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeatPassword: '',
    bankAccount: '',
    role: 'prosument'
  });

  const [loading, setLoading] = useState(false);
  const [succesMessage, setSuccesMessage] = useState("");

  // const refreshpage = () => {
  //   window.location.reload();
  // }

  const userSignup = async (e, formData) => {
    console.log(clientType)
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
          "role": clientType
        }
      })

      if (res.data.status === "success"){
        setSuccesMessage("Je hebt succesvol een account aangemaakt");
        setLoading(false);
        window.setTimeout(() => {
          location.reload(true);
        }, 1500);
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className={Style.startDelen}>
      <div className={Style.startDelen_box}>
        <h3>Ik ben een: </h3>
        <ConOrProsument setClientType={setClientType}/>
        <Form formData={formData} setFormData={setFormData}/>
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