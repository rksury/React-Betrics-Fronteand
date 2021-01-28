import React, {Component} from "react";
import API from "../networking/api";
import logo from "../images/login-logo.png";
// import { useForm } from "react-hook-form";

export class Register extends Component {


    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
            confirm_password: ''
        }

        this.registration = this.registration.bind(this);
        this.OnChangeHandler = this.OnChangeHandler.bind(this);

    }

    OnChangeHandler(event) {
        this.setState({[event.target.name]: event.target.value});
    }


    registration(event) {
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
        }

        let url = 'register'
        this.api.PostApi(data, url)
            .then((res) => {
                let err = JSON.parse(res.request.response)
                if (res.request.status === 200) {
                    let url = 'login'
                    this.api.PostApi(data, url).then((loginRes) => {
                        if (loginRes.status === 200) {
                            localStorage.setItem('nick_name', loginRes.data.nick_name)
                            this.api.setToken(loginRes.data.access)
                            this.props.history.push('/step1')
                        }
                    })
                }
                else if (res.request.status === 401) {
                    window.alert(err['detail'])
                }
                else if (res.request.status  === 400) {
                    this.setState({
                        error_password: err['password'],
                        error_first_name: err['first_name'],
                        error_last_name: err['last_name'],
                        error_confirm_password: err['confirm_password']});
                }
                else {
                    window.alert('Invalid Credentials') //todo : error message
                }
            })
            .catch((error) => {
                console.log(error);

            })

    }


    render() {
        return (
            <div className="bg-login">
                <div id="sign-up-container" className="form-page">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div id="sign-up-sub-header" className="head-tag"><h5>Create account</h5></div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.registration}>

                        <div className="input-div-in">
                            <label htmlFor="firstname">First Name</label>
                            <input value={this.state.first_name} onChange={this.changeFirstNameHandler} type="text"
                                   id="firstname" name="name" placeholder="First Name"/>
                            <span>{this.state.error_first_name}</span>
                        </div>

                        <div className="input-div-in">
                            <label htmlFor="lastname">Last Name</label>
                            <input value={this.state.last_name} onChange={this.changeLastNameHandler} type="text"
                                   id="lastname" name="name" placeholder="Last Name"/>
                            <span>{this.state.error_last_name}</span>
                        </div>

                        <div className="input-div-in">
                            <label htmlFor="email">Email address</label>
                            <input value={this.state.email} onChange={this.changeEmailHandler} type="email" id="email"
                                   name="email" placeholder="Email address"/>
                            <span>{this.state.error_email}</span>
                        </div>

                        <div className="input-div-in">
                            <label htmlFor="password">Password</label>
                            <input value={this.state.password} onChange={this.changePasswordHandler} type="password"
                                   name="password" placeholder="Password"/>
                            <span>{this.state.error_password}</span>
                        </div>

                        <div className="input-div-in">
                            <label htmlFor="confirm_password">Confirm Password</label>
                            <input value={this.state.confirm_password} onChange={this.changeConfirmPasswordHandler}
                                   type="password"
                                   name="confirm_password" placeholder="Confirm Password"/>
                            <span>{this.state.error_confirm_password}</span>
                        </div>

                        <div className="text-center">
                            <button type={"submit"} onClick={this.registration} id="create-account-button"
                                    className="btn-second">Register
                            </button>
                        </div>
                        <hr className="hr-tag1"/>
                        <p className="text-muted">Already have an account?</p>
                        <a onClick={() => this.props.history.push('/login')} className="btn btn-outline-light btn-sm">Sign
                            in!</a>

                    </div>

                </div>
            </div>

        );
    };

}
