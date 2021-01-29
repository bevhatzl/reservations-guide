import React, { Component } from "react";
import "./style.css"

class DasboardPayslipCard extends Component {
    render() {
        return (
            <div className="dashboardCard card cardBackground">
                <div className="card-body">
                    <h4 className="card-subtitle">Title goes here</h4>
                    <p className="card-text">Message goes here</p>
                    {/* <a href="/" className="card-link bottomLink">More details</a> */}
                </div>
            </div>
        );
    }
}

export default DasboardPayslipCard;