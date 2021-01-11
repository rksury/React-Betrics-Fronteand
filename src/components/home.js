import React,{Component} from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {Step1} from "./step1";
import {Step2} from "./step2";
import {Step3} from "./step3";
import {Step4} from "./step4";
import {Login} from "./login";
import {Register} from "./Registration";
import {RequestAccess} from "./request-access";
import {ForgetPassword} from "./forgetpassword";
import {Accesskey} from "./accesskey";
import {Redirect} from "react-router";

export class Home extends Component {
    render() {
        return(
            <BrowserRouter>
                <div className="container">
                    <Switch>
                        <Route path='/step1' component={Step1} exact/>
                        <Route path='/step2' component={Step2}/>
                        <Route path='/step3' component={Step3}/>
                        <Route path='/step4' component={Step4}/>
                        <Route path='/login' component={Login}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/request-access' component={RequestAccess}/>
                        <Route path='/forget-password' component={ForgetPassword}/>
                        <Route path='/accessKey' component={Accesskey}/>
                        <Redirect to="/login" />
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
