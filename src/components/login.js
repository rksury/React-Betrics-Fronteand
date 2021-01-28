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
        let url = 'login'
        this.api.PostApi(data, url)
            .then(res => {
                let err = JSON.parse(res.request.response)
                if (res.status === 200) {
                    this.api.setToken(res.data.access)
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
            <div className="bg-login"> 
                <div id="sign-up-container" className="form-page">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div id="sign-up-sub-header" className="head-tag"><h5>Login</h5></div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.login}>
                        <div className="input-div-in">
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={this.state.email} onChange={this.changeEmailHandler} id="email"
                               name="email"
                               placeholder="Email address"/>
                        <span >{this.state.error_email}</span>
                        </div>
                        
                        <div className="input-div-in">
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} name="password" placeholder="Password"
                               onChange={this.changePasswordHandler}/>
                        <span >{this.state.error_password}</span>
                        </div>
                        <div className="check-box">
                          <div className="left"> 
                          <input type="checkbox" name="" value="" className="check-box"/>
                        <label htmlFor="Remember" className="check-box-text">Remember Me</label>
                          </div>
                          <div className="right">
                              <a href="">Reset password</a>
                          </div>
                        </div>

                        <div className="text-center">
                            <button type={"submit"} onClick={this.login} id="create-account-button">Login</button>
                        </div>
                        <hr className="hr-tag1"></hr>
                        <p class="text-muted">Login with your social media account.</p>
                        <ul class="list-inline">
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-facebook">
                    <i class="fab fa-facebook-f"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-twitter">
                    <i class="fab fa-twitter"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-dribbble">
                    <i class="fab fa-dribbble"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-linkedin">
                    <i class="	fab fa-linkedin-in"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-google">
                    <i class="	fab fa-google"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-behance">
                    <i class="fab fa-behance"></i>
                </a>
            </li>
            <li class="list-inline-item">
                <a href="#" class="btn btn-floating btn-instagram">
                    <i class="fab fa-instagram"></i>
                </a>
            </li>
        </ul>
        <hr className="hr-tag2"></hr>
        <p class="text-muted">Don't have an account?</p>
        <a onClick={() => this.props.history.push('/register')} class="btn btn-outline-light btn-sm">Register now!</a>
                    </div>
                   {/* <p id="terms">Not a user?  Sign Up <a onClick= {()=> this.props.history.push('/access-key')} className="">(Beta Access)</a><br/>
                        <a href="#">Forgot Password.</a></p>*/}
                </div>
            </div>
        );
    };
}
