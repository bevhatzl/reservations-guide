import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import API from "../../../utils/api";
import DatePicker from 'react-date-picker';
import "./style.css"

class Inquiry extends Component {
    constructor() {
      super()
        this.state = {
          guest_name: "",
          guest_DOB: "",
          id_search: "",
          search_match: []
        }
    }

    // Handles updating component state when the user types into the input field
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value }); 
    };

    handleDOB = (DOBValue) => {
        this.setState({guest_DOB: DOBValue});
        console.log(this.state.guest_DOB)
    }

    // When the form is submitted, use the API.getBlacklistResults method to get the results
    handleFormSubmit = (event) => {    
        event.preventDefault();
        const { guest_name, guest_DOB, id_search } = this.state;
        this.setState({search_match: [] })
        const missingDataWarning = document.getElementById('missing-data');
        if ((!guest_name && !guest_DOB) && (!id_search)) {
            missingDataWarning.style.display = "block";
        } else {
            missingDataWarning.style.display = "none";
            console.log(guest_name, guest_DOB, id_search);

            API.getBlacklistResults({guest_name, guest_DOB, id_search})
                .then(res => this.setState({search_match: res.data}))
                .then(console.log(this.search_match))
                .then(() => this.setState({
                    guest_name: "",
                    guest_DOB: "",
                    id_search: "",
                }))
                .catch(err => console.log(err));    
        }
    
    };

    render() {
        const { guest_name, guest_DOB, id_search } = this.state;
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                    <div className="content">                    
                        <form onSubmit={this.handleFormSubmit}>
                            <fieldset>
                                <legend>Search by Guest name and date of birth: </legend>
                                <label> Guest Name:
                                    <input
                                        onChange={this.handleInputChange}
                                        name="guest_name"
                                        value={guest_name}
                                    />
                                </label>
                                <label>Date of Birth:
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
                                <label>OR Search by ID number:
                                    <input
                                        onChange={this.handleInputChange}
                                        name="id_search"
                                        value={id_search}
                                    />
                                </label>
                                <br />                     
                            </fieldset>             
          
                            <button type="submit"
                            // disabled={!(this.state.guest_name) || !(this.state.guest_DOB) || !(this.state.guest_ID_num) || !(this.state.guest_ID_type)}
                            > Search 
                            </button>
                            <div id="missing-data">Please enter guest name and date of birth OR ID number.</div>
                        </form>
                    </div>
              
                {/* <div className="dashboardCard">
                        {this.search_match.map(item => (            
                            <div className="dashboardCard card cardBackground" key={item._id}>
                                <div className="card-body">
                                    <h4>Added By: {item.hotel_name}</h4><span>At: {item.entry_date}</span>
                                    <br />
                                    <p >{item.guest_name}</p>
                                    <p >{item.guest_DOB}</p>
                                    <p >{item.guest_ID_num}</p>
                                </div>
                            </div>           
                        ))}
                    </div> */}
                
            </div>
        );
    } 

}


export default Inquiry;