import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { fetchQuizData, fetchQuizOptions } from '../actions/quiz';

export class Quiz extends Component {
    quizz = {};
    constructor(props) {
        super(props)
        this.state = {
            q0: JSON.parse(localStorage.getItem('q0')),
            q1: JSON.parse(localStorage.getItem('q1')),
            q2: JSON.parse(localStorage.getItem('q2')),
            q3: JSON.parse(localStorage.getItem('q3')),
            q4: JSON.parse(localStorage.getItem('q4')),
            option0: JSON.parse(localStorage.getItem('option0')),
            option1: JSON.parse(localStorage.getItem('option1')),
            option2: JSON.parse(localStorage.getItem('option2')),
            option3: JSON.parse(localStorage.getItem('option3')),
            option4: JSON.parse(localStorage.getItem('option4')),
            activeIndex: 0,
            activeQuestion: '',
            activeOptions: '',
            answers: [false, false, false, false, false],
            answer0: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
        }
    }

    activateIndex = (index) => {
        if (index === 0) {
            console.log('index0');
            this.setState({
                activeIndex: 0,
                activeQuestion: this.state.q0,
                activeOptions: this.state.option0
            })
        }
        if (index === 1) {
            console.log('index1');
            this.setState({
                activeIndex: 1,
                activeQuestion: this.state.q1,
                activeOptions: this.state.option1
            })
        }
        if (index === 2) {
            this.setState({
                activeIndex: 2,
                activeQuestion: this.state.q1,
                activeOptions: this.state.option2
            })
            console.log('index2');
        }
        if (index === 3) {
            this.setState({
                activeIndex: 3,
                activeQuestion: this.state.q3,
                activeOptions: this.state.option3
            })
        }
        if (index === 4) {
            this.setState({
                activeIndex: 4,
                activeQuestion: this.state.q4,
                activeOptions: this.state.option4
            })
        }
    }

    setAnswer = (answer) => {
        console.log('activeIndex', this.state.activeIndex)
        if (this.state.activeIndex === 0) {
            let answers = this.state.answers;
            answers[0] = true;
            this.setState({
                answer0: answer,
                answers: answers
            })
            console.log(this.state.answers);
        }
        if (this.state.activeIndex === 1) {
            console.log('index1');
            let answers = this.state.answers;
            answers[1] = true;
            this.setState({
                answer1: answer,
                answers: answers
            })
        }
        if (this.state.activeIndex === 2) {
            let answers = this.state.answers;
            answers[2] = true;
            this.setState({
                answer2: answer,
                answers: answers
            })
        }
        if (this.state.activeIndex === 3) {
            let answers = this.state.answers;
            answers[3] = true;
            this.setState({
                answer3: answer,
                answers: answers
            })
        }
        if (this.state.activeIndex === 4) {
            let answers = this.state.answers;
            answers[4] = true;
            this.setState({
                answer4: answer,
                answers: answers
            })
        }
    }

    componentDidMount() {
        let userId = localStorage.getItem('userId');
        this.props.fetchQuizData(userId);
        this.activateIndex(0);
    }
    render() {
        return (
            <>
                <Header />
                <section className="height-70">
                    <div className="container pos-vertical-center">
                        <div className="row justify-content-around">
                            <div className="col-lg-4">
                                <div className={this.state.activeIndex === 0 ? "quiz-options" : 'hide'}>
                                    <div className={this.state.answer0 === this.state.option0[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option0[0])}>
                                        <div className="tag">A</div>
                                        <div className="detail">{this.state.activeOptions[0]}</div>
                                    </div>
                                    <div className={this.state.answer0 === this.state.option0[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option0[1])}>
                                        <div className="tag">B</div>
                                        <div className="detail">{this.state.activeOptions[1]}</div>
                                    </div>
                                    <div className={this.state.answer0 === this.state.option0[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option0[2])}>
                                        <div className="tag">C</div>
                                        <div className="detail">{this.state.activeOptions[2]}</div>
                                    </div>
                                    <div className={this.state.answer0 === this.state.option0[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option0[3])}>
                                        <div className="tag">D</div>
                                        <div className="detail">{this.state.activeOptions[3]}</div>
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 1 ? "quiz-options" : 'hide'}>
                                    <div className={this.state.answer1 === this.state.option1[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option1[0])}>
                                        <div className="tag">A</div>
                                        <div className="detail">{this.state.activeOptions[0]}</div>
                                    </div>
                                    <div className={this.state.answer1 === this.state.option1[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option1[1])}>
                                        <div className="tag">B</div>
                                        <div className="detail">{this.state.activeOptions[1]}</div>
                                    </div>
                                    <div className={this.state.answer1 === this.state.option1[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option1[2])}>
                                        <div className="tag">C</div>
                                        <div className="detail">{this.state.activeOptions[2]}</div>
                                    </div>
                                    <div className={this.state.answer1 === this.state.option1[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option1[3])}>
                                        <div className="tag">D</div>
                                        <div className="detail">{this.state.activeOptions[3]}</div>
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 2 ? "quiz-options" : 'hide'}>
                                    <div className={this.state.answer2 === this.state.option2[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option2[0])}>
                                        <div className="tag">A</div>
                                        <div className="detail">{this.state.activeOptions[0]}</div>
                                    </div>
                                    <div className={this.state.answer2 === this.state.option2[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option2[1])}>
                                        <div className="tag">B</div>
                                        <div className="detail">{this.state.activeOptions[1]}</div>
                                    </div>
                                    <div className={this.state.answer2 === this.state.option2[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option2[2])}>
                                        <div className="tag">C</div>
                                        <div className="detail">{this.state.activeOptions[2]}</div>
                                    </div>
                                    <div className={this.state.answer2 === this.state.option2[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option2[3])}>
                                        <div className="tag">D</div>
                                        <div className="detail">{this.state.activeOptions[3]}</div>
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 3 ? "quiz-options" : 'hide'}>
                                    <div className={this.state.answer3 === this.state.option3[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option3[0])}>
                                        <div className="tag">A</div>
                                        <div className="detail">{this.state.activeOptions[0]}</div>
                                    </div>
                                    <div className={this.state.answer3 === this.state.option3[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option3[1])}>
                                        <div className="tag">B</div>
                                        <div className="detail">{this.state.activeOptions[1]}</div>
                                    </div>
                                    <div className={this.state.answer3 === this.state.option3[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option3[2])}>
                                        <div className="tag">C</div>
                                        <div className="detail">{this.state.activeOptions[2]}</div>
                                    </div>
                                    <div className={this.state.answer3 === this.state.option3[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option3[3])}>
                                        <div className="tag">D</div>
                                        <div className="detail">{this.state.activeOptions[3]}</div>
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 4 ? "quiz-options" : 'hide'}>
                                    <div className={this.state.answer4 === this.state.option4[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option4[0])}>
                                        <div className="tag">A</div>
                                        <div className="detail">{this.state.activeOptions[0]}</div>
                                    </div>
                                    <div className={this.state.answer4 === this.state.option4[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option4[1])}>
                                        <div className="tag">B</div>
                                        <div className="detail">{this.state.activeOptions[1]}</div>
                                    </div>
                                    <div className={this.state.answer4 === this.state.option4[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option4[2])}>
                                        <div className="tag">C</div>
                                        <div className="detail">{this.state.activeOptions[2]}</div>
                                    </div>
                                    <div className={this.state.answer4 === this.state.option4[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option4[3])}>
                                        <div className="tag">D</div>
                                        <div className="detail">{this.state.activeOptions[3]}</div>
                                    </div>
                                </div>
                                <div className="quest-cover">
                                    <h4>Quiz questions</h4>
                                    <div className="question-tags">
                                        <span className={this.state.answers[0] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(0)}>1</span>
                                        <span className={this.state.answers[1] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(1)}>2</span>
                                        <span className={this.state.answers[2] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(2)}>3</span>
                                        <span className={this.state.answers[3] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(3)}>4</span>
                                        <span className={this.state.answers[4] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(4)}>5</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="quiz-img">
                                    <img src={this.state.activeQuestion.image} alt={this.state.activeQuestion.image} />
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
    quizData: state.quiz.quizData,
    quizOptions: state.quiz.quizOptions,
})


export default connect(mapStateToProps, { fetchQuizData, fetchQuizOptions })(Quiz)
