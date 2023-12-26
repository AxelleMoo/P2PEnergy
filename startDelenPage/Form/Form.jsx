
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { CiBank } from "react-icons/ci";


//INTERNAL IMPORT
import Style from "./Form.module.css";

const Form = ({formData, setFormData}) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };
  return (
    <div className={Style.Form}>
      <div className={Style.Form_box}>
        <form>
            <div className={Style.Form_box_input_double}>
                <div className={Style.Form_box_input}>
                <label htmlFor="firstname">Voornaam</label>
                <input
                    type="text"
                    className={Style.Form_box_input_userName}
                    name="firstname"
                    value={formData.firstname}
                    onChange={handleChange}
                    />
                </div>
                <div className={Style.Form_box_input}>
                <label htmlFor="lastname">Achternaam</label>
                    <input
                    type="text"
                    className={Style.Form_box_input_userName}
                    name="lastname"
                    value={formData.lastname}
                    onChange={handleChange}
                    />
                </div>
                
            </div>

            <div className={Style.Form_box_input}>
                <label htmlFor="email">Email</label>
                <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                    <HiOutlineMail />
                </div>
                <input 
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange} />
                </div>
            </div>

            <div className={Style.Form_box_input_double}>
                <div className={Style.Form_box_input}>
                <label htmlFor="password">Wachtwoord</label>
                <input
                    type="text"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={Style.Form_box_input_userName}
                    />
                </div>
                <div className={Style.Form_box_input}>
                <label htmlFor="repeatPassword">Herhaal wachtwoord</label>
                    <input
                    type="text"
                    name="repeatPassword"
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    className={Style.Form_box_input_userName}
                    />
                </div>
                
            </div>

            <div className={Style.Form_box_input}>
                <label htmlFor="bankAccount">Bankrekeningnummer</label>
                <div className={Style.Form_box_input_box}>
                <div className={Style.Form_box_input_box_icon}>
                    <CiBank />
                </div>
                <input 
                  type="text" 
                  placeholder='BE12 1234 1234 1234'
                  name="bankAccount"
                  value={formData.bankAccount}
                  onChange={handleChange}/>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
