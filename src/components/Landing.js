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
                    <section className="switchable switchable--switch feature-large pb-5">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6 col-12">
                                    <div className="video-cover border--round box-shadow-wide">
                                        <div className="background-image-holder">
                                            <img alt="alter" src="img/landing-22.jpg" />
                                        </div>
                                        <div className="video-play-icon"></div>
                                        <iframe title="figgur" data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" allowFullScreen="allowfullscreen"></iframe>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="switchable__text">
                                        <h3>
                                            <q>Kò sí ęni tí ó ma gùn ęşin tí kò ní ju ìpàkó. Bí kò fę ju ìpàkó, ęşin tí ó ngùn á ję kojū.</q>
                                        </h3>
                                        {/* <p className="lead">
                                            Launching an attractive and scalable website quickly and affordably is important for modern startups &mdash; Stack offers massive value without looking 'bargain-bin'.
                                </p> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="border--bottom space--xxs pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="modal-instance">
                                        <a className="btn type--uppercase modal-trigger" href=".">
                                            <span className="btn__text">
                                                &#9654; Listen now</span>
                                        </a>
                                        <div className="modal-container">
                                            <div className="modal-content bg-dark" data-width="60%" data-height="60%">
                                                <iframe data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" title="Sample" allowFullScreen="allowfullscreen"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                    <span className="block--xs">Audio explanation of the parable</span>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <section className="switchable switchable--switch feature-large">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-lg-8">
                                    <div className="switchable__text">
                                        <h3>Translation</h3>
                                        <p className="lead">
                                            No one rides a horse without moving his head, voluntarily or involuntarily.
                                </p>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="video-cover border--round box-shadow-wide">
                                        <div className="background-image-holder">
                                            <img alt="alter" src="img/landing-22.jpg" />
                                        </div>
                                        <div className="video-play-icon"></div>
                                        <iframe title="figgur" data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" allowFullScreen="allowfullscreen"></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                    <section className="height-60 imagebg switchable siwtchable--switch">
                        <div className="background-image-holder">
                            <img alt="background" src="../../assets/images/side-cover.jpg" />
                        </div>
                        <div className="container pos-vertical-center">
                            <div className="row justify-content-around">
                                <div className="col-lg-3">
                                    <div className="video-cover border--round box-shadow-wide">
                                        <div className="background-image-holder">
                                            <img alt="tiel" src="img/landing-1.jpg" />
                                        </div>
                                        <div className="video-play-icon"></div>
                                        <iframe data-src="https://www.youtube.com/embed/6p45ooZOOPo?autoplay=1" title="Sample" allowFullScreen="allowfullscreen"></iframe>
                                    </div>
                                </div>
                                <div className="col-lg-9">
                                    <div className="switchable__text dark">
                                        <h3>Translation</h3>
                                        <p className="mt-4">No one rides a horse without moving his head, voluntarily or involuntarily.</p>
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
