import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import "./style.css";

function howTo () {
    return (
        <section id="main-content-howTo">         
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content d-flex" id="howToInfo">
                <p id="heading">How to Use this site</p>
                    <h2 className="sub-heading">Important Information</h2>
                        <p className="tab-text">Be aware that if you cannot locate any results from an Inquiry search you should still follow your normal process when making reservations and checking-in guests.</p>
                    <h2 className="sub-heading">Adding a new blacklisted guest</h2>
                        <p className="tab-text">There are 4 required fields before you can add a new entry: <b>Guest name</b>, <b>guest date of birth</b>, <b>guest ID number</b> and <b>ID type.</b></p>
                        <p className="tab-text">The following is a list of all fields you may enter:</p>
                        <ul>
                            <li><b>Guest Name (required): </b>The guest's name</li>
                            <li><b>Guest date of birth (required): </b>The date of birth shown in the guest's ID</li>
                            <li><b>Guest ID Number (required): </b>The document number of the guest's</li>
                            <li><b>ID Type (required): </b>The type of ID provided by the guest (Driver license, passport, etc)</li>
                            <li><b>Street Address: </b>Guest's street name and number</li>
                            <li><b>City: </b>Guest's city</li>
                            <li><b>Country: </b>Guest's country of origin</li>
                            <li><b>Phone Number: </b>Guest's phone number if known</li>
                            <li><b>Payment method: </b>The method of payment made for the accommodation (cash, credit card, other)</li>
                            <li><b>Reason for blacklisting: </b>Please select the most accurate from the dropdown (Theft/Damage, Noise Complaint, Dispute/chargeback, Fraud, Other)</li>
                            <li><b>Description: </b>Type in a full summary of the event that resulted in blacklisting the guest. You should enter the check-in and check-out dates, email address (if known) of guest and/or the booker and in case of ID theft a physical description of the guest.</li>
                        </ul>
                        <p className="tab-text">Selecting Credit Card from the Payment method will display these additional fields:</p>
                        <ul>
                            <li><b>Cardholder Name: </b>The name on the credit card</li>
                            <li><b>Date of Birth: </b>The cardholder's date of birth</li>
                            <li><b>ID Number: </b>The cardholder's ID document number</li>
                            <li><b>ID Type: </b>The cardholder document ID type (Driver license, passport, etc)</li>
                        </ul>
                        <p className="tab-text">Click Submit Blacklisting and your entry will be added.</p>
                    <h2 className="sub-heading">Inquiry Search</h2>
                    <p className="tab-text">For best results you should perform the Inquiry search when you first receive a booking/reservation request and also at check-in.</p>
                    <p className="tab-text">You may search by both guest name and date of birth, or you may search by ID document number, or you may search by all 3 fields. Any results matching will appear in a table. In case of ID theft be careful to read the description to the right of the table for a physical description of the guest. If you require more information, the hotel name which entered the data is displayed and you may contact them to discuss further. The date of entry of the blacklisting is displayed to the very left.</p>
                    <h2 className="sub-heading">Bulletins</h2>
                        <p className="tab-text">Upon login the bulletins page is visible and displays the latest alerts added by hotels. You can view the date the alert was added and by which hotel.</p>
                        <p className="tab-text">The purpose of the bulletins is to alert other hotels of serious events.</p>
                        <p className="tab-text">To add a new bulletins click "+Add" and enter a title and message to be displayed. </p>
                </div>
                <div id="footer-cont">
                <Footer />
                </div>
            </div>
        </section>

    )

}

export default howTo;