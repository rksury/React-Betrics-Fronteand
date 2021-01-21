import {Component} from "react";

export class ForgetPassword extends Component {
    render() {
        return (
            <div>
                <div id="sign-up-container">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"><img src="../../public/img/logo.png" alt="logo"/></h1>
                        <div id="sign-up-sub-header">Forgot Password</div>
                    </div>
                    <form id="sign-up-form">
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="Email address"/><br/>
                        <div className="text-center">
                            <button id="create-account-button">Reset Password</button>
                        </div>
                    </form>
                    <p id="terms">Not a user? <a href="#" className="">Sign Up</a><br/>
                        You have already account? <a href="#" className="">Sign In</a></p>
                </div>
            </div>
        );
    };

}