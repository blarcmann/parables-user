import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { fetchParables } from '../actions/parables';

export class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rice: 'beans'
        }
    }

    componentDidMount() {
        console.log(this.props);
    }

    render() {
        return (
            <>
               <Header />
                <div className="main-container">
                    <section class="switchable switchable--switch feature-large pb-5">
                        <div class="container">
                            <div class="row justify-content-around">
                                <div class="col-md-6 col-12">
                                    <div class="video-cover border--round box-shadow-wide">
                                        <div class="background-image-holder">
                                            <img alt="alter" src="img/landing-22.jpg" />
                                        </div>
                                        <div class="video-play-icon"></div>
                                        <iframe title="figgur" data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" allowfullscreen="allowfullscreen"></iframe>
                                    </div>
                                </div>
                                <div class="col-md-6 col-lg-5">
                                    <div class="switchable__text">
                                        <h2>Perfect components for modern startups</h2>
                                        <p class="lead">
                                            Launching an attractive and scalable website quickly and affordably is important for modern startups &mdash; Stack offers massive value without looking 'bargain-bin'.
                                </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="border--bottom space--xxs pb-5">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12 text-center">
                                    <div class="modal-instance">
                                        <a class="btn type--uppercase modal-trigger" href=".">
                                            <span class="btn__text">
                                                &#9654; Watch Overview
                                    </span>
                                        </a>
                                        <div class="modal-container">
                                            <div class="modal-content bg-dark" data-width="60%" data-height="60%">
                                                <iframe data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" title="Sample" allowFullScreen="allowfullscreen"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <span class="block--xs">and see how Stack makes building your site fun</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="cover height-60 imagebg switchable siwtchable--switch" data-overlay="8">
                        <div class="background-image-holder">
                            <img alt="background" src="img/landing-1.jpg" />
                        </div>
                        <div class="container pos-vertical-center">
                            <div class="row justify-content-around">
                                <div class="col-lg-6 col-md-4 col-12">
                                    <div class="video-cover border--round box-shadow-wide">
                                        <div class="background-image-holder">
                                            <img alt="tiel" src="img/landing-1.jpg" />
                                        </div>
                                        <div class="video-play-icon"></div>
                                        <iframe data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" title="Sample" allowFullScreen="allowfullscreen"></iframe>
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-7">
                                    <div class="switchable__text">
                                        <h1>
                                            Streamline your workflow with Stack
                                </h1>
                                        <a class="btn btn--primary type--uppercase" href="index.html">
                                            <span class="btn__text">
                                                lets go
                                    </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-center bg--secondary">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-10 col-lg-8">
                                    <h2>Build perfect pages, easy as pie.</h2>
                                    <p className="lead">
                                        Whether you’re building a welcome mat for your SaaS or a clean, corporate portfolio, Stack
                                        has your design needs covered.
                        </p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div
                                        className="cta cta-1 cta--horizontal boxed boxed--border text-center-xs row justify-content-center">
                                        <div className="col-lg-3 col-md-4">
                                            <h4>Let's get you started</h4>
                                        </div>
                                        <div className="col-lg-4 col-md-5">
                                            <p className="lead">
                                                Start building pages in your browser
                                </p>
                                        </div>
                                        <div className="col-lg-4 col-md-3 text-center">
                                            <a className="btn btn--primary type--uppercase" href="http://google.com">
                                                <span className="btn__text">
                                                    Try Builder
                                    </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, { fetchParables })(Landing)
