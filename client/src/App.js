import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/pages/Landing/Landing";
import Register from "./components/Register/register";
import Reg from "./components/Reg/reg";
import Login from "./components/Login/login";
import Dashboard from "./components/pages/Dashboard/Dashboard";
import Inquiry from "./components/pages/Inquiry/Inquiry";
import howTo from "./components/pages/howTo/howTo";
import usefulInfo from "./components/pages/usefulInfo/usefulInfo";
import Addlisting from "./components/pages/Addlisting/Addlisting";

import "./App.css";

import StartUp from './components/pages/StartUp/startUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth from './Auth';

class App extends Component {
    render() {
        return (
                <Router>
                    <div className="container-fluid pl-0 pr-0 m-0">
                        <Navbar />
                        <Route exact path="/" component={Landing} />
                        <div className='container-fluid m-0 p-0'>
                            {/* Including this as example of sign up */}
                            {/* <Route exact path="/register" component={Reg} /> */}
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                            <Route exact path="/dashboard" component={Auth(Dashboard)} />
                            <Route exact path="/addlisting" component={Addlisting} />
                            <Route exact path="/inquiry" component={Inquiry} />
                            <Route exact path="/startUp" component={StartUp} />
                            <Route exact path="/howTo" component={howTo} />
                            <Route exact path="/usefulInfo" component={usefulInfo} />                            
                        </div>                                             
                    </div>                   
                </Router>                
        );
    }
}
export default App;
