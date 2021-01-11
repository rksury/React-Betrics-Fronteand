import React,{Component} from "react";
import logo from '../images/logo.png'
import API from "../networking/api";

export class Step2 extends Component {

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            nick_name: '',
        }

        this.changeNickNameHandler = this.changeNickNameHandler.bind(this);
        this.user_level_update = this.user_level_update.bind(this);

    }


    changeNickNameHandler(event) {
        this.setState({nick_name: event.target.value});
    }

    user_level_update(event) {
        let data = {
            nick_name: this.state.nick_name,
        }
        let url = 'http://127.0.0.1:8000/user/:id'
        this.api.PatchApi(data, url)
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
            <div>
                <div className="navtigation">
                    <a> <img src={logo} alt="logo"/></a>
                </div>

                <div className="container layout" >
                    <h3>STEP 2/4</h3>
                    <h4>Select you bettor Nickname*</h4>
                    <p>Select your bettor nickname to be displayed throughout Betrics</p>

                    <div className="radio-btn">
                        <div className="form-group" onSubmit={this.user_level_update}>

                            <input value={this.state.nick_name} onChange={this.changeNickNameHandler} type="text" className="form-control" placeholder="Enter Nickname"/>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="btn-pre"><i className="fa fa-arrow-left"/>Back</button>
                        <button className="btn btn-next" type={"submit"} onClick={this.user_level_update}>Next</button>
                    </div>
                </div>
            </div>
        );
    };
}