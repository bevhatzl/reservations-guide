import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import BlacklistForm from  "../../BlacklistForm/BlacklistForm.js"
import Footer from  "../../Footer/Footer"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css";

class Addlisting extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0" id="add-listing-cont">
                <Sidebar />
                <div className="content d-flex">
                    
                    <BlacklistForm />
                   
                </div>
                <div id="footer-cont">
                <Footer />
                </div>
            </div>
        );
    } 
}

export default Addlisting;