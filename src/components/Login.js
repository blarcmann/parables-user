import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Footer from './layouts/Footer';

export class Login extends Component {

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
                            <h2 className="text-center auth-title">Login</h2>
                            <p className="mb-5 auth-subtitle">Welcome back, sign in with your existing account details.</p>
                            <form>
                                <div className="row">
                                    <div className="col-12 mr-auto">
                                        <input className="validate-required validate-email" type="email" name="email" placeholder="Email address" />
                                    </div>
                                    <div className="col-12 mr-auto mt-3">
                                        <input className="validate-required validate-password" type="password" name="Password" placeholder="Password" />
                                    </div>
                                    <div className="col-lg-12 mr-auto col-sm-10 mt-4">
                                        <button type="submit" className="btn btn--primary type--uppercase">Submit</button>
                                    </div>
                                </div>
                            </form>
                            <div className="auth-meta mt-4">Don't have an account yet? <Link to="/register">Create an account</Link></div>
                            <div className="auth-meta">Forgotten your password? <Link to="/forgot-password-init">Recover password</Link></div>
                        </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
