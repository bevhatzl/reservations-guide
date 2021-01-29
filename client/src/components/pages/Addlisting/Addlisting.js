import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import BlacklistForm from  "../../BlacklistForm/BlacklistForm.js"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css";

class Addlisting extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content d-flex">
                    
                    <BlacklistForm />
                   
                </div>
               
            </div>
        );
    } 
}

export default Addlisting;