import React, {Component} from "react";
import logo from '../images/logo.png'
import API from "../networking/api";


export class Step3 extends Component {
    api = new API()

    constructor(props) {
        super(props);
        this.state = {
            data: [],
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

    render() {
        return (
            <div>
                <div className="navtigation">
                    <a> <img src={logo} alt="logo"/></a>
                </div>
                <div className="container layout">
                    <h3>STEP 3/4</h3>
                    <h4>Sportsbook selection</h4>
                    <p>Select the sportsbooks you would like to use with Betrics. <br/> You can add/remove this later
                    </p>

                    <div className="product-div">
                        <div className="row">
                            {this.state.data.map(book => (
                                <div className="col-md-4">
                                    <div className="block">
                                        <div className="img-div">
                                            <img src={book.image}/>
                                        </div>
                                        <div className="rate">
                                            <p><span className="star">
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/>
                                            <i className="fas fa-star"/><i className="far fa-star"/></span></p>
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
                        <button className="btn-pre" onClick={() => this.props.history.push('/step')}><i
                            className="fa fa-arrow-left"/>Back
                        </button>
                        <button className="btn btn-next" type={"submit"} onClick={this.get_books}>Next</button>
                    </div>
                </div>
            </div>
        );
    }
}
