import React, { Component } from "react";
import Sidebar from "../../Sidebar/Sidebar"
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css"

class Inquiry extends Component {
    render() {
        return (
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                {/* <div className="content">
                    <DasboardNewsCard />
                </div> */}
              
                <h1>Inquiry Form goes here</h1>
                
            </div>
        );
    } 
}

export default Inquiry;