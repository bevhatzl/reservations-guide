import React from "react";
import { HashLink } from 'react-router-hash-link';
import "./style.css"

// Links for How to Use the site and for Useful Info page
function Footer () {
    return (
        <div className="container" id="footer-cont">     
                <ul className="navbar-nav ml-auto" id="footer-links">
                        <li className="nav-item mx-0 mx-lg-1" data-toggle="collapse" data-target="#navbarResponsive"><HashLink  to="/howTo#heading"  activeclassname="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"  exact="true">How To Use This Site</HashLink></li>
                        <li className="nav-item mx-0 mx-lg-1" id="nav-item2" data-toggle="collapse" data-target="#navbarResponsive"><HashLink  to="/usefulInfo#heading"  activeclassname="selected" className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger not-selected"  exact="true">Useful Info</HashLink></li>                                      
                </ul>
        </div>
       
    )
}

export default Footer;