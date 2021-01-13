import React from "react";
import logo from '../images/login-logo.png'

import API from '../networking/api'

export class Login extends React.Component {
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',

        }

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
        let url = 'user/login'
        this.api.PostApi(data, url)
            .then(res => {
                let err = JSON.parse(res.request.response)
                if (res.status === 200) {
                    this.api.setToken(res.data.token)
                    this.props.history.push('/dashboard')
                }else if (res.request.status === 401) {
                        window.alert(err['detail'])
                }else if (res.request.status  === 400) {
                    this.setState({error_email: err['email'],error_password: err['password']});
                }
                else {
                    window.alert('Invalid Credentials') //todo : error message
                }
            }).catch(error => {
            window.alert('server error contact to administration') //todo : error message
        });
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
                               placeholder="Email address"/>
                        <span style={{color: "red"}}>{this.state.error_email}</span><br/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} name="password" placeholder="Password"
                               onChange={this.changePasswordHandler}/>
                        <span style={{color: "red"}}>{this.state.error_password}</span><br/>
                        <input type="checkbox" name="" value="" className="check-box"/>
                        <label htmlFor="Remember" className="check-box-text">Remember Me</label>

                        <div className="text-center">
                            <button type={"submit"} onClick={this.login} id="create-account-button">Login</button>
                        </div>
                    </div>
                    <p id="terms">Not a user?  Sign Up <a onClick= {()=> this.props.history.push('/access-key')} className="">(Beta Access)</a><br/>
                        <a href="#">Forgot Password.</a></p>
                </div>
            </div>
        );
    };
}
