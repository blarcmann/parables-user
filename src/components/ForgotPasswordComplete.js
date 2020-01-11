import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './layouts/Footer';

export class ForgotPasswordComplete extends Component {

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
                        <h2 className="text-center auth-title">Complete recovery</h2>
                        <p className="mb-5 auth-subtitle">Enter the token sent to your email and your new password to complete the recovery</p>
                        <form>
                            <div className="row">
                                <div className="col-12 mr-auto">
                                    <input type="password" name="password" placeholder="Enter password" />
                                </div>
                                <div className="col-12 mr-auto">
                                    <input type="password" name="confirm_password" placeholder="Confirm password" />
                                </div>
                                <div className="col-lg-12 mr-auto col-sm-10 mt-4">
                                    <button type="submit" className="btn btn--primary type--uppercase">Submit</button>
                                </div>
                            </div>
                        </form>
                        <div className="auth-meta mt-4">Don't have an account yet? <Link to="/register">Create an account</Link></div>
                        <div className="auth-meta">Forgotten your password? <Link to="/recover-password">Recover password</Link></div>
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


export default connect(mapStateToProps, {})(ForgotPasswordComplete)
