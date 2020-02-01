import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom';
import { fetchUserDetails } from '../../actions/auth';
import { parableSearch } from '../../actions/parables';
import globals from '../../globals';

export class Header extends Component {
    constructor() {
        super()
        this.state = {
            user: false,
            showSearch: false,
            showQuizbtn: true,
            q: '',
            resultts: true,
            initSearch: false,
            showMenu: false,
            loading: false
        }
    }
    componentDidMount() {
        if (this.props.location.pathname === '/quiz') {
            this.setState({
                showQuizbtn: false
            })
        }
        const userId = localStorage.getItem('userId');
        console.log(userId, 'userID');
        if (userId) {
            this.setState({
                user: true
            })
            this.props.fetchUserDetails(this.props, userId);
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
        this.setState({
            loading: true
        })
        this.search();
    };

    toggleSearch = () => {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }

    toggleMenu = () => {
        this.setState({
            showMenu: !this.state.showMenu
        })
    }

    search = () => {
        this.setState({
            initSearch: true
        })
        this.setState({
            loading: false
        })
        this.props.parableSearch(this.state.q);
    }

    startQuiz = () => {
        if (localStorage.getItem('userDetails') && localStorage.getItem('userId')) {
            this.props.history.push('/quiz')
        } else {
            this.props.history.push('/login');
        }
    }

    doNothing = (e) => {
        e.preventDefault();
        return;
    }

    seeDetails = (id) => {
        this.props.history.push(`/parable-details/${id}`);
        window.location.reload();
    }

    logout = () => {
        localStorage.setItem('userToken', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('userDetails', '');
        window.location.reload();
    }
    closeResult = () => {
        this.setState({
            resultts: false
        })
    }

    render() {
        let results = [];
        if (this.props.qResult[0]) {
            this.props.qResult[0].forEach((q, i) => {
                results.push(
                    <li className="item" key={i} onClick={this.toggleSearch}>
                        <div onClick={e => this.seeDetails(q._id)} className="search-result">
                            <div className="img">
                                <img src={q.file.Location} alt="X" />
                            </div>
                            <div className="details">
                                <div className="parable">{q.title}</div>
                                <div className="translate" dangerouslySetInnerHTML={{ __html: globals.trimSearch(q.translation) }}></div>
                            </div>
                        </div>
                    </li>
                )
            })
        }
        return (
            <>
                <div className='data-loading'>
                    <img src={require("../../assets/images/spinner.svg")} className={this.state.loading && !this.props.qResult[0] ? 'loader-img' : 'hide'} alt="+" />
                </div>
                <section className="bar bar-3 bar--sm">
                    <div className={this.state.resultts ? "search-results slide-in" : "hide"}>
                        <ul className="list-container">
                            {this.props.qResult[0] ?
                                results
                                :
                                ''
                            }
                        </ul>
                        <div className={this.props.qResult[0] ? "imgg" : "hide"} onClick={this.closeResult}>
                            <img src={require('../../assets/images/delete-close.svg')} alt="X" />
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bar__module">
                                    <span className="type-- d-block mt-2">Rediscovering the Nigerian heritage</span>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right text-left-xs text-left-sm">
                                <form onSubmit={this.doNothing}>
                                    <input type="text" name="search" placeholder="Enter search query"
                                        onKeyUp={e => this.handleChange("q", e.target.value)} />
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="nav-container new-bg">
                    <nav id="menu1" className="bar bar--sm bar-1">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-1 col-md-2">
                                    <div className="bar__module">
                                        <Link to="/">
                                            <img className="logo logo-dark logo-header" alt="logo" src={require('../../assets/images/logo.png')} />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-lg-11 col-md-10 text-right text-left-xs text-left-sm mobile-menu-up">
                                    <div className="bar__module smallll">
                                        <ul className="menu-horizontal text-left">
                                            <li className={this.state.user ? "visibility-none" : 'dropdown'}>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li className={this.state.user ? "visibility-none" : 'dropdown'}>
                                                <Link to="/register">Register</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="/leaderboard">Leaderboard</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li className="dropdown start" onClick={this.startQuiz}>
                                                Start Quiz
                                            </li>
                                            {/* <li className={this.state.showQuizbtn ? "dropdown primary" : 'visibility-none'} onClick={this.startQuiz}>Start Quiz
                                            </li> */}
                                            {/* <li className={this.state.user && this.props.userDetails && this.props.userDetails.gender === 'male' ? "user-img" : 'hide'}>
                                                <img src={require('../../assets/images/male.svg')} alt="" />
                                            </li>
                                            <li className={this.state.user && this.props.userDetails && this.props.userDetails.gender === 'female' ? "user-img" : 'hide'}>
                                                <img src={require('../../assets/images/female.svg')} alt="" />
                                            </li>
                                            <li className={this.state.user && this.props.userDetails && !this.props.userDetails.gender ? "user-img" : 'hide'}>
                                                <img className={this.props.userDetails && this.props.userDetails.gender === 'male' ? '' : 'hide'} src={require('../../assets/images/male.svg')} alt="" />
                                            </li> */}
                                            <li>
                                                <div className={this.state.user ? "small start" : 'hide'}>
                                                    <p className="start">Hi, {globals.capitalize(this.props.userDetails.name)}</p>
                                                </div>
                                            </li>
                                            <li className="dropdown">
                                                <div className={this.state.user ? "small start logoout" : 'hide'} onClick={this.logout}>
                                                    <b>Logout</b>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <img className="menu-mobile" alt="logo" onClick={this.toggleMenu} src={require('../../assets/images/menu-mobile.svg')} />
                                    <div className={this.state.showMenu ? "bar__module mobile slide-in" : "hide"}>
                                        <ul className="mobile-menu">
                                            <li className={this.state.user ? "hide" : 'dropdown'}>
                                                <Link to="/login">Login</Link>
                                            </li>
                                            <li className={this.state.user ? "hide" : 'dropdown'}>
                                                <Link to="/register">Register</Link>
                                            </li>
                                            <li className={this.state.user ? "dropdown" : 'hide'}>
                                                <Link to="/leaderboard">Leaderboard</Link>
                                            </li>
                                            <li className="dropdown">
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li className="dropdown" onClick={this.startQuiz}>
                                                Start Quiz
                                            </li>
                                            {/* <li className={this.state.showQuizbtn ? "dropdown primary" : 'visibility-none'} onClick={this.startQuiz}>Start Quiz
                                            </li> */}
                                            {/* <li className={this.state.user && this.props.userDetails && this.props.userDetails.gender === 'male' ? "user-img" : 'hide'}>
                                                <img src={require('../../assets/images/male.svg')} alt="" />
                                            </li>
                                            <li className={this.state.user && this.props.userDetails && this.props.userDetails.gender === 'female' ? "user-img" : 'hide'}>
                                                <img src={require('../../assets/images/female.svg')} alt="" />
                                            </li>
                                            <li className={this.state.user && this.props.userDetails && !this.props.userDetails.gender ? "user-img" : 'hide'}>
                                                <img className={this.props.userDetails && this.props.userDetails.gender === 'male' ? '' : 'hide'} src={require('../../assets/images/male.svg')} alt="" />
                                            </li> */}
                                            <div className="flex-us">
                                                <li>
                                                    <div className={this.state.user ? "small" : 'hide'}>
                                                        <p className="modal-trigger">Hi, {globals.capitalize(this.props.userDetails.name)}</p>
                                                    </div>
                                                </li>
                                                <li className="dropdown">
                                                    <div className={this.state.user ? "small logoout" : 'hide'} onClick={this.logout}>
                                                        <b>Logout</b>
                                                    </div>
                                                </li>
                                            </div>
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
    userDetails: state.auth.userDetails,
    qResult: state.parables.qResult,
    user: state.auth.user
})

export default connect(mapStateToProps, { fetchUserDetails, parableSearch })(withRouter(Header))
