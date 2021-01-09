import React, {Component} from "react";

export class Step1 extends Component {
    render() {
        return (
            <div>
                <div className="navigations">
                    <a> <img src="/public/img/logo.png" alt="logo"/></a>
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