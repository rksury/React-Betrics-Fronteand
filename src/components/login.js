import React, {Component} from "react";
//import { compose } from 'redux';
//import { connect } from 'react-redux';
//import * as actions from '../actions';
//import { reduxForm, Field } from 'redux-form';

import API from '../networking/api'
import {Home} from "./home";


//import axios from 'axios';



export class Login extends Component {

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
        let url = 'http://127.0.0.1:8000/user/login'
        this.api.ResponseApi(data, url)
            .then((res) => {
                console.log(res);

                if (res.status === 200) {
                    alert(res.status)
                    this.api.setToken(res.data.token)
                        .then(() => {
                            this.props.dispatch({ type: 'SET_USER', value: res.data })
                            this.props.navigate('Step1');
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
                        <h1 id="sign-up-header"/><a> <img src="/public/img/logo.png" alt="logo"/></a>
                        <div id="sign-up-sub-header">Where Sports Bettors Make Better Decicions Faster</div>
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
                    <p id="terms">Not a user? <a href="#" className="">Sign Up</a><br/>
                        <a href="#">Forgot Password.</a></p>
                </div>
            </div>
        );
    };
}