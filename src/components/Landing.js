import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import globals from '../globals';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { fetchRandomParable } from '../actions/parables';
import { fetchRandomAdvert, clickAdvert } from '../actions/adverts';

export class Landing extends Component {
    imgUrl = '';
    adImgUrl = '';
    showAudio = false;
    showVideo = false;
    constructor(props) {
        super(props);
        this.state = {
            imgUrl: '',
            showAudio: false,
            showVideo: false,
            audioText: 'Listen to audio',
            videoText: 'Watch video'
        }
    }

    componentDidMount() {
        this.props.fetchRandomParable();
        this.props.fetchRandomAdvert();
    }

    clickAdvert = () => {
        this.props.clickAdvert(this.props.advert._id);
    }

    dismissAll = () => {
        this.setState({
            showVideo: false
        })
    }

    listenToAudio = () => {
        if (this.showAudio) {
            this.setState({
                showAudio: !this.state.showAudio
            })
        } else {
            globals.createToast('Sorry, audio explanation is not available for this parable', 3000, 'top');
        }
    }

    watchVideo = () => {
        this.setState({
            showVideo: true
        })
    }

    startQuiz = () => {
        if (localStorage.getItem('userDetails')) {
            this.props.history.push('/quiz')
        } else {
            this.props.history.push('/login');
        }
    }

    playAudio = (e) => {
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

        if (this.props.randomPara && this.props.randomPara.youtube) {
            this.showVideo = true;
        }

        return (
            <>
                <Header />
                <section className="pb-2">
                    <div className="container pos-vertical-center">
                        <div className="row justify-content-around">
                            <div className="col-lg-12 col-sm-12">
                                <h1 className="tagline"><span className="color1">Multimedia</span> explanation of African parables.</h1>
                                <h2 className="tagline"><span className="color2">Play </span> quiz, win money and prices.</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="main-container mb-5">
                    <section className="switchable switchable--switch feature-large pb-5">
                        <div className="container">
                            <div className="row justify-content-around">
                                <div className="col-md-6 col-12">
                                    <div className="banner-img">
                                        <div className={this.imgUrl ? "img-cover" : 'hide'}>
                                            <img alt="alter" src={this.imgUrl} />
                                        </div>
                                    </div>
                                    <div className="nav-parables">
                                        <span className="left arrow">
                                            <img src={require('../assets/images/left-arrow.svg')} alt="<" />
                                        </span>
                                        <span className="right arrow">
                                            <img src={require('../assets/images/right-arrow.svg')} alt=">" />
                                        </span>
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
                    {this.props.randomPara.sound || this.props.randomPara.youtube ?
                        <section className="border--bottom space--xxs pb-1">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <div className="audio-option">
                                            <div className="modal-instance">
                                                <button className={this.props.randomPara.sound ? "btn type--uppercase modal-trigger mb-0" : 'hide'} onClick={this.listenToAudio}>
                                                    &#9654; {this.state.audioText}
                                                </button>
                                                <button className={this.props.randomPara.youtube ? "ml-3 btn type--uppercase modal-trigger" : 'hide'} onClick={this.watchVideo}>
                                                    &#9654; {this.state.videoText}
                                                </button>
                                            </div>
                                        </div>
                                        {this.props.randomPara.sound && this.props.randomPara.sound.Location ?
                                            <div className={this.state.showAudio ? 'slide-in' : 'hide'}>
                                                {/* <audio controls>
                                                    <source src={this.props.randomPara.sound.Location} type="audio/ogg" />
                                                    <source src={this.props.randomPara.sound.Location} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio> */}
                                                <ReactPlayer url={this.props.randomPara.sound.Location} file="true" forceaudio="true" controls height="60px" width="100%" />
                                            </div> :
                                            ''}
                                    </div>
                                </div>
                            </div>
                        </section> :
                        <div></div>
                    }
                    <section className="height-30">
                        <div className="container pos-vertical-center">
                            <div className="row justify-content-around">
                                <div className="col-lg-12 col-sm-12 mb-5">
                                    <div className="switchable__text dark">
                                        <h3>Translation</h3>
                                        <p className="translation" dangerouslySetInnerHTML={{ __html: this.props.randomPara.translation }}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="col-lg-12 col-sm-12 pt-5" onClick={this.clickAdvert}>
                            {this.props.advert ?
                                <a href={this.props.advert.link} target="_blank" rel="noopener noreferrer">
                                    <div className="ads-img ads">
                                        <figure className={this.adImgUrl ? "img-cover" : 'hide'}>
                                            <img alt="alter" src={this.adImgUrl} />
                                            <figcaption>{this.props.advert.title}</figcaption>
                                        </figure>
                                    </div>
                                </a> :
                                <div></div>
                            }

                        </div>
                    </section>
                    <section className="text-center height-30">
                        <div className="container">
                            <div className="row justify-content-around text-center">
                                <div className="col-md-10 col-lg-8">
                                    <h2 className="text-center">What we're about</h2>
                                    <p className="lead text-center">
                                        Insightful proverbs, idioms and word-play from Nigeria.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div
                                        className="cta cta-1 cta--horizontal boxed bg- boxed--border text-center-xs row justify-content-center">
                                        <div className="col-lg-3 col-md-4">
                                            <h4>Let's get you started</h4>
                                        </div>
                                        <div className="col-lg-4 col-md-5">
                                            <p className="lead">
                                                Create an account and try a quiz
                                </p>
                                        </div>
                                        <div className="col-lg-4 col-md-3 text-center">
                                            <button className="p-2 btn btn--primary type--uppercase" onClick={this.startQuiz}>
                                                <span className="btn__text">Start quiz </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <Footer />
                </div>
                <div className={this.state.showVideo ? "s4me-modal" : "hide"}>
                    <div className="s4me-modal-body large p-0">
                        <div className="close-btn" onClick={this.dismissAll}>
                            <img src={require('../assets/images/close.svg')} alt="X" />
                        </div>
                        <div className="s4me-modal-body-content p-0">
                            <iframe src={this.state.showVideo ? this.props.randomPara.youtube : ''}
                                width="400" title={this.props.randomPara.title} height="315" frameBorder="0" allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    randomPara: state.parables.randomParable,
    advert: state.adverts.advert
})


export default connect(mapStateToProps, { fetchRandomParable, fetchRandomAdvert, clickAdvert })(Landing)
