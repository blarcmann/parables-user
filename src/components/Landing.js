import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import globals from '../globals';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import axios from 'axios';
import { fetchRandomParable, fetchMultipleRandomParable } from '../actions/parables';
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
            videoText: 'Watch video',
            multipleRandomParables: localStorage.getItem('pc') ? JSON.parse(localStorage.getItem('pc')) : [],
            currentParable: {},
            currentIndex: 0,
            disablePrev: true,
            disableNext: false,
        }
    }

    componentDidMount() {
        this.fetchMultiplePArables();
        this.props.fetchMultipleRandomParable();
        this.props.fetchRandomAdvert();
    }

    fetchMultiplePArables = () => {
        const userToken = '';
        axios.get(`${globals.base_url}/parable/rand`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch random parables not successful');
                }
                let res = response.data;
                localStorage.setItem('pc', JSON.stringify(res.data));
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
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

    checkDisabled = (id) => {
        const { multipleRandomParables } = this.state;
        const parablesLength = multipleRandomParables.length;
        if (id <= 0) {
            this.setState({
                disablePrev: true
            })
        } else {
            this.setState({ disablePrev: false })
        }
        if (id + 2 > parablesLength) {
            this.setState({ disableNext: true })
        } else {
            this.setState({ disableNext: false })
        }
    }

    setCurrentParable = (id) => {
        const { multipleRandomParables } = this.state;
        this.setState({ currentParable: multipleRandomParables[id] });
    }

    prevParable = (id) => {
        this.checkDisabled(id);
        if (id <= 0) {
            this.setState({
                currentIndex: id,
            })
            return;
        } else {
            this.setCurrentParable(id);
            this.setState({ currentIndex: id, })
        }
    }

    nextParable = (id) => {
        const { multipleRandomParables } = this.state;
        const parablesLength = multipleRandomParables.length;
        this.checkDisabled(id);
        if (id + 2 >= parablesLength) {
            this.setState({ currentIndex: id })
            return;
        } else {
            this.setCurrentParable(id);
            this.setState({ currentIndex: id })
        }
    }

    render() {
        const { disableNext, disablePrev, currentIndex, multipleRandomParables } = this.state;
        const curParable = multipleRandomParables[currentIndex];

        if (curParable && curParable.file && curParable.file.Location) {
            this.imgUrl = curParable.file.Location
        }
        if (this.props.advert && this.props.advert.image && this.props.advert.image.Location) {
            this.adImgUrl = this.props.advert.image.Location
        }
        if (curParable && curParable.sound && curParable.sound.Location) {
            this.showAudio = true;
        }

        if (curParable && curParable.youtube) {
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
                                    <div className="banner-img slide-in">
                                        <div className={this.imgUrl ? "img-cover" : 'hide'}>
                                            <img alt="alter" src={this.imgUrl} />
                                        </div>
                                    </div>
                                </div>
                                {curParable && curParable.title ?
                                    <div className="col-md-6 col-lg-5">
                                        <div className="switchable__text">
                                            <q className={curParable && curParable.title ? 'parable' : 'hide'}>{curParable.title}</q>
                                        </div>
                                    </div>
                                    : ''}
                            </div>
                        </div>
                    </section>
                    <div className="nav-parables">
                        <span className={disablePrev ? "left arrow disabled" : "left arrow"} onClick={() => this.prevParable(currentIndex - 1)}>
                            <img src={require('../assets/images/left-arrow.svg')} alt="<" />
                        </span>
                        <span className={disableNext ? "right arrow disabled" : "right arrow"} onClick={() => this.nextParable(currentIndex + 1)}>
                            <img src={require('../assets/images/right-arrow.svg')} alt=">" />
                        </span>
                    </div>
                    {curParable ?
                        <>
                            {curParable.sound || curParable.youtube ?
                                <section className="border--bottom space--xxs pb-1">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col-md-12 text-center">
                                                <div className="audio-option">
                                                    <div className="modal-instance">
                                                        <button className={curParable.sound ? "btn type--uppercase modal-trigger mb-0" : 'hide'} onClick={this.listenToAudio}>
                                                            &#9654; {this.state.audioText}
                                                        </button>
                                                        <button className={curParable.youtube ? "ml-3 btn type--uppercase modal-trigger" : 'hide'} onClick={this.watchVideo}>
                                                            &#9654; {this.state.videoText}
                                                        </button>
                                                    </div>
                                                </div>
                                                {curParable.sound && curParable.sound.Location ?
                                                    <div className={this.state.showAudio ? 'slide-in' : 'hide'}>
                                                        <ReactPlayer url={curParable.sound.Location} file="true" forceaudio="true" controls height="60px" width="100%" />
                                                    </div> :
                                                    ''}
                                            </div>
                                        </div>
                                    </div>
                                </section> :
                                <div></div>
                            }
                        </>
                        : ''}
                    
                    {curParable && curParable.title ?
                        <section className="height-30">
                            <div className="container pos-vertical-center">
                                <div className="row justify-content-around">
                                    <div className="col-lg-12 col-sm-12 mb-5">
                                        <div className="switchable__text dark">
                                            <h3>Translation</h3>
                                            <p className={curParable && curParable.title ? "translation" : "hide"} dangerouslySetInnerHTML={{ __html: curParable.translation }}></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        : ''}
                    
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
                {curParable && curParable.title ?
                    <div className={this.state.showVideo ? "s4me-modal" : "hide"}>
                        <div className="s4me-modal-body large p-0">
                            <div className="close-btn" onClick={this.dismissAll}>
                                <img src={require('../assets/images/close.svg')} alt="X" />
                            </div>
                            <div className="s4me-modal-body-content p-0">
                                <iframe src={this.state.showVideo ? curParable.youtube : ''}
                                    width="400" title={curParable.title} height="315" frameBorder="0" allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                    </div>
                    : ''}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    randomPara: state.parables.randomParable,
    multipleRandPara: state.parables.multipleRandParables,
    advert: state.adverts.advert
})

const mapDispatchToProps = {
    fetchRandomParable,
    fetchMultipleRandomParable,
    fetchRandomAdvert,
    clickAdvert,
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing)
