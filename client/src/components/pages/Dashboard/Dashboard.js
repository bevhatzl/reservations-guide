import React, { Component } from "react";
import jwt_decode from 'jwt-decode';
import Sidebar from "../../Sidebar/Sidebar";
import DasboardNewsCard from "../../DasboardNewsCard/DasboardNewsCard"
import "./style.css";
import API from "../../../utils/api";

class DashBoard extends Component {
    constructor() {
        super()
        this.state = {
            hotel_name: '',
            email: '',
            password: '',
            bulletin_title: '',
            message: '',
            bulletin_list: []
        }
    }

    componentDidMount() {
        const token = localStorage.usertoken;
        const decoded = jwt_decode(token);
        this.setState({
            hotel_name: decoded.hotel_name,
            email: decoded.email
        });
        API.getBulletins()
      .then(res => this.setState({ bulletin_list: res.data }))
      .then(console.log(this.state.bulletin_list))
      .catch(err => console.log(err));
        
    }

   
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
      };

    handleAddButton = (event) => {    
        event.preventDefault();
        const addEntryBlock = document.getElementById('add-entry-form');
        addEntryBlock.style.display = "block";
      };

      handleFormSubmit = (event) => {    
        event.preventDefault();
    
        const { hotel_name, bulletin_title, message } = this.state;
        
        console.log(hotel_name, bulletin_title, message);
        this.state.bulletin_list.unshift({ hotel_name: hotel_name, bulletin_title: bulletin_title, message: message, entry_date: 'today' })
        
          API.saveBulletin({hotel_name, bulletin_title, message})
            .then(() => {this.setState({
                bulletin_title: "",
                message: ""
              
            })
            const addEntryBlock = document.getElementById('add-entry-form');
        addEntryBlock.style.display = "none";}
            )
                 .catch(err => console.log(err));
        
      };
    
    render() {
        const { bulletin_title, message } = this.state;
        return (
            <div className="container-fluid pl-0">
                    <Sidebar />
                    <div>
                        <h1>
                             Latest Bulletins 
                             <span id="add-bulletin" onClick={this.handleAddButton}>+</span>
                        </h1>
                        
                        <div id="add-entry-form">
                            
                            <form onSubmit={this.handleFormSubmit}>
                            <label>Title:
              <input
              onChange={this.handleInputChange}
                name="bulletin_title"
                value={bulletin_title}
              />
              </label>
              <br />
              <label>Message:
              <input
              onChange={this.handleInputChange}
                name="message"
                placeholder="Provide a detailed description of the significant event which happened to alert other hotels."
                value={message}
              />
              </label>
              <button type="submit">Add Bulletin </button>
                            </form>
                        </div>

                        <div className="d-flex flex-row-reverse mr-5">
                            <DasboardNewsCard bulletins={this.state.bulletin_list} />
                            {console.log(this.state.bulletin_list)}
                            
                        </div>
                    </div>
            </div>
        );
    } 
}

export default DashBoard;