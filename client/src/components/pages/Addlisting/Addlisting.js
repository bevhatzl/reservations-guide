import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar";
import BlacklistForm from  "../../BlacklistForm/BlacklistForm.js"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"


class Addlisting extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content">
                    Add blacklisting form goes here
                    <BlacklistForm />
                   
                </div>
               
            </div>
        );
    } 
}

export default Addlisting;