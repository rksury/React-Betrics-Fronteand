import React from "react";

import logo from '../images/login-logo.png'



export class Accesskey extends React.Component {

    render() {
        return (
            <div>
                <div id="sign-up-container">
                    <div id="sign-up-head-wrapper" className="logoDiv">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div className="headerText">
                            <p>Enter your beta access key below to create your account.  If you do not have one please request access at support@betrics.io</p>
                        </div>
                    </div>
                    <div id="sign-up-form" >
                        <label htmlFor="key">Access Key</label>
                        <input type="text"  id="key" name="key" placeholder="Enter Beta Access Key"/><br/>

                        <div className="text-center">
                            <button type={"submit"}   id="submitButton">Submit</button>
                        </div>
                    </div>
                    <p id="terms">
                        <a href="#">Back to login.</a></p>
                </div>
            </div>
        );
    };
}
