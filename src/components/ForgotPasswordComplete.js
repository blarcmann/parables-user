import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './layouts/Footer';
import globals from '../globals';
import { forgotPasswordFinish } from '../actions/auth';

export class ForgotPasswordComplete extends Component {
    constructor() {
        super();
        this.state = {
            code: '',
            password: '',
            confirm_password: ''
        }
    }

    handleChange = (key, value) => {
        this.setState({
            [key]: value
        })
    };

    submitForm = (e) => {
        e.preventDefault();
        if (this.state.code === '' || this.state.confirm_password === '' || this.state.password === '') {
            return globals.createToast('All fields are compulsory', 3000, 'top');
        }
        globals.createToast('Please wait', 1200, 'bottom-right');
        let email = localStorage.getItem('tokenEmail');
        let payload = {
            email: email,
            password: this.state.password,
            code: this.state.code
        }
        this.props.forgotPasswordFinish(this.props, payload);
    }
    render() {
        return (
            <>
                <div className="coverr">
                    <div className="container-fluid height-100 auth-bg">
                        <div className="auth-logo">
                            <Link to='/'>
                                <img src={require('../assets/images/logo-white.png')} alt="logo" />
                            </Link>
                        </div>
                        <div className="flex-itemss">
                            <div className="col-lg-4 col-md-7 mx-auto">
                                <h2 className="text-center auth-title">Complete recovery</h2>
                                <p className="mb-5 auth-subtitle">Enter the token sent to your email and your new password to complete the recovery</p>
                                <form onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-12 mr-auto">
                                            <input type="text" name="password" placeholder="Enter code"
                                                onChange={e => this.handleChange("code", e.target.value)} />

                                            <input type="password" name="password" placeholder="Enter password"
                                                onChange={e => this.handleChange("password", e.target.value)} />

                                            <input type="password" name="confirm_password" placeholder="Confirm password"
                                                onChange={e => this.handleChange("confirm_password", e.target.value)} />
                                        </div>
                                        <div className="col-lg-12 mr-auto col-sm-10 mt-4">
                                            <button type="submit" onClick={this.submitForm} className="btn btn--primary type--uppercase">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="auth-meta mt-4">Don't have an account yet? <Link to="/register">Create an account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export default connect(null, { forgotPasswordFinish })(ForgotPasswordComplete)
