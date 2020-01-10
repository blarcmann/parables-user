import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export class Login extends Component {

    render() {
        return (
            <>
                <Header />
                <section className="imageblock switchable feature-large height-100">
                    <div className="imageblock__content col-lg-6 col-md-4 pos-right">
                        <div className="background-image-holder">
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 col-md-7">
                                <h1>Login</h1>
                                <span className="h2 countdown color--primary"></span>
                                <p className="lead">Welcome back!</p>
                                <form>
                                    <div className="row">
                                        <div className="col-10 mr-auto">
                                            <input className="validate-required validate-email" type="email" name="email" placeholder="Email Address" />
                                        </div>
                                        <div className="col-10 mr-auto mt-3">
                                            <input className="validate-required validate-password" type="password" name="Password" placeholder="Password" />
                                        </div>
                                        <div className="col-lg-4 mr-auto col-sm-10 mt-4">
                                            <button type="submit" className="btn btn--primary type--uppercase">Submit</button>
                                        </div>
                                        <div className="col-12">
                                            <span className="type--fine-print"></span>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
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
