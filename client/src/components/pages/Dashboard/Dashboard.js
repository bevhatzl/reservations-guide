import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"


class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            hotel_name: '',
            email: '',
            password: ''
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            hotel_name: decoded.hotel_name,
            email: decoded.email
        })
    }
    
    render() {
        return (
            <div className="container-fluid pl-0">
                    <Sidebar />
                    <div>
                        <h1>
                             Welcome { this.state.hotel_name } 
                        </h1>
                        <div className="d-flex flex-row-reverse mr-5">
                            <DasboardNewsCard />
                        </div>
                    </div>
            </div>
        );
    } 
}

export default DashBoard;