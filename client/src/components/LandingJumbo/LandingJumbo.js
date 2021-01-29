import React, { Component } from "react";


class LandingJumbo extends Component {
    render() {
        return (
            <div className="jumbotron mt-5 landingJumbo">
                <div className='col-sm-8 mx-auto jumboText'>
                    <h1 className='d-flex justify-content-center companyName'>
                        <div className="sidebar-brand-icon rotate-n-15 mr-2">
                            
                        </div> 
                        <div>Hotel Reservations Guide</div>
                    </h1>
                    <h3 className='text-center companySlogan'>Letting you make safe reservation choices</h3>
                </div>
            </div>
        );
    } 
}

export default LandingJumbo;