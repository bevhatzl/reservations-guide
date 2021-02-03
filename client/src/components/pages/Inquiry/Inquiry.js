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
        console.log(this.state.search_match)
        const { guest_name, guest_DOB, id_search } = this.state;
        this.setState( {search_match: []} )
        // const search_match = this.state.search_match;
        // this.setState({search_match: [] })
        const missingDataWarning = document.getElementById('missing-data');
        if ((!guest_name && !guest_DOB) && (!id_search)) {
            missingDataWarning.style.display = "block";
        } else {
            missingDataWarning.style.display = "none";
            console.log(guest_name, guest_DOB, id_search);
            console.log(this.state.search_match)
            if (!guest_name && !guest_DOB) {   // Do an ID only search
                API.getBlacklistResults({id_search})
                    .then(res => this.setState({search_match: res.data}, () => console.log(this.state.search_match)))
                    .then(() => this.setState({
                        id_search: ""
                }))
                    .catch(err => console.log(err));  
            } else if (!id_search) {  // Do a name and DOB search only
                console.log("Do a name and DOB search")
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
        console.log(this.state.search_match)
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
                            <label> Guest Name:
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
                        
                            <label>Search by ID number:
                                <input
                                    onChange={this.handleInputChange}
                                    name="id_search"
                                    value={id_search}
                                />
                            </label>
                            <br />                     
                        </fieldset>             
          
                        <button type="submit" id="search-btn"
                        // disabled={!(this.state.guest_name) || !(this.state.guest_DOB) || !(this.state.guest_ID_num) || !(this.state.guest_ID_type)}
                            > Search 
                        </button>
                        <div id="missing-data">Please enter guest name and date of birth OR ID number.</div>
                    </form>
                                  
                    {(this.state.search_match.length) > 0 ?  
                        <div className="dashboardCard">
                            {this.state.search_match.map(item => (            
                                <div className="dashboardCard card cardBackground" key={item._id}>
                                    <div className="card-body">
                                        <h4>Added By: {item.hotel_name}</h4><span>At: {new Date(item.entry_date).toLocaleDateString("en-AU")}</span>
                                        <br />
                                        <p >Guest Name: {item.guest_name}</p><span>Date of Birth: {new Date(item.guest_DOB).toLocaleDateString("en-AU")}</span>
                                        {/* {guest_DOB = new Date(item.guest_DOB).toLocaleDateString("en-US")} */}
                                        <p >Address: {item.guest_st_address}, </p><span>{item.guest_city}</span>
                                        <p >{item.guest_country}</p>
                                        <p>Phone: {item.guest_phone}</p>
                                        <p>ID number: {item.guest_ID_num}</p><span>Type: {item.guest_ID_type}</span>
                                        <p>Payment Method: {item.pay_method}</p>
                                    </div>
                                </div>           
                            ))}
                        </div> 
                    : <div id="no-results">No results found</div>}
                </div>
                <div id="footer-cont">
                    <Footer />
                </div>
            </div>
        );
    } 

}


export default Inquiry;