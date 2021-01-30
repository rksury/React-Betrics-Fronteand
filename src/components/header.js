import React,{Component} from "react";


export class Header extends Component {
    render() {
        return ( 
            <>
             <nav className="navbar navbar-default main-header">
        <div className="container-fluid">
           <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" id="btn-nav" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              </button>
              <a href="#" className="siderbar-menu-btn">
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar "></span>
                  </a><a className="navbar-brand" href="#">DASHBOARD</a>
           </div>
           <div className="collapse navbar-collapse menu-hide-mobile navbar-tp-lft" >
              <ul className="nav navbar-nav navbar-right">
                 <li className="search-div">
                    <input type="" name="" placeholder=""></input>
                    <i className=" fas fa-search"></i>
                 </li>
                 <li className="bell-icon"><a href="#"><img src="img/bell.png"></img><span></span></a></li>
                 <li className="user">
                    <a href="#" className="img">Jones Ferdinand <img src="img/user-img.png"></img></a>
                 

                 <div className="porfile-div">
                    <ul>
                        <li><a href="#"><i className="fas fa-sign-out-alt"></i> Logout</a></li>
                    </ul>
                 </div>  
                 
                 </li>

              </ul>
           </div>
        </div>
     </nav>
    
     <div className="mobile-view-profile">
        <div className="left-div">
           <a href="https://www.google.com"><img src="img/bell.png"></img><span></span></a>
        </div>
        <div className="right-div">
           <a href="https://www.google.co" className="img">Jones Ferdinand <img src="img/user-img.png"></img></a>
           <a href="#" class="logout-profile"><i class="fas fa-sign-out-alt"></i></a>
        </div>
     </div>
     <div className="search-div mobile-serach-profile">
        <input type="" name="" placeholder="Search"></input>
        <i className="glyphicon glyphicon-search"></i>
     </div>
     <div className="clearfix"></div>
  
            </>
            );
        };
    }

    export default Header;