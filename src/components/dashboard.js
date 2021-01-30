import React,{Component} from "react";
import Header from "./header";
import Sidebar from "./sidebar";
export class Dashboard extends Component {
    render() {
        return (
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
                      
                        <ul className="nav nav-pills main-tab">
                           <li className="active matchup-tab">
                              <a data-toggle="pill" href="#matchup">Matchup</a>
                           </li>
                           <li className="arrow">
                              <a data-toggle="pill" href="#news" className="arrow-a"><i className="fas fa-angle-double-left"></i>News</a>
                           </li>
                        </ul>
                       
                        <div id="matchup" className="matchup tab-pane fade in active">
                           
                           <div className="row">
                              <div className="col-md-7 table-resposiv">
                              	<div className="drop-down-div">
                                    <div className="img-div">
                                       <img src="img/white-icon1.png"></img>
                                    </div>
                                    <div className="dorpdown-img1 ">
                                       <div className="dropdown">
                                          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown"><img src="img/drop-down-img1.png"></img> Betrics Bucks 
                                          <span className="fas fa-angle-down"></span></button>
                                          <ul className="dropdown-menu">
                                             <li><a href="#"><img src="img/drop-down-img2.png"></img>Unibet </a></li>
                                             <li><a href="#"><img src="img/drop-down-img3.png"></img> Caesars New Jersey</a></li>
                                             <li><a href="#"><img src="img/drop-down-img4.png"></img>DraftKings</a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="dorpdown-img1 dorpdown-img2">
                                       <div className="dropdown">
                                          <button className="btn dropdown-toggle" type="button" data-toggle="dropdown"><img src="img/cal.png"></img> Conference Championships
                                          <span className="fas fa-angle-down"></span></button>
                                          <ul className="dropdown-menu">
                                             <li><a href="#">Week 17 </a></li>
                                             <li><a href="#">Wild Card Round </a></li>
                                             <li><a href="#">Divisional Round </a></li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className="button-div">
                                       <button>Bet Queue <span>2</span></button>
                                    </div>
                                 </div>
                                 <div className="block-div" >
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Matchup</th>
                                             <th>Open</th>
                                             <th>Spead(Odds)</th>
                                             <th>Money(Impl%)</th>
                                             <th>Total(Odds)</th>
                                             <th>Score</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td data-column="Matchup"><img src="img/table-img1.png"></img><span>Los Angeles Rams</span></td>
                                             <td data-column="Open">045.0</td>
                                             <td data-column="Spead(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Money(Impl%" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Total(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Score"></td>
                                          </tr>
                                          <tr>
                                             <td data-column="Matchup"><img src="img/table-img2.png"></img><span>Green Bay Packers</span></td>
                                             <td data-column="Open">-7.0</td>
                                             <td data-column="Spead(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Money(Impl%)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Total(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Score"></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <div className="time-button-div">
                                       <div className="row">
                                          <div className="col-md-6 col-sm-6  text">
                                             <p><span>Jan 18, 2021 at 1:35 am</span></p>
                                          </div>
                                          <div className="col-md-5 col-sm-6  button-div">
                                             <button>WAR ROOM</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>

                                 <div className="block-div" >
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Matchup</th>
                                             <th>Open</th>
                                             <th>Spead(Odds)</th>
                                             <th>Money(Impl%)</th>
                                             <th>Total(Odds)</th>
                                             <th>Score</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td data-column="Matchup"><img src="img/table-img3.png"></img><span>Baltimore Ravens</span></td>
                                             <td data-column="Open">045.0</td>
                                             <td data-column="Spead(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Money(Impl%" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Total(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Score"></td>
                                          </tr>
                                          <tr>
                                             <td data-column="Matchup"><img src="img/table-img4.png"></img><span>Buffalo Bills</span></td>
                                             <td data-column="Open">-7.0</td>
                                             <td data-column="Spead(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Money(Impl%)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Total(Odds)" className="bg-block"><span className="first-text">+6.5 <span className="second-text">(-115)</span></span></td>
                                             <td data-column="Score"></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                    <div className="time-button-div">
                                       <div className="row">
                                          <div className="col-md-6 col-sm-6  text">
                                             <p><span>Jan 18, 2021 at 1:35 am</span></p>
                                          </div>
                                          <div className="col-md-5 col-sm-6  button-div">
                                             <button>WAR ROOM</button>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div className="col-md-5 table-resposiv left-table">
                              	<div className="right-drop-down">
                                 <div className="drop-down-div">
                                    <div className="select-drop">
                                       <select className="First-menu" id="First-menu">
                                          <option value="Decision Engine">Decision Engine</option>
                                          <option value="Decision Engine">Decision Engine</option>
                                          <option value="Team Stats">Team Stats</option>
                                          <option value="None">None</option>
                                       </select>
                                    </div>
                                    <div className="select-drop displaynone" id="records-div" >
                                       <select className="First-menu" id="records">
                                          <option value="Records">Records</option>
                                          <option value="Records">Records</option>
                                          <option value="Scoring">Scoring</option>
                                       </select>
                                    </div>
                                    <div className="select-drop" id="predicted-div">
                                       <select className="First-menu" id="predicted">
                                          <option value="Predicted Lines">Predicted Lines</option>
                                          <option value="Confidence">Confidence %</option>
                                          <option value="Edge">Edge %</option>
                                       </select>
                                    </div>
                                    <div className="select-drop" id="my-decision-div">
                                       <select className="First-menu" id="my-decision">
                                          <option value="My Decision Engine">My Decision Engine</option>
                                          <option value="My Decision Engine">My Decision Engine</option>
                                       </select>
                                    </div>
                                    <div className="filter-option">
                                       <a href="#"><i className=" fas fa-sliders-h"></i></a>
                                    </div>
                                    <div className="right-button-div">
                                    <button>RUN ENGINE</button>
                                 </div>
                                    <div className="clearfix"></div>
                                 </div>
                                
                              </div>
                                 <div className="block-div by-defult" >
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Pred Score</th>
                                             <th>Spread </th>
                                             <th>Win</th>
                                             <th>Total</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td data-column="Pred Score">22.0</td>
                                             <td data-column="Spread" className="bg-block"><span className="first-text">4.2</span></td>
                                             <td data-column="Win" className="bg-block"><span className="first-text"><span className="second-text">37.4%</span></span></td>
                                             <td data-column="Total" className="bg-block"><span className="first-text"><span className="second-text">o48.2</span></span></td>
                                          </tr>
                                          <tr>
                                             <td data-column="Pred Score">22.0</td>
                                             <td data-column="Spread" className="bg-block"><span className="first-text">-4.2 </span></td>
                                             <td data-column="Win" className="bg-block"><span className="first-text">62.6%</span></td>
                                             <td data-column="Total" className="bg-block"><span className="first-text">u48.2</span></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>

                                 <div className="block-div by-defult">
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>Pred Score</th>
                                             <th>Spread </th>
                                             <th>Win</th>
                                             <th>Total</th>
                                          </tr>
                                       </thead>
                                       <tbody>
                                          <tr>
                                             <td data-column="Pred Score">22.0</td>
                                             <td data-column="Spread" className="bg-block"><span className="first-text">4.2</span></td>
                                             <td data-column="Win" className="bg-block"><span className="first-text"><span className="second-text">37.4%</span></span></td>
                                             <td data-column="Total" className="bg-block"><span className="first-text"><span className="second-text">o48.2</span></span></td>
                                          </tr>
                                          <tr>
                                             <td data-column="Pred Score">22.0</td>
                                             <td data-column="Spread" className="bg-block"><span className="first-text">-4.2 </span></td>
                                             <td data-column="Win" className="bg-block"><span className="first-text">62.6%</span></td>
                                             <td data-column="Total" className="bg-block"><span className="first-text">u48.2</span></td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <div className="block-div records record displaynone" id="records" >
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>TB</th>
                                             <th> </th>
                                             <th>GB</th>
                                          </tr>
                                       </thead>
                                       <tbody className="records-table">
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">Straight Up</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">ATS</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">Diff vs Spread</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">Diff vs Spread</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">Diff vs O/U</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                                 <div className="block-div scoring record displaynone" id="scoring" >
                                    <table>
                                       <thead>
                                          <tr>
                                             <th>TB</th>
                                             <th> </th>
                                             <th>GB</th>
                                          </tr>
                                       </thead>
                                       <tbody className="records-table">
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">Points For</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">Points Against</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">1st Half Pts For</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                          <tr>
                                             <td data-column="TB">22.0</td>
                                             <td data-column="" ><span className="team">1st Half Pts Vs</span></td>
                                             <td data-column="GB">13-3</td>
                                          </tr>
                                       </tbody>
                                    </table>
                                 </div>
                              </div>
                           </div>
                        </div>
                      
                        <div id="news" className="tab-pane newss fade">
                           
                           <div className="block">
                              <div className="row">
                                <div className="col-md-12 head">
                                  <h3>What’s happening</h3>
                                </div>
                              </div>
                              <div className="news-div">
                                <div className="row">
                                  <div className="col-md-4 img-div">
                                    <div className="">
                                      <img src="img/news-img1.png"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-8 content-div">
                                    <div className="">
                                      <h3>How Davnte Adams became an aaron Rodgers... </h3>
                                      <p>Whether it's cosmic chemistry or photographic memory, 
Davante Adams is in spellbinding sync with Aaron Rodgers as... </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="news-div">
                                <div className="row">
                                  <div className="col-md-4 img-div">
                                    <div className="">
                                      <img src="img/news-img1.png"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-8 content-div">
                                    <div className="">
                                      <h3>How Davnte Adams became an aaron Rodgers... </h3>
                                      <p>Whether it's cosmic chemistry or photographic memory, 
Davante Adams is in spellbinding sync with Aaron Rodgers as... </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="news-div">
                                <div className="row">
                                  <div className="col-md-4 img-div">
                                    <div className="">
                                      <img src="img/news-img1.png"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-8 content-div">
                                    <div className="">
                                      <h3>How Davnte Adams became an aaron Rodgers... </h3>
                                      <p>Whether it's cosmic chemistry or photographic memory, 
Davante Adams is in spellbinding sync with Aaron Rodgers as... </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="news-div">
                                <div className="row">
                                  <div className="col-md-4 img-div">
                                    <div className="">
                                      <img src="img/news-img1.png"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-8 content-div">
                                    <div className="">
                                      <h3>How Davnte Adams became an aaron Rodgers... </h3>
                                      <p>Whether it's cosmic chemistry or photographic memory, 
Davante Adams is in spellbinding sync with Aaron Rodgers as... </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="news-div">
                                <div className="row">
                                  <div className="col-md-4 img-div">
                                    <div className="">
                                      <img src="img/news-img1.png"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-8 content-div">
                                    <div className="">
                                      <h3>How Davnte Adams became an aaron Rodgers... </h3>
                                      <p>Whether it's cosmic chemistry or photographic memory, 
Davante Adams is in spellbinding sync with Aaron Rodgers as... </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="news-div">
                                <div className="row">
                                  <div className="col-md-4 img-div">
                                    <div className="">
                                      <img src="img/news-img1.png"></img>
                                    </div>
                                  </div>
                                  <div className="col-md-8 content-div">
                                    <div className="">
                                      <h3>How Davnte Adams became an aaron Rodgers... </h3>
                                      <p>Whether it's cosmic chemistry or photographic memory, 
Davante Adams is in spellbinding sync with Aaron Rodgers as... </p>
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
        );
    };
}