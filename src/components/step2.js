import React,{Component} from "react";
import logo from '../images/logo.png'

export class Step2 extends Component {
    render() {
        return (
            <div>
                <div className="navtigation">
                    <a> <img src={logo} alt="logo"/></a>
                </div>

                <div className="container layout">
                    <h3>STEP 2/4</h3>
                    <h4>Select you bettor Nickname*</h4>
                    <p>Select your bettor nickname to be displayed throughout Betrics</p>

                    <div className="radio-btn">
                        <div className="form-group">

                            <input type="text" className="form-control" placeholder="Enter Nickname"/>
                        </div>
                    </div>
                    <div className="btn-div">
                        <button className="btn-pre"><i className="fa fa-arrow-left"/>Back</button>
                        <button className="btn btn-next">Next</button>
                    </div>
                </div>
            </div>
        );
    };
}