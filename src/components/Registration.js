import React, {Component} from "react";
import API from "../networking/api";
import { useHistory } from "react-router-dom";
import logo from "../images/login-logo.png";

export class Register extends Component {

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            first_name: '',
            last_name: '',
        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.changePasswordHandler = this.changePasswordHandler.bind(this);
        this.registration = this.registration.bind(this);

    }

    changeEmailHandler(event) {
        this.setState({email: event.target.value});
    }

    changeFirstNameHandler(event) {
        this.setState({first_name: event.target.value});
    }

    changeLastNameHandler(event) {
        this.setState({last_name: event.target.value});
    }

    changePasswordHandler(event) {
        this.setState({password: event.target.value});
    }


    registration(event) {
        //window.location.href = 'https://stackoverflow.com/questions/50644976/react-button-onclick-redirect-page'
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }

    let url ='http://127.0.0.1:8000/user/'
    this.api.ResponseApi(data, url)
        .then((res) => {
            console.log(res);

            if (res.status === 201) {
                console.log(res.data)
                    // this.api.setToken(res.data.token)
                    .then(() => {
                        this.props.dispatch({ type: 'SET_USER', value: res.data })

                    })
                    .catch((error) => {
                        console.error(error)
                        // eslint-disable-next-line no-undef

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
                        <div id="sign-up-sub-header"><h4>Create your account and start winning.</h4></div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.registration}>
                        <label htmlFor="firstname">First Name</label>
                        <input value={this.state.first_name} onChange={this.changeFirstNameHandler} type="text" id="firstname" name="name" placeholder="First Name"/><br/>

                        <label htmlFor="lastname">Last Name</label>
                        <input value={this.state.last_name} onChange={this.changeLastNameHandler} type="text" id="lastname" name="name" placeholder="Last Name"/><br/>

                        <label htmlFor="email">Email address</label>
                        <input value={this.state.email} onChange={this.changeEmailHandler} type="email" id="email" name="email" placeholder="Email address"/><br/>

                        <label htmlFor="password">Password</label>
                        <input value={this.state.password} onChange={this.changePasswordHandler} type="password" name="password" placeholder="Password"/>



                        <div className="text-center">
                            <button type={"submit"} onClick={this.registration} id="create-account-button">Register</button>
                        </div>
                    </div>
                    <p id="terms">Already a user? <a href="#" className="footerText">Sign In</a><br/></p>
                </div>
            </div>
        );
    };

}
