import React,{Component} from "react";
import Header from "./header";
import Sidebar from "./sidebar";

export class BetTracker extends Component {
    render() {
        return ( 
            <>
               <div className="container-fluid main-bg-dashboard">
      <div className="row">
       
         <Sidebar/>
        
         <div className="col-md-10 content">
          
          <Header/>
          
            <div className="main-content">
               <div className=" main-container container-fluid">
               
                  <ul className="nav nav-pills main-tab">
                     <li className="active">
                        <a data-toggle="pill" href="#main-content-section">
                           <div className="img-div">
                              <img src="img/tab-img.png"></img>
                           </div>
                           <div className="content-div">
                              <h3>NFL</h3>
                              <p>League</p>
                           </div>
                        </a>
                     </li>
                     <li className="coming-soon-div">
                        <a data-toggle="pill" href="#main-content-section2">
                           <div className="both-div">
                              <div className="img-div">
                                 <img src="img/tab-img2.png"></img>
                              </div>
                              <div className="content-div">
                                 <h3>NFL</h3>
                                 <p>League</p>
                              </div>
                           </div>
                           <div className="coming-soon">
                              <h3>COMING SOON</h3>
                           </div>
                        </a>
                     </li>
                     <li className="coming-soon-div">
                        <a data-toggle="pill" href="#main-content-section3">
                           <div className="both-div">
                              <div className="img-div third-img-div">
                                 <img src="img/tab-img3.png" className="third-img"></img>
                              </div>
                              <div className="content-div">
                                 <h3>NFL</h3>
                                 <p>League</p>
                              </div>
                           </div>
                           <div className="coming-soon">
                              <h3>COMING SOON</h3>
                           </div>
                        </a>
                     </li>
                  </ul>
               
                  <div className="tab-content main-tab-content inside-tab main-active">
                  <div id="main-content-section" className="tab-pane tab-content fade in active">
                        <div className="panel-div">
                           <div className="panel-group" id="accordion">
                              <div className="panel panel-default">
                                 <div className="panel-heading active">
                                    <h4 className="panel-title">
                                       <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"><i className="fas fa-angle-up"></i> My Bet Tracker Settings</a>
                                    </h4>
                                 </div>
                                 <div id="collapse1" className="panel-collapse collapse in">
                                    <div className="panel-body">
                                       <div className="row">
                                          <div className="col-md-7 table-respos">
                                             <div className="block-div first-row" >
                                                <table>
                                                   <thead>
                                                      <tr>
                                                         <th>Sportsbook</th>
                                                         <th>Balance</th>
                                                         <th>Order</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td ><span className="second-text">Betrics Bucks</span></td>
                                                         <td ><span className="inputi-fi-text wtih-bg"><span className="dolor">$</span>10000</span></td>
                                                         <td></td>
                                                      </tr>
                                                      <tr>
                                                         <td >Book Name</td>
                                                         <td ><span className="inputi-fi-text"><span className="dolor">$</span>5</span></td>
                                                         <td><span className="inputi-fi-text">0</span></td>
                                                      </tr>
                                                      <tr>
                                                         <td ><span class="fnt-weight">Sportsbook Real $ Total</span></td>
                                                         <td ><span class="inputi-fi-text with-out-bor"><span class="dolor">$</span>10,000</span></td>
                                                         <td></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          </div>
                                          <div class="col-md-5  table-respos">
                                             <div class="block-div table-second-tarck first-row" >
                                                <table>
                                                   <thead>
                                                      <tr>
                                                         <th>Default Wager Amount (Unit Size)</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td class="pd-10"><span className="inputi-fi-text"><span className="dolor">$</span>0</span></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="panel panel-default">
                                 <div className="panel-heading">
                                    <h4 className="panel-title">
                                       <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"><i className="fas fa-angle-up"></i> My Performance Summary</a>
                                    </h4>
                                 </div>
                                 <div id="collapse2" className="panel-collapse collapse">
                                    <div className="panel-body">
                                       <div className="row">
                                          <div className="col-md-12 second-panel-first-text">
                                             <p className="text-btn"><span className="tag-head">Graded Wagers:</span><button className="first">Real Money Wager</button><button className="second">Betrics Bucks Graded Wagers</button></p>
                                          </div>
                                          <div className="col-md-12 second-panel-first-text second-panel-first-second">
                                             <p className="text-btn"><span className="tag-head">Timeframe:</span><input type="text" className="form-control date1" id="selectDateTime1" placeholder="02/03/2016" className=""></input> <span class="date-span">|</span> <input type="text" className="form-control date2" id="selectDateTime2" placeholder="02/04/2016" ></input></p>
                                          </div>
                                          <div className="col-md-12 second-panel-first-text second-panel-first-second">
                                             <p className="tag text-btn"><span className="tag-head">Bet Type:</span> <span className="tagg first-tag"><a href="#">x</a>Spread</span><span className="tagg"><a href="#">x</a>Money line</span><span className="tagg"><a href="#">x</a>Total</span><span className="tagg"><a href="#">x</a>Prop</span><span className="tagg"><a href="#">x</a>Parlay</span><span className="tagg"><a href="#">x</a>Teaser</span><span className="more"><a href="#">More</a></span></p>
                                          </div>
                                          <div className="col-md-12 second-panel-first-text second-panel-first-second third-line-all">
                                             <p className="text-btn "><span className="tag-head">Sportsbook:</span><span className="checkbox">
                                                <label><input type="checkbox" value=""></input>All</label>
                                                </span>
                                             </p>
                                          </div>
                                          <div className="col-md-5 table-respos">
                                             <div className="block-div first-row" >
                                                <div className="head">
                                                   <h3>Completed Wagers</h3>
                                                </div>
                                                <table>
                                                   <thead>
                                                      <tr>
                                                         <th>Bet Type</th>
                                                         <th># Bets</th>
                                                         <th>Amount</th>
                                                         <th>Win</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td >TOT</td>
                                                         <td>0</td>
                                                         <td></td>
                                                         <td></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          </div>
                                          <div className="col-md-7 table-resposiv table-respos all-track">
                                             <div className="block-div first-row" >
                                                <div className="head">
                                                   <h3>Completed Wagers</h3>
                                                </div>
                                                <table>
                                                   <thead>
                                                      <tr>
                                                         <th>Bet Type</th>
                                                         <th># Bets</th>
                                                         <th>Amount</th>
                                                         <th>Win</th>
                                                         <th>Loss</th>
                                                         <th>Push</th>
                                                         <th>Win %</th>
                                                         <th>P/L</th>
                                                         <th>Return on Risk</th>
                                                      </tr>
                                                   </thead>
                                                   <tbody>
                                                      <tr>
                                                         <td data-column="Bet Type">TOT</td>
                                                         <td data-column="# Bets">0</td>
                                                         <td data-column="Amount"></td>
                                                         <td data-column="Win">0</td>
                                                         <td data-column="Loss">0</td>
                                                         <td data-column="Push">0</td>
                                                         <td data-column="Win %"></td>
                                                         <td data-column="P/L"></td>
                                                         <td data-column="Return on Risk"></td>
                                                      </tr>
                                                   </tbody>
                                                </table>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                   
                     <div id="main-content-section2" className="tab-pane fade">
                        <h3>Comming Soon</h3>
                     </div>
                     <div id="main-content-section3" className="tab-pane fade">
                        <h3>Comming Soon</h3>
                     </div>
                  </div>
               </div>
            </div>
        
         </div>
      </div>
      </div>
            </>
            );
        };
    }

    export default BetTracker;