import React, { Component } from "react";
import "./style.css";
import Footer from '../Footer/Footer';

class BrandDescription extends Component {
    render() {
        return (
            <div className="container-fluid d-flex justify-content-center p-0 m-0">
                <div className="row m-0 p-0">
                    
                        <div className="card-body" id="content">
                            <p>Blacklisted hotel guests cause problems and financial losses. You keep your own records of blacklisted guests but how do you know if a guest has been blacklisted at another hotel?</p>
                            <p>Hotel Reservations Guide gives you the information you need to enter details of blacklisted guests and allows you to search potential guests before confirming a new reservation.</p>
                            <hr />
                            <br />
                        </div>
                   
                    {/* <div id="footer-container">
                    <Footer />
                    </div> */}
                </div>
            </div>
        );
    }
}

export default BrandDescription;

