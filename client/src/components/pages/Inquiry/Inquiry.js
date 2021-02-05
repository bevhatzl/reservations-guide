import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import API from "../../../utils/api";
import DatePicker from 'react-date-picker';
import Footer from '../../../components/Footer/Footer';
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
    }

    // When the form is submitted, use the API.getBlacklistResults method to get the results
    handleFormSubmit = (event) => {    
        event.preventDefault();
        const { guest_name, guest_DOB, id_search } = this.state;
        this.setState( {search_match: []} )
        const missingDataWarning = document.getElementById('missing-data');
        if ((!guest_name && !guest_DOB) && (!id_search)) {
            missingDataWarning.style.display = "block";
        } else {
            missingDataWarning.style.display = "none";
            if (!guest_name && !guest_DOB) {   // Do an ID only search
                API.getBlacklistResults({id_search})
                    .then(res => this.setState({search_match: res.data}, () => console.log(this.state.search_match)))
                    .then(() => this.setState({
                        id_search: ""
                }))
                    .catch(err => console.log(err));  
            } else if (!id_search) {  // Do a name and DOB search only
                API.getBlacklistByNameAndDOB({guest_name, guest_DOB})
                    .then(res => this.setState({search_match: res.data}))
                    .then(() => this.setState({
                        guest_name: "",
                        guest_DOB: ""
                }))
                    .catch(err => console.log(err));
            } else {   // Do a name, dob and ID search
                API.getResultsAll({guest_name, guest_DOB, id_search})
                    .then(res => this.setState({search_match: res.data}))
                    .then(() => this.setState({
                        id_search: "",
                        guest_name: "",
                        guest_DOB: ""
                }))
                    .catch(err => console.log(err));  
            }
            if (this.state.search_match.length === 0) {
                const noResultsBlock = document.getElementById('no-results');
                noResultsBlock.style.display = "block";
            }
        }
    };

    render() {
        const { guest_name, guest_DOB, id_search } = this.state;
        return (
            <div className="container-fluid h-100 p-0 m-0" id="main-content">
                <Sidebar />
                <div className="content">                    
                    <form onSubmit={this.handleFormSubmit}>
                        <fieldset>
                            <div id="heading-main-inquiry">
                                <legend>Search by Guest name and date of birth OR by ID number: </legend>
                            </div>
                            <div id="search-form-inputs">
                            <label id="guest-name-lebel"> Guest Name:
                                <input
                                    onChange={this.handleInputChange}
                                    name="guest_name"
                                    value={guest_name}
                                />
                            </label>
                            <label id="dob-label">Date of Birth:<span className="dob-field"></span>
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
                            <br />
                        
                            <label id="id-label">ID number:
                                <input
                                    onChange={this.handleInputChange}
                                    name="id_search"
                                    value={id_search}
                                />
                            </label>
                            </div>
                            <br />                     
                        </fieldset>             
          
                        <button type="submit" id="search-btn"
                            > Search 
                        </button>
                        <div id="missing-data">Please enter guest name and date of birth OR ID number.</div>
                    </form>
                                  
                    {(this.state.search_match.length) > 0 ?  
                    <div className="table-wrapper" tabIndex="0">
                        <table>
                            <thead>
                                <tr>
                                    <th>Date Entered</th>
                                    <th>Entered By</th>
                                    <th>Guest Name</th>
                                    <th>Date of birth</th>
                                    <th>Id Number</th>
                                    <th>Reason</th>
                                    <th>Address</th>
                                    <th>City</th>
                                    <th>Country</th>
                                    <th>Phone</th>
                                    <th>Payment method</th>
                                    <th>Cardholder Name</th>
                                    <th>Date of birth</th>
                                    <th>ID number</th>
                                    <th>Description &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; &emsp; </th>
                                </tr>
                            </thead>
                            <tbody>
                            {this.state.search_match.map(item => (                                         
                                <tr key={item._id} >
                                    <td>{new Date(item.entry_date).toLocaleDateString("en-AU")}</td>
                                    <td>{item.hotel_name}</td>
                                    <td>{item.guest_name}</td>
                                    <td>{new Date(item.guest_DOB).toLocaleDateString("en-AU")}</td>
                                    <td>{item.guest_ID_num} {item.guest_ID_type}</td>
                                    <td>{item.reason}</td>
                                    <td>{item.guest_st_address}</td>
                                    <td>{item.guest_city}</td>
                                    <td>{item.guest_country}</td>
                                    <td>{item.guest_phone}</td>
                                    <td>{item.pay_method}</td>
                                    <td>{item.ch_name}</td>
                                    <td>{new Date(item.ch_DOB).toLocaleDateString("en-AU")}</td>
                                    <td>{item.ch_ID_num} {item.ch_ID_type}</td>
                                    <td>{item.description}</td>                                
                                </tr>                                            
                            ))}
                            </tbody>
                        </table> 
                        </div>
                    : <div id="no-results" className="alert alert-warning">No results found</div>}

                    </div>
               
                <div id="footer-cont">
                    <Footer />
                </div>
            </div>
        );
    } 

}

export default Inquiry;