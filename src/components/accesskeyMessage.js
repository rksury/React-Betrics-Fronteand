import React from "react";

import logo from '../images/login-logo.png'


export class AccesskeyMessage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            accessKey:localStorage.getItem('accessKey'),
        }
    }

    render() {
        return (
            <div>
                <div id="sign-up-container">
                    <div id="sign-up-head-wrapper" className="logoDiv">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div className="headerText">
                            <p>Thanks for signing up! We will be in touch with a confirmation email, but because we know
                                you want access now, please use the following beta access key to enroll your account at
                                app.betrics.io: </p>
                        </div>
                    </div>

                    <div id="sign-up-form">
                        <p className="text-light text-center"> Please copy access key to register yourself.</p>
                        <p id="terms"><a onClick={() => this.props.history.push('/login')}
                                         className="">{this.state.accessKey}</a><br/>
                        </p>
                    </div>

                </div>
            </div>
        );
    };
}
