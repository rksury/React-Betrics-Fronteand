import React, {Component} from "react";
import logo from '../images/logo.png';
import API from "../networking/api";
import {VerifyLogin} from "./verifylogin";

export class Step1 extends Component {

    verification = new VerifyLogin()
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            user_level: '',
        }

        this.changeUserLevelHandler = this.changeUserLevelHandler.bind(this);
        this.user_level_update = this.user_level_update.bind(this);

    }


    changeUserLevelHandler(event) {
        console.log(event.target.value)
        this.setState({user_level: event.target.value});
    }


    user_level_update(event) {
        let data = {
            user_level: +this.state.user_level
        }
        console.log(typeof (data['user_level']))
        let url = 'user/update-preference'
        this.api.PatchApi(data, url)
            .then((res) => {
                if (res.status === 200) {
                    this.props.history.push('/step2')
                }
                else if (res.request.status === 401) {
                    this.props.history.push('/login')
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
            <div className="container-fluid ">
                {this.verification.verify_login()}
                <div className="navigations">
                    <img src={logo} alt="logo"/>

                </div>

                <div className="container layout">
                    <h3>STEP 1/4</h3>
                    <h4>Select you bettor experience*</h4>
                    <p>This will help us setup the best environment for you</p>

                    <div className="radio-btn" onSubmit={this.user_level_update}>

                        <label className="container1">Beginner
                            <input value="0"
                                   onChange={this.changeUserLevelHandler} type="radio"
                                   name="radio"
                                   defaultChecked
                                   />
                            <span className="checkmark"/>
                        </label>
                        <label className="container1">Intermediate
                            <input value="1" onChange={this.changeUserLevelHandler} type="radio"
                                   name="radio"/>
                            <span className="checkmark"/>
                        </label>
                        <label className="container1">Advance
                            <input value="2"
                                   onChange={this.changeUserLevelHandler} type="radio"
                                   name="radio"/>
                            <span className="checkmark"/>
                        </label>
                    </div>
                    <div className="btn-div">
                        <button className="btn btn-next" type={"submit"} onClick={this.user_level_update}>Next</button>
                    </div>
                </div>
            </div>
        );
    };
}
