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
        this.setState({user_level: event.target.value});
    }


    user_level_update(event) {
        let data = {
            user_level: this.state.user_level,
        }

        let url ='http://192.168.29.106:8000/user/:id'
        this.api.PatchApi(data, url)
            .then((res) => {
                console.log(res);

                if (res.status === 201) {
                    console.log(res.data)
                        // this.api.setToken(res.data.token)
                        .then(() => {
                            this.props.dispatch({type: 'SET_USER', value: res.data})
                            this.props.history.push('/step2')
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

                    <div className="radio-btn" onSubmit={this.user_level_update}>

                        <div className="container1">Beginner
                            <input value={this.state.user_level} onChange={this.changeUserLevelHandler} type="radio" checked="checked" name="radio"/>
                            <span className="checkmark"/>
                        </div>
                        <label className="container1">Intermediate
                            <input value={this.state.user_level} onChange={this.changeUserLevelHandler} type="radio" name="radio"/>
                            <span className="checkmark"/>
                        </label>
                        <label className="container1">Advance
                            <input value={this.state.user_level} onChange={this.changeUserLevelHandler} type="radio" name="radio"/>
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
