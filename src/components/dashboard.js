import React, {Component} from "react";
import API from "../networking/api";


export class Dashboard extends Component {
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            book_data: [],
            weeks_data: [],
            odds_data: []
        }
        // this.weeks_on_click=this.weeks_on_click.bind(this)
    }

    componentDidMount() {
        let url = 'books'
        this.api.GetApi(url)
            .then((res) => {
                let response_data = JSON.parse(res.request.response)
                console.log('+++++----++++', response_data)
                if (res.status === 200 || 201) {
                    this.setState({book_data: response_data})
                } else if (res.request.status === 401) {
                    this.props.history.push('/login')
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);
            })

        this.getWeeks()
    }

    getWeeks() {
        let url = 'weeks'
        this.api.GetApi(url)
            .then((res) => {
                let response_data = JSON.parse(res.request.response)
                console.log('+++++----++++', response_data)
                if (res.status === 200 || 201) {
                    this.setState({weeks_data: response_data})
                } else if (res.request.status === 401) {
                    this.props.history.push('/login')
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);
            })
    }

    updateOdds() {
        let params = {}
        if (this.state.week) {
            params['week'] = this.state.week
        }
        if (this.state.book) {
            params['book'] = this.state.book
        }
        this.api.GetWithParamsApi('odds', params)
            .then((res) => {
                let response_data = JSON.parse(res.request.response)
                if (res.status === 200) {
                    this.setState({odds_data: response_data})
                } else if (res.request.status === 401) {
                    this.props.history.push('/login')
                } else {
                    console.log(res)
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    updateWeek(sequence) {
        this.setState({'week': sequence})
        this.updateOdds()
    }

    updateBook(book) {
        this.setState({'book': book})
        this.updateOdds()
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-3 left-sidebar collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <div className="row logo-div">
                            <img src="img/logo-img.png"></img>
                        </div>
                        <div className="menu-list">
                            <ul>
                                <li className="active"><a href="#"><i className="fas fa-chart-pie"></i> My Betrics</a>
                                </li>
                                <li><a href="#"><i className="fas fa-ticket-alt"></i> My Betrics</a></li>
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

                    <div className="col-md-10 content">

                        <nav className="navbar navbar-default main-header">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                            data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                        <span className="sr-only">Toggle navigation</span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                        <span className="icon-bar"></span>
                                    </button>
                                    <a className="navbar-brand" href="#">DASHBOARD</a>
                                </div>
                                <div className="collapse navbar-collapse menu-hide-mobile navbar-tp-lft">
                                    <ul className="nav navbar-nav navbar-right">
                                        <li className="search-div">
                                            <input type="" name="" placeholder=""></input>
                                            <i className=" fas fa-search"></i>
                                        </li>
                                        <li className="bell-icon"><a href="#"><img
                                            src="img/bell.png"></img><span></span></a></li>
                                        <li className="user"><a href="#" className="img">Jones Ferdinand <img
                                            src="img/user-img.png"></img></a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>

                        <div className="mobile-view-profile">
                            <div className="left-div">
                                <a href="https://www.google.com"><img src="img/bell.png"></img><span></span></a>
                            </div>
                            <div className="right-div">
                                <a href="https://www.google.co" className="img">Jones Ferdinand <img
                                    src="img/user-img.png"></img></a>
                            </div>
                        </div>
                        <div className="search-div mobile-serach-profile">
                            <input type="" name="" placeholder="Search"></input>
                            <i className="glyphicon glyphicon-search"></i>
                        </div>
                        <div className="clearfix"></div>

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
                                                <div className="img-div">
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

                                <div className="tab-content main-tab-content inside-tab">
                                    <div id="main-content-section" className="tab-pane tab-content fade in active">

                                        <ul className="nav nav-pills main-tab">
                                            <li className="active matchup-tab">
                                                <a data-toggle="pill" href="#matchup">Matchup</a>
                                            </li>
                                            <li className="">
                                                <a data-toggle="pill" href="#news">News</a>
                                            </li>
                                        </ul>

                                        <div id="matchup" className="matchup tab-pane fade in active">

                                            <div className="row">
                                                <div className="col-md-7 table-resposiv">
                                                    <div className="drop-down-div">
                                                        <div className="img-div">
                                                            <img src="img/white-icon1.png"></img>
                                                        </div>
                                                        <div className="dorpdown-img1">
                                                            <div className="dropdown">
                                                                <button className="btn dropdown-toggle" type="button"
                                                                        data-toggle="dropdown">
                                                                    <img src="img/drop-down-img1.png"/> Betrics Bucks
                                                                    <span className="fas fa-angle-down"/></button>
                                                                <ul className="dropdown-menu">
                                                                    {this.state.book_data.map(book => (
                                                                        <li><a
                                                                            onClick={() => this.updateBook(book.name)}><img
                                                                            src="img/drop-down-img2.png"/>{book.name}
                                                                        </a></li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="dorpdown-img1">
                                                            <div className="dropdown">
                                                                <button className="btn dropdown-toggle" type="button"
                                                                        data-toggle="dropdown"><img
                                                                    src="img/cal.png"/> Conference Championships
                                                                    <span className="fas fa-angle-down"/></button>
                                                                <ul className="dropdown-menu">
                                                                    {this.state.weeks_data.map(weeks => (
                                                                        <li><a
                                                                            onClick={() => this.updateWeek(weeks.sequence)}>{weeks.title_verbose}</a>
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="button-div">
                                                            <button>Bet Queue <span>2</span></button>
                                                        </div>
                                                    </div>

                                                    {this.state.odds_data.map(odds_data => (
                                                        <div className="block-div">
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
                                                                {odds_data.event.competitors.map(competitor => (
                                                                    <tr>
                                                                        <td data-column="Matchup"><img
                                                                            src="img/table-img3.png"></img><span>{competitor.name}</span>
                                                                        </td>
                                                                        <td data-column="Open">045.0</td>
                                                                        <td data-column="Spead(Odds)"
                                                                            className="bg-block"><span
                                                                            className="first-text">+6.5 <span
                                                                            className="second-text">(-115)</span></span>
                                                                        </td>
                                                                        <td data-column="Money(Impl%"
                                                                            className="bg-block"><span
                                                                            className="first-text">+6.5 <span
                                                                            className="second-text">(-115)</span></span>
                                                                        </td>
                                                                        <td data-column="Total(Odds)"
                                                                            className="bg-block"><span
                                                                            className="first-text">+6.5 <span
                                                                            className="second-text">(-115)</span></span>
                                                                        </td>
                                                                        <td data-column="Score"></td>
                                                                    </tr>
                                                                ))}
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
                                                        </div>))}
                                                </div>
                                                <div className="col-md-5 table-resposiv left-table">
                                                    <div className="right-drop-down">
                                                        <div className="drop-down-div">
                                                            <div className="select-drop">
                                                                <select className="First-menu" id="First-menu">
                                                                    <option value="Decision Engine">Decision Engine
                                                                    </option>
                                                                    <option value="Decision Engine">Decision Engine
                                                                    </option>
                                                                    <option value="Team Stats">Team Stats</option>
                                                                    <option value="None">None</option>
                                                                </select>
                                                            </div>
                                                            <div className="select-drop displaynone" id="records-div">
                                                                <select className="First-menu" id="records">
                                                                    <option value="Records">Records</option>
                                                                    <option value="Records">Records</option>
                                                                    <option value="Scoring">Scoring</option>
                                                                </select>
                                                            </div>
                                                            <div className="select-drop" id="predicted-div">
                                                                <select className="First-menu" id="predicted">
                                                                    <option value="Predicted Lines">Predicted Lines
                                                                    </option>
                                                                    <option value="Confidence">Confidence %</option>
                                                                    <option value="Edge">Edge %</option>
                                                                </select>
                                                            </div>
                                                            <div className="select-drop" id="my-decision-div">
                                                                <select className="First-menu" id="my-decision">
                                                                    <option value="My Decision Engine">My Decision
                                                                        Engine
                                                                    </option>
                                                                    <option value="My Decision Engine">My Decision
                                                                        Engine
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div className="filter-option">
                                                                <a href="#"><i className=" fas fa-sliders-h"></i></a>
                                                            </div>
                                                            <div className="clearfix"></div>
                                                        </div>
                                                        <div className="right-button-div">
                                                            <button>RUN ENGINE</button>
                                                        </div>
                                                    </div>
                                                    <div className="block-div by-defult">
                                                        <table>
                                                            <thead>
                                                            <tr>
                                                                <th>Pred Score</th>
                                                                <th>Spread</th>
                                                                <th>Win</th>
                                                                <th>Total</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td data-column="Pred Score">22.0</td>
                                                                <td data-column="Spread" className="bg-block"><span
                                                                    className="first-text">4.2</span></td>
                                                                <td data-column="Win" className="bg-block"><span
                                                                    className="first-text"><span
                                                                    className="second-text">37.4%</span></span></td>
                                                                <td data-column="Total" className="bg-block"><span
                                                                    className="first-text"><span
                                                                    className="second-text">o48.2</span></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="Pred Score">22.0</td>
                                                                <td data-column="Spread" className="bg-block"><span
                                                                    className="first-text">-4.2 </span></td>
                                                                <td data-column="Win" className="bg-block"><span
                                                                    className="first-text">62.6%</span></td>
                                                                <td data-column="Total" className="bg-block"><span
                                                                    className="first-text">u48.2</span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>

                                                    <div className="block-div by-defult">
                                                        <table>
                                                            <thead>
                                                            <tr>
                                                                <th>Pred Score</th>
                                                                <th>Spread</th>
                                                                <th>Win</th>
                                                                <th>Total</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody>
                                                            <tr>
                                                                <td data-column="Pred Score">22.0</td>
                                                                <td data-column="Spread" className="bg-block"><span
                                                                    className="first-text">4.2</span></td>
                                                                <td data-column="Win" className="bg-block"><span
                                                                    className="first-text"><span
                                                                    className="second-text">37.4%</span></span></td>
                                                                <td data-column="Total" className="bg-block"><span
                                                                    className="first-text"><span
                                                                    className="second-text">o48.2</span></span></td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="Pred Score">22.0</td>
                                                                <td data-column="Spread" className="bg-block"><span
                                                                    className="first-text">-4.2 </span></td>
                                                                <td data-column="Win" className="bg-block"><span
                                                                    className="first-text">62.6%</span></td>
                                                                <td data-column="Total" className="bg-block"><span
                                                                    className="first-text">u48.2</span></td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="block-div records record displaynone" id="records">
                                                        <table>
                                                            <thead>
                                                            <tr>
                                                                <th>TB</th>
                                                                <th></th>
                                                                <th>GB</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="records-table">
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span
                                                                    className="team">Straight Up</span></td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span className="team">ATS</span>
                                                                </td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span
                                                                    className="team">Diff vs Spread</span></td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span
                                                                    className="team">Diff vs Spread</span></td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span
                                                                    className="team">Diff vs O/U</span></td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="block-div scoring record displaynone" id="scoring">
                                                        <table>
                                                            <thead>
                                                            <tr>
                                                                <th>TB</th>
                                                                <th></th>
                                                                <th>GB</th>
                                                            </tr>
                                                            </thead>
                                                            <tbody className="records-table">
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span
                                                                    className="team">Points For</span></td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span
                                                                    className="team">Points Against</span></td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span className="team">1st Half Pts For</span>
                                                                </td>
                                                                <td data-column="GB">13-3</td>
                                                            </tr>
                                                            <tr>
                                                                <td data-column="TB">22.0</td>
                                                                <td data-column=""><span className="team">1st Half Pts Vs</span>
                                                                </td>
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
                                                                    Davante Adams is in spellbinding sync with Aaron
                                                                    Rodgers as... </p>
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
                                                                    Davante Adams is in spellbinding sync with Aaron
                                                                    Rodgers as... </p>
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
                                                                    Davante Adams is in spellbinding sync with Aaron
                                                                    Rodgers as... </p>
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
                                                                    Davante Adams is in spellbinding sync with Aaron
                                                                    Rodgers as... </p>
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
                                                                    Davante Adams is in spellbinding sync with Aaron
                                                                    Rodgers as... </p>
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
                                                                    Davante Adams is in spellbinding sync with Aaron
                                                                    Rodgers as... </p>
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