import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import globals from '../globals';
import Footer from './layouts/Footer';

export class ForgotPasswordInit extends Component {
    // componentDidMount() {
    //     globals.createToast('Heyo', 3000, 'top');
    // }

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
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12 mx-auto">
                                            <input type="email" name="email" placeholder="Email address" />
                                            <button type="submit" className="btn btn--primary type--uppercase mt-4">Submit</button>
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


export default connect(mapStateToProps, {})(ForgotPasswordInit)
