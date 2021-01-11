import React,{Component} from "react";
import API from "../networking/api";

export class RequestAccess extends Component {

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            choice1: '',
            choice2: '',
            choice3: ''

        }

        this.changeEmailHandler = this.changeEmailHandler.bind(this);
        this.changeFullNameHandler = this.changeFullNameHandler.bind(this);
        this.changeChoice1Handler = this.changeChoice1Handler.bind(this);
        this.changeChoice2Handler = this.changeChoice2Handler.bind(this);
        this.changeChoice3Handler = this.changeChoice3Handler.bind(this);
        this.request_access = this.request_access.bind(this);

    }


    changeEmailHandler(event) {
        this.setState({email: event.target.value});
    }

    changeFullNameHandler(event) {
        this.setState({full_name: event.target.value});
    }

    changeChoice1Handler(event) {
        this.setState({choice1: event.target.value});
    }

    changeChoice2Handler(event) {
        this.setState({choice2: event.target.value});
    }

    changeChoice3Handler(event) {
        this.setState({choice3: event.target.value});
    }

    request_access(event) {
            let data = {
                full_name: this.state.full_name,
                email: this.state.email,
                choice1: this.state.choice1,
                choice2: this.state.choice2,
                choice3: this.state.choice3
        }

        let url ='http://127.0.0.1:8000/user/request-access/'
        this.api.ResponseApi(data, url)
            .then((res) => {
                console.log(res);

                if (res.status === 200) {
                    alert(res.data.get('access_code'))
                    // this.api.setToken(res.data.token)
                        .then(() => {
                            // this.props.dispatch({ type: 'SET_USER', value: res.data })
                            this.props.navigation.reset({
                                index: 0,
                                routes: [{ name: 'Home' }],
                            });
                            //this.props.navigation.reset({
                            //    index: 0,
                            //    routes: [{ name: 'HomeStack' }],
                            //});
                        })
                        .catch((error) => {
                            console.error(error)
                            // eslint-disable-next-line no-undef

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
                <div id="sign-up-container" className="request-access">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"><a> <img src="../../public/img/logo.png" alt="logo"/></a></h1>
                        <div id="sign-up-sub-header">Request Access to Join the Betrics.io</div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.request_access}>
                        <label htmlFor="text">Full Name</label>
                        <input value={this.state.full_name} onChange={this.changeFullNameHandler} type="test" placeholder="Full Name"/><br/>
                        <label htmlFor="email">Email address</label>
                        <input value={this.state.email} onChange={this.changeEmailHandler} type="email" id="email" name="email" placeholder="Email Address"/>
                        <label htmlFor="Experience">Bettor Experience*</label>
                        <select className="drop-menu" value={this.state.choice1} onChange={this.changeChoice1Handler}>
                            <option>Select1</option>
                            <option>Select2</option>
                            <option>Select3</option>

                        </select>
                        <label htmlFor="Experience">How did you hear about the great and powerful betrics.io</label>
                        <select className="drop-menu" value={this.state.choice2} onChange={this.changeChoice2Handler}>
                            <option>Select1</option>
                            <option>Select2</option>
                            <option>Select3</option>
                        </select>
                        <label htmlFor="Experience">Are you going to join the online the betrics community for some
                            social
                            experience?</label>
                        <select className="drop-menu" value={this.state.choice3} onChange={this.changeChoice3Handler}>
                            <option>Select1</option>
                            <option>Select2</option>
                            <option>Select3</option>                        </select>
                        <div className="text-center">
                            <button type={"submit"} onClick={this.request_access} id="create-account-button">Request Beta Access</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}