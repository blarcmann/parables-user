import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchRandomAdvert, clickAdvert } from '../actions/adverts';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export class SearchResults extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.fetchRandomAdvert();
    }

    clickAdvert = () => {
        this.props.clickAdvert(this.props.advert._id);
    }

    render() {
        console.log(this.props.qResult);
        if (this.props.advert && this.props.advert.image && this.props.advert.image.Location) {
            this.adImgUrl = this.props.advert.image.Location
        }
        let results = [];
        if (this.props.qResult[0]) {
            this.props.qResult[0].forEach((q, i) => {
                results.push(
                    <Link className="each-result" key={i} to={`parable-details/${q._id}`}>
                        <div className="image">
                            <img src={q.file && q.file.Location ? q.file.Location : require('../assets/images/placeholder.svg')} alt="A" />
                        </div>
                        <div className="content">{q.title}</div>
                    </Link>
                )
            })
        }
        return (
            <>
                <Header />
                <div className="search-component">
                    <div className="row">
                        <div className="col-lg-10">
                            <div className={this.props.qResult[0] ? "component-heading1 mb-4" : 'hide'}>Search results</div>
                            {this.props.qResult[0] ?
                                results
                                :
                                <div className="search-null">No search result...</div>
                            }
                        </div>
                        <div className="col-lg-2 search-ads" onClick={this.clickAdvert}>
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
    qResult: state.parables.qResult,
    advert: state.adverts.advert
})


export default connect(mapStateToProps, { fetchRandomAdvert, clickAdvert })(SearchResults)
