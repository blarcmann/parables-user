import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';

export class Header extends Component {

    render() {
        return (
            <>
                <section className="bar bar-3 bar--sm bg--secondary">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bar__module">
                                    <span className="type--fade">Yoruba culture never be gone; parables, quizes...</span>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right text-left-xs text-left-sm">
                                <div className="bar__module">
                                    <ul className="menu-horizontal">
                                        <li>
                                            <div className="modal-instance">
                                                <Link to="/login" className="modal-trigger">Login</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="modal-instance">
                                                <Link to="/register" className="modal-trigger">Create account</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="http://google.com" data-notification-link="search-box">
                                                <i className="stack-search"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="nav-container">
                    <div className="bar bar--sm visible-xs">
                        <div className="container">
                            <div className="row">
                                <div className="col-3 col-md-2">
                                    <a href="index.html">
                                        <img className="logo logo-dark" alt="logo" src="img/logo-dark.png" />
                                        <img className="logo logo-light" alt="logo" src="img/logo-light.png" />
                                    </a>
                                </div>
                                <div className="col-9 col-md-10 text-right">
                                    <a href="." className="hamburger-toggle">
                                        <i className="icon icon--sm stack-interface stack-menu"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav id="menu1" className="bar bar--sm bar-1 hidden-xs ">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-2 hidden-xs">
                                    <div className="bar__module">
                                        <a href="index.html">
                                            <img className="logo logo-dark" alt="logo" src={require('../../assets/images/logo.png')} />
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm">
                                    <div className="bar__module">
                                        <ul className="menu-horizontal text-left">
                                            <li className="dropdown">Start Quiz</li>
                                            <li className="dropdown">About</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps, {})(Header)
