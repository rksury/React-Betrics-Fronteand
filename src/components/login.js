import React, {Component} from "react";

export class Login extends Component {

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
        window.alert(this.state.email)
        window.alert(this.state.password)

    }

    render() {
        return (
            <div>
                <div id="sign-up-container">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"/><a> <img src="/public/img/logo.png" alt="logo"/></a>
                        <div id="sign-up-sub-header">Where Sports Bettors Make Better Decicions Faster</div>
                    </div>
                    <form id="sign-up-form" onSubmit={this.login}>
                        <label htmlFor="email">Email address</label>
                        <input type="email" value={this.state.email} onChange={this.changeEmailHandler} id="email"
                               name="email"
                               placeholder="Email address"/><br/>
                        <label htmlFor="password">Password</label>
                        <input type="password" value={this.state.password} name="password" placeholder="Password"
                               onChange={this.changePasswordHandler}/>
                        <input type="checkbox" name="" value="" className="check-box"/>
                        <label htmlFor="Remeber" className="check-box-text"> Remeber Me</label>

                        <div className="text-center">
                            <button type={"submit"} id="create-account-button">Login</button>
                        </div>
                    </form>
                    <p id="terms">Not a user? <a href="#" className="">Sign Up</a><br/>
                        <a href="#">Forgot Password.</a></p>
                </div>
            </div>
        );
    };
}