import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import { Link } from 'react-router-dom';
import Item from './Item';
import "./style.css"

class Sidebar extends Component {
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

        render () {
                return (
                        <aside id="sidebar-cont">
                                <ul className="navbar-nav sidebar accordion">
                                        <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                                        <div className="sidebar-brand-icon rotate-n-15"></div>
                                        <div className="sidebar-brand-text mx-3">{this.state.hotel_name}</div>
                                        </Link>

                                        {/* Divider */}
                                        <hr className="sidebar-divider" />
                                        <h1 id="menu-title">Menu</h1>
                                        <hr className="sidebar-divider" />
                                        {/* Nav Item - Dashboard */}
                                        <Item                     
                                        active={''}
                                        href={"/dashboard"}
                                        icon={<i className="fas fa-paperclip" />}
                                        text={<span>Bulletins</span>} />

                                        {/* Divider */}
                                        <hr className="sidebar-divider d-none d-md-block" />

                                        {/* Nav Item - Inquiry */}
                                        <Item active={''}
                                        href={"/inquiry"}
                                        icon={<i className="fas fa-paperclip" />}
                                        text={<span>Inquiry</span>} />

                                        {/* Divider */}
                                        <hr className="sidebar-divider d-none d-md-block" />

                                        {/* Nav Item - Add Listing */}
                                        <Item active={''}
                                        href={"/addlisting"}
                                        icon={<i className="fas fa-paperclip" />}
                                        text={<span>Add Listing</span>} />

                                        {/* Divider */}
                                        <hr className="sidebar-divider d-none d-md-block" />
                                </ul>
                        </aside>
                );
        }
}

export default Sidebar;