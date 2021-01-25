import React,{Component} from "react";
import logo from '../images/logo.png'
import API from "../networking/api";



export class Step3 extends Component {
    api = new API()

    constructor(props){
        super(props);
        this.state= {
            data:[],
        }
    }


    componentDidMount() {
        let url = 'book'
        this.api.GetApi(url)
            .then((res) => {
                let response_data = JSON.parse(res.request.response)
                console.log('+++++----++++', response_data)
                if (res.status === 200 || 201) {
                    this.setState({data: response_data})
                }
                else if (res.request.status === 401) {
                    this.props.history.push('/login')
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
                <div className="navtigation">
                    <a> <img src={logo} alt="logo"/></a>
                </div>
                <div className="container layout">
                    <h3>STEP 3/4</h3>
                    <h4>Sportsbook selection</h4>
                    <p>Select the sportsbooks you would like  to use with Betrics. <br/> You can add/remove this later    </p>
                    <div className="product-div" >
                        <div className="row">
                   
            <div class="col-md-4">
				<div class="block">
					<div class="img-div">
						<img src="img/pro4.png"></img>
					</div>
					<div class="rate">
						<p><span class="star"><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="far fa-star"></i></span></p>
					</div>
					<div class="btn-divv">
						<div class="text-div">
							<h3>Grays Sports Almanac</h3>
						<p>Almanac from the Future</p>
						</div>
						<div class="sub-div">
							<button>Add Book</button>
						</div>
					</div>
				</div>
			</div>
                            {this.state.data.map(book => (
                                <div className="col-md-4">
                                    <div className="block">
                                        <div className="img-div img-card">
                                            <img src={book.image} alt="logo"/>
                                        </div>
                                        <div className="rate">
                                            <p><span className="star">
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star"/>
                                                <i className="fa fa-star-half-o"/>
                                            </span>
                                                <span className="price-div">
                                    <span className="price">
                                        <i className="	fa fa-dollar"/>10 Months</span>
                                                    {}
                                                    <span className="free">{book.price === 0 ? 'Free'
                                                        : book.price }</span></span></p>
                                        </div>
                                        <div className="btn-divv">
                                            <div className="text-div">
                                                <h3>{book.title}</h3>
                                                <p>{book.published_by}</p>
                                            </div>
                                            <div className="sub-div">
                                                <button>Add Book</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="btn-div text-center">
                        <button className="btn-pre" onClick={()=> this.props.history.push('/step')}><i className="fa fa-arrow-left"/>Back</button>
                        <button className="btn btn-next" type={"submit"} onClick={this.get_books}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}
