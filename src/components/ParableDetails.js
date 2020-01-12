import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './layouts/Header';
import globals from '../globals';
import Footer from './layouts/Footer';
import { fetchParable } from '../actions/parables';

export class ParableDetails extends Component {
    imgUrl = '';
    showAudio = false;
    componentDidMount() {
        const parableId = this.props.match.params.id;
        this.props.fetchParable(parableId);
    }

    listenToAudio = () => {
        if (this.showAudio) {
           this.showAudio = true
        } else {
            globals.createToast('Sorry, audio explanation is not available for this parable', 3000, 'top');
        }
    }

    render() {
        if (this.props.parable && this.props.parable.file && this.props.parable.file.Location) {
            this.imgUrl = this.props.parable.file.Location
        }
        if (this.props.parable && this.props.parable.sound && this.props.parable.sound.Location) {
            this.showAudio = true;
        }
        return (
            <>
                <Header />
                {this.props.parable ?
                    <>
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
                                            <q className={this.props.parable ? 'parable' : 'hide'}>{this.props.parable.title}</q>
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
                                                    &#9654; Listen now</button>
                                            </div>
                                            <span className="block--xs">Audio explanation of the parable</span>
                                        </div>
                                        {this.props.parable.sound ?
                                            <div className={this.showAudio ? 'slide-in' : 'hide'}>
                                                <audio controls>
                                                    <source src={this.props.parable.sound.Location} type="audio/ogg" />
                                                    <source src={this.props.parable.sound.Location} type="audio/mpeg" />
                                                    Your browser does not support the audio element.
                                                </audio>
                                            </div> :
                                            <div></div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </section>
                    </> :
                    <div className="search-null">Please wait...</div>
                }
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    parable: state.parables.parable
})


export default connect(mapStateToProps, { fetchParable })(ParableDetails)
