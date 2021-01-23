import React,{Component} from "react";
import API from "../networking/api";
import logo from "../images/login-logo.png";

export class RequestAccess extends Component {

    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            full_name: '',
            email: '',
            bettor_experience: '',
            reference: '',
            community_social_experience: '',
            access_key:'',

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
        this.setState({bettor_experience: event.target.value});
    }

    changeChoice2Handler(event) {
        this.setState({reference: event.target.value});
    }

    changeChoice3Handler(event) {
        this.setState({community_social_experience: event.target.value});
    }

    request_access(event) {
            let data = {
                full_name: this.state.full_name,
                email: this.state.email,
                bettor_experience: this.state.bettor_experience,
                reference: this.state.reference,
                community_social_experience: this.state.community_social_experience,
        }
        let url ='request-access'
        this.api.PostApi(data, url)
            .then((res) => {
                let err = JSON.parse(res.request.response)
                if (res.status === 201) {
                    try {
                      localStorage.setItem('accessKey', res.data['access_key'])
                        this.props.history.push('/access-message')
                    } catch (error) {
                        console.log(error);
                    }
                }
                else if (res.request.status === 400){
                    this.setState({error_email: err['email'], error_full_name: err['full_name']})
                }

            })
            .catch((error) => {
                console.error(error);

            })

    }


    render() {
        return (
            <div>
                <div id="sign-up-container" className="request-access">
                    <div id="sign-up-head-wrapper">
                        <h1 id="sign-up-header"/><a> <img id="logo" src={logo} alt="logo"/></a>
                        <div id="sign-up-sub-header"><h5>Request Access to Join the Betrics.io</h5></div>
                    </div>
                    <div id="sign-up-form" onSubmit={this.request_access}>
                    <div className="input-div-in">
                        <label htmlFor="text">Full Name</label>
                        <input value={this.state.full_name} onChange={this.changeFullNameHandler} type="test" placeholder="Full Name"/><br/>
                        <span >{this.state.error_full_name}</span>
                    </div>
                    <div className="input-div-in">
                        <label htmlFor="email">Email address</label>
                        <input value={this.state.email} onChange={this.changeEmailHandler} type="email" id="email" name="email" placeholder="Email Address"/><br/>
                        <span >{this.state.error_email}</span>
                    </div>

                        <label htmlFor="Experience">Bettor Experience*</label>
                        <select className="drop-menu" value={this.state.bettor_experience} onChange={this.changeChoice1Handler} required>
                            <option hidden selected>Select</option>
                            <option>Relax pal, I'm new to this, maybe some fantasy sports or March Madness</option>
                            <option>I get some action down every now and then</option>
                            <option>I bet fairly regularly on at least one sport</option>
                            <option>All I do is Win, Win, Win, no matter what</option>
                        </select>
                        <label htmlFor="Experience">How did you hear about the great and powerful betrics.io</label>
                        <select className="drop-menu" value={this.state.reference} onChange={this.changeChoice2Handler} required>
                            <option hidden selected>Select</option>
                            <option>Reddit</option>
                            <option>Product Hunt</option>
                            <option>Facebook</option>
                            <option>Instagram</option>
                            <option>Twitter</option>
                            <option>LinkedIn</option>
                            <option>Pinterest</option>
                            <option>YouTube</option>
                            <option>Friend / Word of Mouth</option>
                            <option>Slack</option>
                            <option>Other awesome option</option>
                        </select>
                        <label htmlFor="Experience">Are you going to join the online the betrics community for some
                            social
                            experience?</label>
                        <select className="drop-menu" value={this.state.community_social_experience} onChange={this.changeChoice3Handler}>
                            <option hidden selected>Select</option>
                            <option>Hell yeah!</option>
                            <option>I might dip my toe in the water</option>
                            <option>Eh, most likely no. No is my final answer (for now)</option>                        </select>
                        <div className="text-center">
                            <button type={"submit"} onClick={this.request_access} id="create-account-button">Request Beta Access</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    };
}

