import React, {Component} from "react";

export class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:'',
            lastname:'',
            email: '',
            password:''

        }
    }
    render() {
        return (
            <div>
                <div id="sign-up-container">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"><a> <img src="/public/img/logo.png" alt="logo"/></a></h1>
                        <div id="sign-up-sub-header">Where Sports Bettors Make Better Decisions Faster</div>
                    </div>
                    <form id="sign-up-form">
                        <label htmlFor="firstname">First Name</label>
                        <input type="text" id="firstname" name="name" placeholder="First Name"/><br/>

                        <label htmlFor="lastname">Last Name</label>
                        <input type="text" id="lastname" name="name" placeholder="Last Name"/><br/>

                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="Email address"/><br/>

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Password"/>



                        <div className="text-center">
                            <button id="create-account-button">Register</button>
                        </div>
                    </form>
                    <p id="terms">Not a user? <a href="#" className="">Login</a><br/></p>
                </div>
            </div>
        );
    };

}