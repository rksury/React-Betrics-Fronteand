import React from "react";

import logo from '../images/login-logo.png'
import API from "../networking/api";



export class Accesskey extends React.Component {

    api =new API()

    constructor(props) {
        super(props);
        this.state = {
            access_key:'',
        }

        this.changeVerifyKeyHandler = this.changeVerifyKeyHandler.bind(this);
        this.verifyAccessKey = this.verifyAccessKey.bind(this);
    }

    changeVerifyKeyHandler(event) {
        this.setState({access_key: event.target.value});
    }

    verifyAccessKey(event) {
        let data = {
            access_key: this.state.access_key,
        }
        let url = 'user/verify-access-key'
        this.api.ResponseApi(data, url)
            .then((res) => {
                console.log(res);

                if (res.status === 200) {
                    this.api.setToken(res.data.token)
                        .then(() => {
                            this.props.history.push('/register')
                        })
                        .catch((error) => {
                            console.error(error)
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
                    <div id="sign-up-head-wrapper" className="logoDiv">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div className="headerText">
                            <p>Enter your beta access key below to create your account.  If you do not have one please request access at support@betrics.io</p>
                        </div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.verifyAccessKey}>
                        <label htmlFor="key">Access Key</label>
                        <input type="text"  id="key" name="key" placeholder="Enter Beta Access Key"
                               value={this.state.access_key} onChange={this.changeVerifyKeyHandler}/><br/>

                        <div className="text-center">
                            <button type={"submit"} onClick={this.verifyAccessKey}  id="submitButton">Submit</button>
                        </div>
                    </div>
                    <p id="terms">
                        <a onClick= {()=> this.props.history.push('/login')}>Back to login.</a></p>
                </div>
            </div>
        );
    };
}
