import {Component} from "react";
import API from "../networking/api";
import {Redirect} from "react-router";
// import {browserHistory} from  "react-router"

export class VerifyLogin extends Component {
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }


    api = new API()

    verify_login(event) {
        let url = 'verify-token'
        let token = localStorage.getItem('token')
        if (localStorage.getItem('token') === null) {
            token = 'random-token'
        }
        let data = {
            token: token
        }
        this.api.PostApi(data, url)
            .then((res) => {
                console.log(res.request.status)
                if (res.request.status === 401) {  //todo: need to handle it for 500 or 500+
                    this.props.history.push("/login");
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);

            })
    }

}