import React from 'react';
import { Link } from 'react-router-dom';
import Item from './Item';
import "./style.css"

function Sidebar() {
        return (
                <aside>
                        <ul className="navbar-nav sidebar accordion">

                                <Link to="/" className="sidebar-brand d-flex align-items-center justify-content-center">
                                        <div className="sidebar-brand-icon rotate-n-15">
                                                
                                        </div>
                                        <div className="sidebar-brand-text mx-3">Hotel Name goes here</div>
                                </Link>

                                {/* Divider */}
                                <hr className="sidebar-divider" />

                                <h1>Menu</h1>
                                <hr className="sidebar-divider" />

                                {/* Nav Item - Dashboard */}
                                <Item active={''}
                                        href={"/dashboard"}
                                        icon={<i className="fas fa-paperclip" />}
                                        text={<span>Bulletins</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                                {/* Nav Item - Profile
                                <Item active={''}
                                        href={"/profile"}
                                        icon={<i className="fas fa-user-alt" />}
                                        text={<span>Profile</span>} />

                                {/* Divider */}
                                {/* <hr className="sidebar-divider d-none d-md-block" /> */} 

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

                                {/* Nav Item - Scamwatch */}
                                <Item active={''}
                                        href={"/scamwatch"}
                                        icon={<i className="fas fa-paperclip" />}
                                        text={<span>Scamwatch</span>} />

                                {/* Divider */}
                                <hr className="sidebar-divider d-none d-md-block" />


                        </ul>
                </aside>

        );
}
export default Sidebar;