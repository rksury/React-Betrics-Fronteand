import React, {Component} from "react";
import logo from '../images/logo.png';
import API from "../networking/api";


export class Step1 extends Component {

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
        window.alert('a')
        console.log(event.target.value)
        this.setState({user_level: event.target.value});
    }


    user_level_update(event) {
        let data = {
            user_level: this.state.user_level,
        }

        let url = 'user/update-prefrence'
        this.api.PatchApi(data, url)
            .then((res) => {
                if (res.status === 200) {
                    this.props.history.push('/step2')
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                // console.log(error);

            })

    }

    render() {
        return (
            <div className="container-fluid ">
                <div className="navigations">
                    <img src={logo} alt="logo"/>

                </div>

                <div className="container layout">
                    <h3>STEP 1/4</h3>
                    <h4>Select you bettor experience*</h4>
                    <p>This will help us setup the best environment for you</p>

                    <div className="radio-btn" onSubmit={this.user_level_update}>

                        <div className="container1">Beginner
                            <input value="1"
                                   onChange={this.changeUserLevelHandler} type="radio"
                                   checked="checked" name="radio"
                                   defaultChecked/>
                            <span className="checkmark"/>
                        </div>
                        <label className="container1">Intermediate
                            <input value="1" onChange={this.changeUserLevelHandler} type="radio"
                                   name="radio"/>
                            <span className="checkmark"/>
                        </label>
                        <label className="container1">Advance
                            <input value="1"
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
