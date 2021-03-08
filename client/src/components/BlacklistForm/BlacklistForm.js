import React, { Component } from "react";
import API from "../../utils/api";
import jwt_decode from 'jwt-decode';
import "./style.css";
import DatePicker from 'react-date-picker';

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
  }

  handleCHDOB = (DOBValue) => {
    this.setState({ch_DOB: DOBValue});
  }

  // When the form is submitted, use the API.saveBlacklist method to save the blacklist data
  handleFormSubmit = (event) => {    
    event.preventDefault();
    const { hotel_name, guest_name, guest_DOB, guest_st_address, guest_city, guest_country, guest_phone,  guest_ID_num, guest_ID_type, pay_method, ch_name, ch_DOB, ch_ID_num, ch_ID_type, reason, description } = this.state;
    const missingDataWarning = document.getElementById('missing-data');
    if (!guest_name || !guest_DOB || !guest_ID_num || !guest_ID_type) {
      missingDataWarning.innerHTML = "Please enter the required fields"
      missingDataWarning.style.display = "block";
    } else {
      missingDataWarning.innerHTML = "Blacklisted entry has been added"
      missingDataWarning.style.display = "block";
    }
  
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
        <h1>Add a new blacklisted guest</h1>
        <div id="add-form-cont">
          <form id="add-form" onSubmit={this.handleFormSubmit}>
            <fieldset className="fieldset-add-form">
              <legend className="legend-form">Guest Details: </legend>
              <div className="new-list-input-item">
                <label> Guest Name <span className="required-input">(required):</span>
                  <input 
                    onChange={this.handleInputChange}
                    name="guest_name"
                    value={guest_name}
                  />
                </label>
              </div>
              <br />
              <div className="new-list-input-item">
                <label id="dob-label-input">Date of Birth <span className="required-input dob-field">(required):</span>
                <DatePicker
                  calendarAriaLabel="Toggle calendar"
                  clearAriaLabel="Clear value"
                  dayAriaLabel="Day"
                  monthAriaLabel="Month"
                  nativeInputAriaLabel="Date"
                  onChange={this.handleDOB}
                  value={guest_DOB}
                  yearAriaLabel="Year" 
                  className="dob-datepicker"                           
                />
                </label>
              </div>
              <br />
              <div className="new-list-input-item">
                <label>ID Number <span className="required-input">(required):</span>
                  <input
                    onChange={this.handleInputChange}
                    name="guest_ID_num"
                    value={guest_ID_num}
                  />
                </label>
              </div>
              <div className="new-list-input-item">
                <br />
              <label className="id-type-input">ID Type <span className="required-input">(required): </span>
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
            </div>
            <br />
            <div className="new-list-input-item">
              <label>Street Address:
                <input
                  onChange={this.handleInputChange}
                  name="guest_st_address"
                  value={guest_st_address}
                />
              </label>
            </div>
            <br />
            <div className="new-list-input-item">
              <label>City:
                <input
                  onChange={this.handleInputChange}
                  name="guest_city"
                  value={guest_city}
                />
              </label>
            </div>
            <br />
            <div className="new-list-input-item">
              <label>Country:
                <input
                  onChange={this.handleInputChange}
                  name="guest_country"
                  value={guest_country}
                />
              </label>
            </div>
            <br />
            <div className="new-list-input-item">
              <label>Phone Number:
                <input
                  onChange={this.handleInputChange}
                  name="guest_phone"
                  value={guest_phone}
                />
              </label>
            </div>
            <br/>
            <div className="new-list-input-item">
              <label id="payment-type-label">Payment Method: 
                <select
                  onChange={this.handlePaymentInputChange}
                  name="pay_method"
                  value={pay_method}
                  placeholder="Select"
                >
                  <option value="" defaultValue disabled hidden>Select one</option>
                  <option value="Credit Card">Credit Card</option>
                  <option value="Cash">Cash</option>
                  <option value="Other">Other</option>
                </select>
              </label>
            </div>
          </fieldset>

          <fieldset id="ch-details" className="fieldset-add-form">
            <legend className="legend-form">Credit Cardholder Details</legend>
            <div className="new-list-input-item">
            <label>Cardholder Name:
              <input
                onChange={this.handleInputChange}
                name="ch_name"
                value={ch_name}
              />
            </label>
            </div>
            <br/>
            <div className="new-list-input-item">
            <label id="ch-dob-label">Date of Birth:<span className="dob-field"></span>
              <DatePicker
                calendarAriaLabel="Toggle calendar"
                clearAriaLabel="Clear value"
                dayAriaLabel="Day"
                monthAriaLabel="Month"
                nativeInputAriaLabel="Date"
                onChange={this.handleCHDOB}
                value={ch_DOB}
                yearAriaLabel="Year"    
                className="dob-datepicker"                        
              />
            </label>
            </div>
            <br />
            <div className="new-list-input-item">
            <label>ID Number:
              <input
                onChange={this.handleInputChange}
                name="ch_ID_num"
                value={ch_ID_num}
              />
            </label>
            </div>
            <br />
            <div className="new-list-input-item">
            <label className="id-type-input">ID Type:
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
            <br />
            </div>
          </fieldset>

          <fieldset className="fieldset-add-form">
            <legend className="legend-form">Details of Blacklisting</legend>
            <div className="new-list-input-item">
            <label id="reason-input-label">Reason for blacklisting:
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
            </div>
            <br />
            <div className="new-list-input-item">
            <label>Description:
              <textarea rows="4" cols="40"
                onChange={this.handleInputChange}
                name="description"
                placeholder="Provide a detailed description of the blacklisting reason including a physical description of the guest, check-in and check-out dates and any email address provided by the guest or the cardholder."
                value={description}
                className="textbox-description"
              >
              </textarea>
            </label>
            </div>
          </fieldset>             
          <div className="new-list-input-item">
          <button type="submit" id="form-sub-btn"
          >  Submit Blacklisting </button>
          <div className="alert alert-warning" id="missing-data">Please enter all of the required fields</div>
          <br />
          </div>
        </form>
        <br />
      </div>
  </div>
    );
  }

}

export default BlacklistForm;
