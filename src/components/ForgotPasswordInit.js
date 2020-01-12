import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import globals from '../globals';
import Footer from './layouts/Footer';
import { forgotPasswordInit } from '../actions/auth';

export class ForgotPasswordInit extends Component {
    constructor() {
        super();
        this.state = {
            email: '',
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    submitForm = (e) => {
        globals.createToast('Please wait', 1200, 'bottom-right');
        e.preventDefault();
        localStorage.setItem('tokenEmail', this.state.email);
        let payload = {
            email: this.state.email
        }
        this.props.forgotPasswordInit(this.props, payload);
    }

    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="coverr">
                    <div className="container-fluid height-100 auth-bg">
                        <div className="auth-logo">
                            <Link to='/'>
                                <img src={require('../assets/images/logo-white.png')} alt="logo" />
                            </Link>
                        </div>
                        <div className="flex-itemss">
                            <div className="col-lg-4 col-md-7 mx-auto">
                                <h2 className="text-center auth-title">Recover password</h2>
                                <p className="mb-5 auth-subtitle">Provide your email address to recover your password.</p>
                                <form onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-lg-12 mx-auto">
                                            <input type="email" name="email" placeholder="Email address" 
                                            onChange={e => this.handleChange("email", e.target.value)} />
                                            <button type="submit" onClick={this.submitForm} className="btn btn--primary type--uppercase mt-4">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="auth-meta mt-4">Don't have an account yet? <Link to="/register">Create an account</Link></div>
                                <div className="auth-meta"><Link to="/login">Sign in</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default connect(null, {forgotPasswordInit})(ForgotPasswordInit)
