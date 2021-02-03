import React, { Component } from "react";
import { registerUser, getUsers } from '../UserFunctions/userFunctions';
import "./style.css"

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hotel_name: '',
            email: '',
            password: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    handleValidation() {
        let errors = {};
        let formIsValid = true;
        // email
        const inputEmail = this.state.email;
        const emailRegex = /^\w+([\.-]?\w+)*@[a-z]+([\.-]?[a-z]+)*(\.[a-z]{2,4})+$/;
        const emailResult = emailRegex.test(inputEmail);
        if (!this.state.email) {
            formIsValid = false;
            errors["email"] = "Cannot be empty";
        }
        else if (!emailResult) {
            formIsValid = false;
            errors["email"] = "Email is not valid";
        }
        else {}

        // password
        if (!this.state.password) {
            formIsValid = false;
            errors["password"] = "Cannot be empty";
        }
        else if (this.state.password.length < 6) {
            formIsValid = false;
            errors["password"] = "Password must be at least 6 characters";
        }
        else {}

        // Hotel Name
        if (!this.state.hotel_name) {
            formIsValid = false;
            errors["hotel_name"] = "Cannot be empty";
        }
        else if (typeof this.state.hotel_name !== "undefined") {
            if (!this.state.hotel_name.match(/^[a-zA-Z" "]+$/)) {
                formIsValid = false;
                errors["hotel_name"] = "Only letters";
            }
        }
        else {}

        this.setState({ errors: errors });
        return formIsValid;
    }

    onChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    onSubmit(event) {
        let errors = {};
        event.preventDefault();
        const userData = {
            hotel_name: this.state.hotel_name,
            email: this.state.email,
            password: this.state.password
        }
        var result = this.handleValidation();
        console.log(result);
        if (this.handleValidation()) {
            getUsers().then(data => {
                console.log(data);

                var destination = data.map(element => {
                    if (element.email === this.state.email) {
                        console.log('foundmatch');
                        console.log(element.email)
                        return true;
                    }
                }).filter(item => { return item; })[0];
                if (!destination) {
                    registerUser(userData).then(res => {
                        this.props.history.push('/login')
                    })
                    console.log("Form submitted");
                }
                else {
                    errors["email"] = "Email already exists";
                    this.setState({ errors: errors });
                }
            })
        }
        else {
            console.log("Form has errors.")
        }
    }

    render() {
        return (
            <div className='container' id="container">
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className='h3 mb-3 font-weight normal'>Please Sign Up</h1>
                            <div className='form-group'>
                                <label htmlFor='hotel_name'>Hotel Name</label>
                                <input type='text'
                                    refs='hotel_name'
                                    className='form-control'
                                    name='hotel_name'
                                    placeholder='Enter Hotel Name'
                                    value={this.state.hotel_name}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["hotel_name"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='email'>Email Address</label>
                                <input type='email'
                                    refs='email'
                                    className='form-control'
                                    name='email'
                                    placeholder='Enter Email'
                                    value={this.state.email}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["email"]}</span>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password</label>
                                <input type='password'
                                    refs='password'
                                    className='form-control'
                                    name='password'
                                    placeholder='Enter Password'
                                    value={this.state.password}
                                    onChange={this.onChange}
                                />
                                <span style={{ color: "red" }}>{this.state.errors["password"]}</span>
                            </div>
                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Register
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
