import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import "./style.css";

function howTo () {
    return (
        <section id="main-content-howTo">
          
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content d-flex">
                <h1 id="heading">How to Use this site info goes here</h1>
                    
                   
                </div>
                <div id="footer-cont">
                <Footer />
                </div>
            </div>
        </section>

    )

}

export default howTo;