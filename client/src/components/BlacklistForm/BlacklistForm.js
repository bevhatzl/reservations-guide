import React, { Component } from "react";
import API from "../../utils/api";
import jwt_decode from 'jwt-decode';


class BlacklistForm extends Component {
    constructor() {
        super()
        this.state = {
            hotel_name: '',
            guest_name: "",
            ID_number: ""
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


  // When the form is submitted, use the API.saveBlacklist method to save the blacklist data
  handleFormSubmit = (event) => {
    
    event.preventDefault();

    const { hotel_name, guest_name, ID_number } = this.state;
    console.log(hotel_name, guest_name, ID_number);
    
      API.saveBlacklist({hotel_name, guest_name, ID_number})
        .then(() => this.setState({
          guest_name: "",
          ID_number: ""
        }))
             .catch(err => console.log(err));
    
  };

  render() {
    const { hotel_name, guest_name, ID_number } = this.state;
    return (
      <div>
       
            <form onSubmit={this.handleFormSubmit}>
              <input
              onChange={this.handleInputChange}
                name="guest_name"
                placeholder="Guest Name (required)"
                value={guest_name}
              />
              <input
              onChange={this.handleInputChange}
                name="ID_number"
                placeholder="ID number (required)"
                value={ID_number}
              />
              
              <button type="submit">  Submit Blacklisting </button>
      
            </form>
         
             

      </div>
    );
  }

}

export default BlacklistForm;
