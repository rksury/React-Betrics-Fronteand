import React,{Component} from "react";

export class RequestAccess extends Component {
    render() {
        return (
            <div>
                <div id="sign-up-container" className="request-access">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"><a> <img src="../../public/img/logo.png" alt="logo"/></a></h1>
                        <div id="sign-up-sub-header">Request Access to Join the Betrics.io</div>
                    </div>
                    <form id="sign-up-form">
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
                    </form>

                </div>
            </div>
        );
    };
}