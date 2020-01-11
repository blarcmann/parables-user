import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

export class Quiz extends Component {


    render() {
        return (
            <>
                <Header />
                <section className="height-70">
                    <div className="container pos-vertical-center">
                        <div className="row justify-content-around">
                            <div className="col-lg-4">
                                <div className="quiz-options">
                                    <div className="each">
                                        <div className="tag">A</div>
                                        <div className="detail">Oiho buuk’ e ka koolo bi s’upekun da le da ma.</div>
                                    </div>
                                    <div className="each selected">
                                        <div className="tag">B</div>
                                        <div className="detail">Gbogbo alangba lo d'anu dele, a ko mo eyi t'inu nrun</div>
                                    </div>
                                    <div className="each">
                                        <div className="tag">C</div>
                                        <div className="detail">Eewu bę loko Longę, Longę fun ara rę eewu ni</div>
                                    </div>
                                    <div className="each">
                                        <div className="tag">D</div>
                                        <div className="detail">Bi Ēēgun nla ba ni ohùn o ri gontò, gontò na a ni ohùn o ri Ēēgun nla</div>
                                    </div>
                                </div>
                                <h4>Quiz questions</h4>
                                <div className="question-tags">
                                    <span className="tag">1</span>
                                    <span className="tag">2</span>
                                    <span className="tag dirty">3</span>
                                    <span className="tag">4</span>
                                    <span className="tag">5</span>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                {/* {this.props.advert ?
                                    <div className="banner-img">
                                        <figure className="img-cover">
                                            <img alt="alter" src="../assets/images/bg-a.jpeg" />
                                            <figcaption>gvhjh</figcaption>
                                        </figure>
                                    </div> :
                                    <div></div>
                                } */}
                                <div className="quiz-img">
                                    <img src={require('../assets/images/bg-a.jpeg')} alt="bag" />
                                </div>

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


export default connect(mapStateToProps, {})(Quiz)
