import React, { Component } from "react";
import { loginUser } from '../UserFunctions/userFunctions';
import "./style.css"

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        loginUser(user).then(res => {
            if(res) {
                this.props.history.push('/dashboard');
            }
            else {
                console.log("Incorrect email or password");
                document.getElementById('incorrect-div').style.display = "block";
            }
        })
    }

    render() {
        return (
            <div className='container' id="container">
                <div className='row'>
                    <div className='col-md-6 mt-5 mx-auto'>
                        <form noValidate onSubmit={ this.onSubmit } >
                            <h1 className='h3 mb-3 font-weight normal' id='login-fm'>Please Sign in</h1>
                            <div className='form-group'>
                                <label htmlFor='email' id='email-txt'>Email Address</label>
                                <input type='email'
                                className='form-control'
                                name='email'
                                placeholder='Enter Email'
                                value={ this.state.email }
                                onChange={ this.onChange }
                                />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password' id='pwd-text'>Password</label>
                                <input type='password'
                                className='form-control'
                                name='password'
                                placeholder='Enter Password'
                                value={ this.state.password }
                                onChange={ this.onChange }
                                />
                            </div>
                            <button type='submit' className='btn btn-lg btn-primary btn-block'>
                                Sign in
                            </button>
                            <div className="alert alert-warning" id="incorrect-div">Incorrect email or password</div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;