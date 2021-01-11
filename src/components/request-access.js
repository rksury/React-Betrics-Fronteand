import React,{Component} from "react";
import API from "../networking/api";

export class RequestAccess extends Component {

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            choice1: '',
            choice2: '',
            choice3: ''

        }
    }

    request_access(event) {
            let data = {
                full_name: this.state.email,
                email: this.state.password,
                choice1: this.state.choice1,
                choice2: this.state.choice2,
                choice3: this.state.choice3
        }
    }

    render() {
        return (
            <div>
                <div id="sign-up-container" className="request-access">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"><a> <img src="../../public/img/logo.png" alt="logo"/></a></h1>
                        <div id="sign-up-sub-header">Request Access to Join the Betrics.io</div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.login}>
                        <label htmlFor="text">Full Name</label>
                        <input type="test" placeholder="Full Name"/><br/>
                        <label htmlFor="email">Email address</label>
                        <input type="email" id="email" name="email" placeholder="Email Address"/>
                        <label htmlFor="Experience">Bettor Experience*</label>
                        <select className="drop-menu">
                            <option value="Select">Select</option>
                        </select>
                        <label htmlFor="Experience">How did you hear about the great and powerful betrics.io</label>
                        <select className="drop-menu">
                            <option value="Select">Select</option>
                        </select>
                        <label htmlFor="Experience">Are you going to join the online the betrics community for some
                            social
                            experience?</label>
                        <select className="drop-menu">
                            <option value="Select">Select</option>
                        </select>
                        <div className="text-center">
                            <button id="create-account-button">Request Beta Access</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}