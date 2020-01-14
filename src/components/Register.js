import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import globals from '../globals';
import Footer from './layouts/Footer';
import { register } from '../actions/auth';

export class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            gender: '',
            tel: '',
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
        if(this.state.name === '' || this.state.tel === '' || this.state.gender === '' || this.state.password === '' || this.state.email === '') {
            global.createToast('All fields are compulsory', 3000, 'top');
        }
        let payload = {
            name: this.state.name,
            email: this.state.email,
            tel: this.state.tel,
            gender: this.state.gender,
            password: this.state.password,
        }
        this.props.register(this.props, payload);
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
                                <h2 className="text-center auth-title">Create account</h2>
                                <p className="mb-5 auth-subtitle">Provide the following details to create your account.</p>
                                <form onSubmit={this.submitForm}>
                                    <div className="row">
                                        <div className="col-12 mt-2">
                                            <input type="text" name="name" placeholder="Full name"
                                                onChange={e => this.handleChange("name", e.target.value)} />
                                        </div>
                                        <div className="col-12 mt-2">
                                            <input type="email" name="email" placeholder="Email address" 
                                            onChange={e => this.handleChange("email", e.target.value)}/>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <select onChange={e => this.handleChange("gender", e.target.value)}>
                                                <option>Select gender</option>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                            </select>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <input type="tel" name="tel" placeholder="Phone number" 
                                            onChange={e => this.handleChange("tel", e.target.value)}/>
                                        </div>
                                        <div className="col-12 mt-2">
                                            <input type="password" name="Password" placeholder="Password" 
                                            onChange={e => this.handleChange("password", e.target.value)}/>
                                        </div>
                                        <div className="col-lg-12 mr-auto col-sm-10 mt-4">
                                            <button type="submit" onClick={this.submitForm} className="btn btn--primary type--uppercase">Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="auth-meta mt-4">Already have an account? <Link to="/login">Sign in</Link></div>
                                <div className="auth-meta">Forgotten your password? <Link to="/forgot-password-init">Recover account</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}


export default connect(null, {register})(Register)
