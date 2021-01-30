import React,{Component} from "react";


export class Sidebar extends Component {
    render() {
        return ( 
            <>
<div className="col-md-3 left-sidebar collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <div className="row logo-div">
               <img src="img/logo-img.png"></img>
            </div>
            <div className="menu-list">
               <ul>
                  <li className="active"><a href="/dashboard" ><i className="fas fa-chart-pie"></i> My Betrics</a></li>
                  <li><a href="/bet-tracker"><i className="fas fa-ticket-alt"></i> My Betrics</a></li>
                  <li><a href="#"><i className="  fas fa-book"></i> My Sportsbooks</a></li>
                  <li><a href="#"><i className="fas fa-users"></i> Betrics University</a></li>
                  <li><a href="#"><i className="fas fa-lightbulb"></i> Ideas</a></li>
                  <li><a href="#"><i className="fas fa-user-alt"></i> Contact</a></li>
                  <li className="sprate"></li>
                  <li><a href="#"><i className="fas fa-cog"></i> Settings</a></li>
                  <li><a href="#"><i className="fas fa-award"></i> Subscription</a></li>
               </ul>
            </div>
         </div>
          </>
            );
        };
    }

    export default Sidebar;