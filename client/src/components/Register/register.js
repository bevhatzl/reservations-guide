import React, { useState, Component } from "react";
import { registerUser, getUsers } from '../UserFunctions/userFunctions';
import "./style.css"

const Register = () => {
    const [email, setEmail] = useState('');
    const [hotelName, setHotelName] = useState('');
  
    const submitRequest = async (e) => {
      e.preventDefault();
      console.log({ email, hotelName });
      const response = await fetch("/access", { 
        method: 'POST', 
        headers: { 
            'Content-type': 'application/json'
        }, 
        body: JSON.stringify({email, hotelName}) 
      }); 
        const resData = await response.json(); 
        if (resData.status === 'success'){
          alert("Message Sent."); 
          setEmail('');
          setHotelName('');
        }else if(resData.status === 'fail'){
          alert("Message failed to send.")
        }
    };

        return (
            <div className='container' id="container">
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <p id="contact-text">Complete your hotel details here to request a login before you can start using the app. Your request will be reviewed and you will be contacted with your password.</p>

                        {/* Currently working on including Nodemailer */}
                         <form action="send"
                            method="POST"
                            encType="multipart/form-data"
                            name="EmailForm"
                            onSubmit={submitRequest}
                            id="contact-me-form">
                            <label className="contact-form-input">
                                Hotel Name:
                                <input type="text" name="hotel-name" required 
                                onChange={e => setHotelName(e.target.value)}
                                value={hotelName} />
                            </label>
                            <label className="contact-form-input">
                                Email:
                                <input type="text" name="email" required 
                                  onChange={e => setEmail(e.target.value)} value={email}  />
                            </label>
                            <input type="submit" value="Submit" id='sub-reg-btn' />
                        </form>        

                       
                    </div>
                </div>
            </div>
        )
}

export default Register;

