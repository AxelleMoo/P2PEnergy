
import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlineElectricMeter } from "react-icons/md";
import { CiBank } from "react-icons/ci";


//INTERNAL IMPORT
import Style from "./Form.module.css";

const Form = ({formData, setFormData, clientType}) => {
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
            {clientType == 'consument' &&
              <div>
                <div className={Style.Form_box_input}>
                  <label htmlFor="btw">BTW-nummer</label>
                  
                  <input 
                    type="text"
                    name="btw"
                    value={formData.btw}
                    onChange={handleChange} 
                    className={Style.Form_box_input_userName}/>
                </div>

                <div className={Style.Form_box_input}>
                  <label htmlFor="street">Straat</label>
                  <input 
                    type="text"
                    name="street"
                    value={formData.street}
                    onChange={handleChange} 
                    className={Style.Form_box_input_userName}/>
                </div>

                <div className={Style.Form_box_input_triple}>
                  <div className={Style.Form_box_input}>
                  <label htmlFor="housenumber">Huisnummer</label>
                  <input
                      type="text"
                      name="housenumber"
                      value={formData.housenumber}
                      onChange={handleChange}
                      className={Style.Form_box_input_userName}
                      />
                  </div>
                  <div className={Style.Form_box_input}>
                  <label htmlFor="addition">Toevoeging</label>
                      <input
                      type="text"
                      name="addition"
                      value={formData.addition}
                      onChange={handleChange}
                      className={Style.Form_box_input_userName}
                      />
                  </div>
                  <div className={Style.Form_box_input}>
                  <label htmlFor="bus">Bus</label>
                      <input
                      type="text"
                      name="bus"
                      value={formData.bus}
                      onChange={handleChange}
                      className={Style.Form_box_input_userName}
                      />
                  </div>
                </div>

                <div className={Style.Form_box_input_double}>
                  <div className={Style.Form_box_input}>
                  <label htmlFor="place">Plaats</label>
                  <input
                      type="text"
                      name="place"
                      value={formData.place}
                      onChange={handleChange}
                      className={Style.Form_box_input_userName}
                      />
                  </div>
                  <div className={Style.Form_box_input}>
                  <label htmlFor="zip">Postcode</label>
                      <input
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                      className={Style.Form_box_input_userName}
                      />
                  </div>
                  
                </div>

              </div>
              

              // <div className={Style.Form_box_input}>
              //   <label htmlFor="bankAccount">Bankrekeningnummer</label>
              //   <div className={Style.Form_box_input_box}>
              //   <div className={Style.Form_box_input_box_icon}>
              //       <CiBank />
              //   </div>
              //   <input 
              //     type="text" 
              //     placeholder='BE12 1234 1234 1234'
              //     name="bankAccount"
              //     value={formData.bankAccount}
              //     onChange={handleChange}/>
              //   </div>
              // </div>
            }
            
            <div className={Style.Form_box_input}>
                <label htmlFor="ean">EAN-code</label>
                <span className={Style.Form_box_input_info_icon}>i</span>
                <div className={Style.Form_box_input_info_tooltip}>
                    De EAN-code is de code van je elektriciteitsmeter. De code staat op jouw meter of jouw energiefactuur en begint met EAN541.
                </div>
                <div className={Style.Form_box_input_box}>
                  <div className={Style.Form_box_input_box_icon}>
                    <MdOutlineElectricMeter />
                  </div>
                <input 
                  type="text" 
                  placeholder='EAN541'
                  name="eanCode"
                  value={formData.eanCode}
                  onChange={handleChange}/>
                </div>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
