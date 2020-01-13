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
            q: ''
        }
    }
    componentDidMount() {
        const userId = localStorage.getItem('userId');
        if (userId) {
            this.setState({
                user: true
            })
            this.props.fetchUserDetails(userId);
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    toggleSearch = () => {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }

    search = (e) => {
        e.preventDefault();
        globals.createToast('Please wait', 2500, 'top');
        this.props.parableSearch(this.state.q);
        setTimeout(() => {
            this.setState({
                showSearch: false
            })
            this.props.history.push('/search');
        }, 2000);
    }

    startQuiz = () => {
        if(localStorage.getItem('userDetails')) {
            this.props.history.push('/quiz')
        } else {
            this.props.history.push('/login');
        }
    }

    logout = () => {
        localStorage.setItem('userToken', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('userDetails', '');
        window.location.reload();
    }

    render() {
        return (
            <>
                <section className="bar bar-3 bar--sm bg--secondary">
                    <div className={this.state.showSearch ? "search-cover slide-in" : 'hide'}>
                        <form onSubmit={this.search}>
                            <input type="text" name="search" placeholder="Enter search query and hit enter"
                                onChange={e => this.handleChange("q", e.target.value)} />
                        </form>
                        <div className="close" onClick={this.toggleSearch}>
                            <img src={require('../../assets/images/delete-close.svg')} alt="X"/>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="bar__module">
                                    <span className="type--fade">Nigeria culture never be gone; parables, quizes...</span>
                                </div>
                            </div>
                            <div className="col-lg-6 text-right text-left-xs text-left-sm">
                                <div className="bar__module">
                                    <ul className="menu-horizontal">
                                        <li className={this.state.user ? "user-img" : 'hide'}>
                                            <img src={require('../../assets/images/user.svg')} alt="" />
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "modal-instance" : 'hide'}>
                                                <Link to="/login" className="modal-trigger">Hi, {globals.capitalize(this.props.userDetails.name)}</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "modal-instance" : 'hide'} onClick={this.logout}>
                                                <b>Logout</b>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "hide" : 'modal-instance'}>
                                                <Link to="/login" className="modal-trigger">Login</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "hide" : 'modal-instance'}>
                                                <Link to="/register" className="modal-trigger">Create account</Link>
                                            </div>
                                        </li>
                                        <li>
                                            <div data-notification-link="search-box" onClick={this.toggleSearch}>
                                                <i className="stack-search"></i>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="nav-container">
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
                                <div className="col-lg-11 col-md-12 text-right text-left-xs text-left-sm mobile-menu-up">
                                    <div className="bar__module smallll">
                                        <ul className="menu-horizontal text-left">
                                            <li className="dropdown">
                                                <Link to="/">About</Link>
                                            </li>
                                            <li className="dropdown primary" onClick={this.startQuiz}>Start Quiz
                                                {/* <Link to="/quiz">Start Quiz</Link> */}
                                            </li>
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
    user: state.auth.user
})

export default connect(mapStateToProps, { fetchUserDetails, parableSearch })(withRouter(Header))
