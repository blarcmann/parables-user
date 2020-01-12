import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRandomAdvert, clickAdvert } from '../actions/adverts';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    clickAdvert = () => {
        this.props.clickAdvert(this.props.advert._id);
    }

    render() {
        if (this.props.advert && this.props.advert.image && this.props.advert.image.Location) {
            this.adImgUrl = this.props.advert.image.Location
        }
        return (
            <>
                <Header />
                <div className="search-component">
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                            <div className="each-result">
                                <div className="image">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="A" />
                                </div>
                                <div className="content">
                                    Vendor Prefixing To get the best cross-browser support, it is a common practice to apply vendor prefixes to CSS properties and values that require them to work. For instance -webkit- or -moz
                            </div>
                            </div>
                        </div>
                        <div className="col-lg-3" onClick={this.clickAdvert}>
                            {this.props.advert ?
                                <a href={this.props.advert.link} target="_blank" rel="noopener noreferrer">
                                    <div className="ads-img">
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
                <Footer />
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    // results: state.search.results,
    advert: state.adverts.advert
})


export default connect(mapStateToProps, { fetchRandomAdvert, clickAdvert })(SearchResults)
