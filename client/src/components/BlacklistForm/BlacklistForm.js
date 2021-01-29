import React, { Component } from "react";
import API from "../../utils/api";
import jwt_decode from 'jwt-decode';
import "./style.css";

class BlacklistForm extends Component {
    constructor() {
        super()
        this.state = {
            hotel_name: "",
            guest_name: "",
            guest_DOB: "",
            guest_st_address: "",
            guest_city: "",
            guest_country: "",
            guest_phone: "",
            guest_ID_num: "",
            guest_ID_type: "",
            pay_method: "",
            ch_name: "",
            ch_DOB: "",
            ch_ID_num: "",
            ch_ID_type: "",
            reason: "",
            description: ""
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            hotel_name: decoded.hotel_name
        })
    }


    // Handles updating component state when the user types into the input field
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    // Displays more credit card questions if payment by credit card. Switch back if other method.
    handlePaymentInputChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
      const ccBlock = document.getElementById('ch-details');
       if (event.target.value === "Credit Card") {
        // $("#ch-details").css("display", "block");
        ccBlock.style.display = "block";
      // console.log(event.target.value);
       } else {
        ccBlock.style.display = "none";
       }
      }


  // When the form is submitted, use the API.saveBlacklist method to save the blacklist data
  handleFormSubmit = (event) => {    
    event.preventDefault();

    const { hotel_name, guest_name, guest_DOB, guest_st_address, guest_city, guest_country, guest_phone,  guest_ID_num, guest_ID_type, pay_method, ch_name, ch_DOB, ch_ID_num, ch_ID_type, reason, description } = this.state;

    console.log(hotel_name, guest_name, guest_DOB, guest_st_address, guest_city, guest_country, guest_phone,  guest_ID_num, guest_ID_type, pay_method, ch_name, ch_DOB, ch_ID_num, ch_ID_type, reason, description);


      API.saveBlacklist({hotel_name, guest_name, guest_DOB, guest_st_address, guest_city, guest_country, guest_phone,  guest_ID_num, guest_ID_type, pay_method, ch_name, ch_DOB, ch_ID_num, ch_ID_type, reason, description})
        .then(() => this.setState({
            guest_name: "",
            guest_DOB: "",
            guest_st_address: "",
            guest_city: "",
            guest_country: "",
            guest_phone: "",
            guest_ID_num: "",
            guest_ID_type: "",
            pay_method: "",
            ch_name: "",
            ch_DOB: "",
            ch_ID_num: "",
            ch_ID_type: "",
            reason: "",
            description: ""
        }))
             .catch(err => console.log(err));
    
  };

  render() {
    const { guest_name, guest_DOB, guest_st_address, guest_city, guest_country, guest_phone,  guest_ID_num, guest_ID_type, pay_method, ch_name, ch_DOB, ch_ID_num, ch_ID_type, reason, description } = this.state;
    return (
      <div>
       
            <form onSubmit={this.handleFormSubmit}>
              <fieldset>
                <legend>Guest Details: </legend>
              <label> Guest Name:
              <input
              onChange={this.handleInputChange}
                name="guest_name"
                placeholder="required"
                value={guest_name}
              />
              </label>
              <label>Date of Birth:
              <input
              onChange={this.handleInputChange}
                name="guest_DOB"
                placeholder="required"
                value={guest_DOB}
              />
              </label>
              <label>Guest Street Address:
              <input
              onChange={this.handleInputChange}
                name="guest_st_address"
                // placeholder="Guest Street Address"
                value={guest_st_address}
              />
              </label>
              <label>City:
              <input
              onChange={this.handleInputChange}
                name="guest_city"
                // placeholder="Guest City"
                value={guest_city}
              />
              </label>
              <label>Country:
              <input
              onChange={this.handleInputChange}
                name="guest_country"
                // placeholder="Guest Country"
                value={guest_country}
              />
              </label>
              <label>Phone Number:
              <input
              onChange={this.handleInputChange}
                name="guest_phone"
                // placeholder="Guest Phone"
                value={guest_phone}
              />
              </label>
              <label>ID Number:
              <input
              onChange={this.handleInputChange}
                name="guest_ID_num"
                placeholder="required"
                value={guest_ID_num}
              />
              </label>
              <label>ID Type:
              <input
              onChange={this.handleInputChange}
                name="guest_ID_type"
                // placeholder="Guest ID type"
                value={guest_ID_type}
              />
              </label>
              <label>Payment Method:
              <select
              onChange={this.handlePaymentInputChange}
                name="pay_method"
                value={pay_method}
                placeholder="Select">
                <option value="" defaultValue disabled hidden>Select one</option>
               <option value="Credit Card">Credit Card</option>
               <option value="Cash">Cash</option>
              </select>
              </label>

              </fieldset>

              <fieldset id="ch-details">
                <legend>Credit Cardholder Details</legend>
                <label>Cardholder Name:
              <input
              onChange={this.handleInputChange}
                name="ch_name"
                placeholder="Cardholder name"
                value={ch_name}
              />
              </label>
              <label>Date of Birth:
              <input
              onChange={this.handleInputChange}
                name="ch_DOB"
                // placeholder="Cardholder date of birth"
                value={ch_DOB}
              />
              </label>
              <label>ID Number:
              <input
              onChange={this.handleInputChange}
                name="ch_ID_num"
                // placeholder="Cardholder ID number"
                value={ch_ID_num}
              />
              </label>
              <label>ID Type:
              <input
              onChange={this.handleInputChange}
                name="ch_ID_type"
                placeholder="Cardholder ID type"
                value={ch_ID_type}
              />
              </label>
              </fieldset>

              <fieldset>
                <legend>Details of Blacklisting</legend>
                <label>Reason for blacklisting:
              <input
              onChange={this.handleInputChange}
                name="reason"
                // placeholder="Reason for blacklisting"
                value={reason}
              />
              </label>
              <label>Description:
              <input
              onChange={this.handleInputChange}
                name="description"
                placeholder="Provide a description of the blacklisting reason and events including a physical description of the guest, check-in and check-out dates and any email address provided by the guest or the cardholder."
                value={description}
              />
              </label>
              </fieldset>

              <button type="submit">  Submit Blacklisting </button>
      
            </form>
         
             

      </div>
    );
  }

}

export default BlacklistForm;
