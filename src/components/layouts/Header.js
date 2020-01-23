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
            initSearch: false
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
        let splitted = this.state.q;
        let qrr = splitted.split('');
        if(qrr.length > 1) {
            this.search();
        }
    };

    toggleSearch = () => {
        this.setState({
            showSearch: !this.state.showSearch
        })
    }

    search = () => {
        globals.createToast('Please wait', 1500, 'bottom-right');
        this.setState({
            initSearch: true
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

    seeDetails  = (id) => {
        this.props.history.push(`/parable-details/${id}`);
        window.location.reload();
    }

    logout = () => {
        localStorage.setItem('userToken', '');
        localStorage.setItem('userId', '');
        localStorage.setItem('userDetails', '');
        window.location.reload();
    }

    render() {
        let results = [];
        if (this.props.qResult[0]) {
            this.props.qResult[0].forEach((q, i) => {
                results.push(
                    // <li className="item" key={i} onClick={this.toggleSearch}>
                    //     <Link to={`/parable-details/${q._id}`} dangerouslySetInnerHTML={{ __html: globals.trimSearch(q.translation) }}></Link>
                    // </li>
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
                <section className="bar bar-3 bar--sm bg--secondary">
                    <div className={this.state.showSearch ? "search-cover slide-in" : 'hide'}>
                        <form onSubmit={this.doNothing}>
                            <input type="text" name="search" placeholder="Enter search query and hit enter"
                                onKeyUp={e => this.handleChange("q", e.target.value)} />
                        </form>
                        <div className="close" onClick={this.toggleSearch}>
                            <img src={require('../../assets/images/delete-close.svg')} alt="X" />
                        </div>
                    </div>
                    <div className={this.state.showSearch ? "search-results slide-in" : 'hide'}>
                        <ul className="list-container">
                            {this.props.qResult[0] ?
                                results
                                :
                                ''
                            }
                            {/* <li className="item">
                                <Link to={`/parable-details/`} className="search-result">
                                    <div className="img">
                                        <img src={require('../../assets/images/delete-close.svg')} alt="X" />
                                    </div>
                                    <div className="details">
                                        <div className="parable">This is the height of the fall of the decadent of evil</div>
                                        <div className="translate">To ba wun ee, koo lo si lile baba taju, to ba wun ee, koo ma lo, iwo lo mo.</div>
                                    </div>
                                </Link>
                            </li> */}
                        </ul>
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
                                        <li className={this.state.user && this.props.userDetails && this.props.userDetails.gender === 'male' ? "user-img" : 'hide'}>
                                            <img src={require('../../assets/images/male.svg')} alt="" />
                                        </li>
                                        <li className={this.state.user && this.props.userDetails && this.props.userDetails.gender === 'female' ? "user-img" : 'hide'}>
                                            <img src={require('../../assets/images/female.svg')} alt="" />
                                        </li>
                                        <li className={this.state.user && this.props.userDetails && !this.props.userDetails.gender ? "user-img" : 'hide'}>
                                            <img className={this.props.userDetails && this.props.userDetails.gender === 'male' ? '' : 'hide'} src={require('../../assets/images/male.svg')} alt="" />
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "modal-instance" : 'hide'}>
                                                <p className="modal-trigger">Hi, {globals.capitalize(this.props.userDetails.name)}</p>
                                            </div>
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "modal-instance" : 'hide'} onClick={this.logout}>
                                                Logout
                                            </div>
                                        </li>
                                        <li>
                                            <div className={this.state.user ? "modal-instance" : 'hide'}>
                                                <b><Link to='/leaderboard'>Leaderboard</Link></b>
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
                                                <Link to="/about">About</Link>
                                            </li>
                                            <li className={this.state.showQuizbtn ? "dropdown primary" : 'visibility-none'} onClick={this.startQuiz}>Start Quiz
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
    qResult: state.parables.qResult,
    user: state.auth.user
})

export default connect(mapStateToProps, { fetchUserDetails, parableSearch })(withRouter(Header))
