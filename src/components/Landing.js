import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import globals from '../globals';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { fetchRandomParable } from '../actions/parables';
import { fetchRandomAdvert } from '../actions/adverts';

export class Landing extends Component {
    imgUrl = '';
    adImgUrl = '';
    showAudio = false;
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            showAudio: false
        }
    }

    componentDidMount() {
        this.props.fetchRandomParable();
        this.props.fetchRandomAdvert()
    }

    listenToAudio = () => {
        if (this.showAudio) {
            this.setState({
                showAudio: true
            })
        } else {
            globals.createToast('Sorry, audio explanation is not available for this parable', 3000, 'top');
        }
    }

    render() {
        if (this.props.randomPara && this.props.randomPara.file && this.props.randomPara.file.Location) {
            this.imgUrl = this.props.randomPara.file.Location
        }
        if (this.props.advert && this.props.advert.image && this.props.advert.image.Location) {
            this.adImgUrl = this.props.advert.image.Location
        }
        if (this.props.randomPara && this.props.randomPara.sound && this.props.randomPara.sound.Location) {
            this.showAudio = true;
        }

        return (
            <>
                <Header />
                <div className="main-container">
                    <section className="switchable switchable--switch feature-large pb-5">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6 col-12">
                                    <div className="banner-img">
                                        <div className={this.imgUrl ? "img-cover" : 'hide'}>
                                            <img alt="alter" src={this.imgUrl} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-lg-5">
                                    <div className="switchable__text">
                                        <q className={this.props.randomPara ? 'parable' : 'hide'}>{this.props.randomPara.title}</q>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="border--bottom space--xxs pb-5">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12 text-center">
                                    <div className="audio-option">
                                        <div className="modal-instance">
                                            <button className="btn type--uppercase modal-trigger" onClick={this.listenToAudio}>
                                                &#9654; Listen now
                                            </button>
                                        </div>
                                        <span className="block--xs">Audio explanation of the parable</span>
                                    </div>
                                    {this.props.randomPara.sound ?
                                        <div className={this.state.showAudio ? 'slide-in' : 'hide'}>
                                            <audio controls>
                                                <source src={this.props.randomPara.sound.Location} type="audio/ogg" />
                                                <source src={this.props.randomPara.sound.Location} type="audio/mpeg" />
                                                Your browser does not support the audio element.
                                            </audio>
                                        </div> :
                                        <div></div>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="height-60 imagebg">
                        <div className="background-image-holder">
                            <img alt="background" src="../../assets/images/side-cover.jpg" />
                        </div>
                        <div className="container pos-vertical-center">
                            <div className="row justify-content-around">
                                <div className="col-lg-9">
                                    <div className="switchable__text dark">
                                        <h3>Translation</h3>
                                        <p className="translation"><q>{this.props.randomPara.translation}</q></p>
                                    </div>
                                </div>
                                <div className="col-lg-3">
                                    {this.props.advert ?
                                        <a href={this.props.advert.link} target="_blank" rel="noopener noreferrer">
                                            <div className="banner-img">
                                                <figure className={this.adImgUrl ? "img-cover" : 'hide'}>
                                                    <img alt="alter" src={this.adImgUrl} />
                                                    <figcaption>{this.props.advert.title}</figcaption>
                                                </figure>
                                            </div>
                                        </a> :
                                        <div></div>
                                    }

                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="text-center bg--secondary">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-10 col-lg-8">
                                    <h2>What we're about</h2>
                                    <p className="lead">
                                    Insightful proverbs, idioms and word-play from the indigenous yoruba ethnic group native to the present-day western part of Nigeria.</p>
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
                                                Create an account and try a quiz
                                </p>
                                        </div>
                                        <div className="col-lg-4 col-md-3 text-center">
                                            <Link to="/quiz" className="btn btn--primary type--uppercase">
                                                <span className="btn__text">Start quiz </span>
                                            </Link>
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
    randomPara: state.parables.randomParable,
    advert: state.adverts.advert
})


export default connect(mapStateToProps, { fetchRandomParable, fetchRandomAdvert })(Landing)
