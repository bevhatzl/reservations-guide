import React from 'react';
import Footer from '../../../components/Footer/Footer';
import Sidebar from '../../Sidebar/Sidebar';
import "./style.css";

function usefulInfo () {
    return (
        <section id="main-content-usefulInfo">
          
            <div className="container-fluid h-100 p-0 m-0">
                <Sidebar />
                <div className="content d-flex">
                <h1 id="heading">Useful info goes here</h1>
                    
                   
                </div>
                <div id="footer-cont">
                <Footer />
                </div>
            </div>
        </section>

    )

}

export default usefulInfo;