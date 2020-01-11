import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
// import Header from './layouts/Header';
import Footer from './layouts/Footer';

export class Register extends Component {

    render() {
        return (
            <>
                {/* <Header /> */}
                <div className="coverr">
                    <div className="container-fluid height-100 auth-bg">
                        {/* <div className="row"> */}
                        <div className="col-lg-4 col-md-7 mx-auto">
                            <h2 className="text-center auth-title">Create account</h2>
                            <p className="mb-5 auth-subtitle">Provide the following details to create your account.</p>
                            <form>
                                <div className="row">
                                    <div className="col-12 mt-2">
                                        <input type="text" name="fullname" placeholder="Full name" />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input type="email" name="email" placeholder="Email Address" />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input type="tel" name="tel" placeholder="Phone number" />
                                    </div>
                                    <div className="col-12 mt-2">
                                        <input type="password" name="Password" placeholder="Password" />
                                    </div>
                                    <div className="col-lg-12 mr-auto col-sm-10 mt-4">
                                        <button type="submit" className="btn btn--primary type--uppercase">Submit</button>
                                    </div>
                                </div>
                            </form>
                            <div className="auth-meta mt-4">Already have an account? <Link to="/login">Sign in</Link></div>
                            <div className="auth-meta">Forgotten your password? <Link to="/recover-password">Recover password</Link></div>
                        </div>
                        {/* </div> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Register)
