import React, {Component} from "react";
import logo from '../images/logo.png'
import API from "../networking/api";
import {VerifyLogin} from "./verifylogin";

export class Step2 extends Component {
    verification = new VerifyLogin()

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            nick_name: '',
        }

        this.changeNickNameHandler = this.changeNickNameHandler.bind(this);
        this.user_level_update = this.user_level_update.bind(this);
        this.verification.verify_login =this.verification.verify_login.bind(this);
        this.verify_login_status =this.verify_login_status.bind(this)

    }


    changeNickNameHandler(event) {
        this.setState({nick_name: event.target.value});
    }

    user_level_update(event) {
        let data = {
            nick_name: this.state.nick_name,
        }
        let url = 'update-preference'
        this.api.PatchApi(data, url)
            .then((res) => {
                if (res.status === 200) {
                    this.props.history.push('/step3')
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);

            })
    }

    verify_login_status(event) {
        this.verification.verify_login()
    }

    render() {
        return (
            <div>
                {this.verify_login_status()}
                <div className="navtigation">
                    <a> <img src={logo} alt="logo"/></a>
                </div>

                <div className="container layout">
                    <h3>STEP 2/4</h3>
                    <h4>Select you bettor Nickname*</h4>
                    <p>Select your bettor nickname to be displayed throughout Betrics</p>

                    <div className="radio-btn">
                        <div className="form-group" onSubmit={this.user_level_update}>

                            <input value={this.state.nick_name} onChange={this.changeNickNameHandler} type="text"
                                   className="form-control" placeholder="Enter Nickname"/>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="btn-pre" onClick={()=> this.props.history.push('/step1')}><i className="fa fa-arrow-left"/>Back</button>
                        <button className="btn btn-next" type={"submit"} onClick={this.user_level_update}>Next</button>
                    </div>
                </div>
            </div>
        );
    };
}
