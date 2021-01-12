import React from "react";
import logo from '../images/login-logo.png'

//import { compose } from 'redux';
//import { connect } from 'react-redux';
//import * as actions from '../actions';
//import { reduxForm, Field } from 'redux-form';

import API from '../networking/api'

//import axios from 'axios';


export class Login extends React.Component {
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }

        //this.onSubmit = this.onSubmit.bind(this);

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.login = this.login.bind(this);

    }

    changeEmailHandler(event) {
        this.setState({email: event.target.value});
    }

    changePasswordHandler(event) {
        this.setState({password: event.target.value});
    }

    login(event) {
        let data = {
            email: this.state.email,
            password: this.state.password,
        }
        let url = 'http://192.168.29.106:8000/user/login'
        this.api.ResponseApi(data, url)
            .then((res) => {
                console.log(res);

                if (res.status === 200) {
                    this.api.setToken(res.data.token)
                        .then(() => {
                            this.props.history.push('/step1')
                        })
                        .catch((error) => {
                            console.error(error)
                        })
                }
                else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);

            })
    }


    render() {
        return (
            <div>
                <div id="sign-up-container">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div id="sign-up-sub-header"><h5>Where Sports Bettors Make Better Decisions Faster </h5></div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.login}>
                        <label htmlFor="email">Email address</label>
                        <input type="text" value={this.state.email} onChange={this.changeEmailHandler} id="email"
                               name="email"
                               placeholder="Email address"/><br/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} name="password" placeholder="Password"
                               onChange={this.changePasswordHandler}/>
                        <input type="checkbox" name="" value="" className="check-box"/>
                        <label htmlFor="Remeber" className="check-box-text"> Remeber Me</label>

                        <div className="text-center">
                            <button type={"submit"} onClick={this.login} id="create-account-button">Login</button>
                        </div>
                    </div>
                    <p id="terms">Not a user?  Sign Up <a onClick= {()=> this.props.history.push('/accesskey')} className="">(Beta Access)</a><br/>
                        <a href="#">Forgot Password.</a></p>
                </div>
            </div>
        );
    };
}
