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

        // this.changeUserLevelHandler = this.changeUserLevelHandler.bind(this);
        // this.step1 = this.registration.bind(this);

    }


    changeUSErHandler(event) {
        this.setState({password: event.target.value});
    }


    registration(event) {
        let data = {
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
        }

        let url = 'http://192.168.29.106:8000/user/'
        this.api.ResponseApi(data, url)
            .then((res) => {
                console.log(res);

                if (res.status === 201) {
                    console.log(res.data)
                        // this.api.setToken(res.data.token)
                        .then(() => {
                            this.props.dispatch({type: 'SET_USER', value: res.data})
                            this.props.navigation.reset('Home');
                        })
                        .catch((error) => {
                            console.error(error)
                            // eslint-disable-next-line no-undef

                        })

                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);

            })

    }

    render() {
        return (
            <div className="container-fluid " >
                <div className="navigations">
                    <img src={logo} alt="logo"/>

                </div>

                <div className="container layout">
                    <h3>STEP 1/4</h3>
                    <h4>Select you bettor experience*</h4>
                    <p>This will help us setup the best environment for you</p>

                    <div className="radio-btn">

                        <div className="container1">Beginner
                            <input type="radio" checked="checked" name="radio"/>
                            <span className="checkmark"/>
                        </div>
                        <label className="container1">Intermediate
                            <input type="radio" name="radio"/>
                            <span className="checkmark"/>
                        </label>
                        <label className="container1">Advance
                            <input type="radio" name="radio"/>
                            <span className="checkmark"/>
                        </label>
                    </div>
                    <div className="btn-div">
                        <button className="btn btn-next">Next</button>
                    </div>
                </div>
            </div>
        );
    };
}
