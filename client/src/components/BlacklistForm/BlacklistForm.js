import React, { Component } from "react";
import API from "../../utils/api";
import jwt_decode from 'jwt-decode';
import "./style.css";
import DatePicker from 'react-date-picker';
import Footer from '../Footer/Footer';

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
      ccBlock.style.display = "block";
    } else {
      ccBlock.style.display = "none";
    }
  }

  handleDOB = (DOBValue) => {
    this.setState({guest_DOB: DOBValue});
    console.log(this.state.guest_DOB)
  }

  handleCHDOB = (DOBValue) => {
    this.setState({ch_DOB: DOBValue});
    console.log(this.state.ch_DOB)
  }

  // When the form is submitted, use the API.saveBlacklist method to save the blacklist data
  handleFormSubmit = (event) => {    
    event.preventDefault();
    const { hotel_name, guest_name, guest_DOB, guest_st_address, guest_city, guest_country, guest_phone,  guest_ID_num, guest_ID_type, pay_method, ch_name, ch_DOB, ch_ID_num, ch_ID_type, reason, description } = this.state;
    const missingDataWarning = document.getElementById('missing-data');
    if (!guest_name || !guest_DOB || !guest_ID_num || !guest_ID_type) {
      missingDataWarning.style.display = "block";
    } else {
      missingDataWarning.style.display = "none";
    }
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
      <div id="main-add-form-cont">
      <div id="add-form-cont">
        <form id="add-form" onSubmit={this.handleFormSubmit}>
          <fieldset>
            <legend>Guest Details: </legend>
            <label> Guest Name (required):
              <input
                onChange={this.handleInputChange}
                name="guest_name"
                value={guest_name}
              />
            </label>
            <label>Date of Birth (required):
              <DatePicker
                calendarAriaLabel="Toggle calendar"
                clearAriaLabel="Clear value"
                dayAriaLabel="Day"
                monthAriaLabel="Month"
                nativeInputAriaLabel="Date"
                onChange={this.handleDOB}
                value={guest_DOB}
                yearAriaLabel="Year"                            
              />
            </label>
            <br />
            <label>Guest Street Address:
              <input
                onChange={this.handleInputChange}
                name="guest_st_address"
                value={guest_st_address}
              />
            </label>
            <br />
            <label>City:
              <input
              onChange={this.handleInputChange}
              name="guest_city"
              value={guest_city}
              />
            </label>
            <br />
            <label>Country:
              <input
                onChange={this.handleInputChange}
                name="guest_country"
                value={guest_country}
              />
            </label>
            <label>Phone Number:
              <input
                onChange={this.handleInputChange}
                name="guest_phone"
                value={guest_phone}
              />
            </label>
            <label>ID Number (required):
              <input
                onChange={this.handleInputChange}
                name="guest_ID_num"
                value={guest_ID_num}
              />
            </label>
            <label>ID Type (required):
              <select
                onChange={this.handleInputChange}
                name="guest_ID_type"
                value={guest_ID_type}
                placeholder="Select"
              >
                <option value="" defaultValue disabled hidden>Select one</option>
                <option value="Driver License">Driver License</option>
                <option value="Passport">Passport</option>
                <option value="Proof of Age">Proof of Age</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <label>Payment Method:
              <select
                onChange={this.handlePaymentInputChange}
                name="pay_method"
                value={pay_method}
                placeholder="Select"
              >
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
                value={ch_name}
              />
            </label>
            <label>Date of Birth:
              <DatePicker
                calendarAriaLabel="Toggle calendar"
                clearAriaLabel="Clear value"
                dayAriaLabel="Day"
                monthAriaLabel="Month"
                nativeInputAriaLabel="Date"
                onChange={this.handleCHDOB}
                value={ch_DOB}
                yearAriaLabel="Year"                            
              />
            </label>
            <label>ID Number:
              <input
                onChange={this.handleInputChange}
                name="ch_ID_num"
                value={ch_ID_num}
              />
            </label>
            <label>ID Type:
              <select
                onChange={this.handleInputChange}
                name="ch_ID_type"
                value={ch_ID_type}
                placeholder="Select"
              >
                <option value="" defaultValue disabled hidden>Select one</option>
                <option value="Driver License">Driver License</option>
                <option value="Passport">Passport</option>
                <option value="Proof of Age">Proof of Age</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </fieldset>

          <fieldset>
            <legend>Details of Blacklisting</legend>
            <label>Reason for blacklisting:
              <select
                onChange={this.handleInputChange}
                name="reason"
                value={reason}
                placeholder="Select"
              >
                <option value="" defaultValue disabled hidden>Select one</option>
                <option value="Theft Damage">Theft/Damage</option>
                <option value="Noisy">Noise Complaint</option>
                <option value="Dispute">Dispute/Chargeback</option>
                <option value="Fraud">Fraud</option>
                <option value="Other">Other</option>
              </select>
            </label>
            <br />
            <label>Description:
              <textarea rows="4" cols="40"
                onChange={this.handleInputChange}
                name="description"
                placeholder="Provide a detailed description of the blacklisting reason including a physical description of the guest, check-in and check-out dates and any email address provided by the guest or the cardholder."
                value={description}
              >
              </textarea>
            </label>
          </fieldset>             
          
          <button type="submit"
            disabled={!(this.state.guest_name) || !(this.state.guest_DOB) || !(this.state.guest_ID_num) || !(this.state.guest_ID_type)}
          >  Submit Blacklisting </button>
          <div id="missing-data">Please enter all of the required fields</div>
        </form>
      
      </div>
      

  </div>
    );
  }

}

export default BlacklistForm;
