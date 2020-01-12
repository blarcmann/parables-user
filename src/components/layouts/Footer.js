import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Footer extends Component {

    render() {
        return (
            <>

                <footer className="space--xs footer-1 text-center-xs ">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="list-inline list--hover">
                                    {/* <li>
                                        <a href="http://google.com">
                                            <span>Our Company</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com">
                                            <span>Locations</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com">
                                            <span>Products</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com">
                                            <span>Work With Us</span>
                                        </a>
                                    </li> */}
                                </ul>
                            </div>
                            <div className="col-md-6 text-right text-center-xs">
                                <ul className="social-list list-inline list--hover">
                                    <li>
                                        <a href="http://google.com">
                                            <i className="socicon socicon-google icon icon--xs"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com">
                                            <i className="socicon socicon-twitter icon icon--xs"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com">
                                            <i className="socicon socicon-facebook icon icon--xs"></i>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="http://google.com">
                                            <i className="socicon socicon-instagram icon icon--xs"></i>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                {/* <img className="logo logo-dark" alt="logo" src={require('../../assets/images/logo.png')} /> */}
                                <span className="type--fine-print">&copy;
                            <span className="update-year"></span> Parablues Inc.</span>
                            </div>
                        </div>
                    </div>
                </footer>

            </>
        )
    }
}


const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, {})(Footer)
