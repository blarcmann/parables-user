import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactPlayer from 'react-player';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { Link } from 'react-router-dom';
import { fetchQuizData, fetchQuizOptions, finishQuiz } from '../actions/quiz';
import globals from '../globals';
import axios from 'axios';
import { fetchRandomAdvert, clickAdvert } from '../actions/adverts';

export class Quiz extends Component {
    quizz = {};
    score = 0;
    randomizeQ = [];
    constructor(props) {
        super(props)
        this.state = {
            q0: '',
            q1: '',
            q2: '',
            q3: '',
            q4: '',
            q5: '',
            q6: '',
            q7: '',
            q8: '',
            q9: '',
            userDetails: '',
            quizId: localStorage.getItem('quizId'),
            option0: '',
            option1: '',
            option2: '',
            option3: '',
            option4: '',
            option5: '',
            option6: '',
            option7: '',
            option8: '',
            option9: '',
            baseHref: window.location.href,
            shareDes: 'Try out Nigerian quizes on',
            activeIndex: 0,
            activeQuestion: '',
            activeOptions: '',
            showSubmit: false,
            showScore: false,
            answers: [false, false, false, false, false, false, false, false, false, false],
            answer0: '',
            answer1: '',
            answer2: '',
            answer3: '',
            answer4: '',
            answer5: '',
            answer6: '',
            answer7: '',
            answer8: '',
            answer9: '',
            score: 0,
            startQuiz: true,
            submitted: false
        }
    }


    componentDidMount() {
        if (!localStorage.getItem('userDetails')) {
            this.setState({
                startQuiz: false
            })
        } else {
            this.setState({
                userDetails: JSON.parse(localStorage.getItem('userDetails'))
            })
        }
        let userId = localStorage.getItem('userId');
        this.props.fetchRandomAdvert();
        this.fetchQuizData(userId);
        this.activateIndex(0);
        for (let i = 0; i < 10; i++) {
            this.generateRandom(2);
        }
    }

    fetchQuizData = (userId) => {
        const userToken = localStorage.getItem('userToken');
        axios.get(`${globals.base_url}/quiz/start/${userId}`, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data.data;
                localStorage.setItem('quizId', response.data._id);
                localStorage.setItem('q0', JSON.stringify(res[0]));
                localStorage.setItem('q1', JSON.stringify(res[1]));
                localStorage.setItem('q2', JSON.stringify(res[2]));
                localStorage.setItem('q3', JSON.stringify(res[3]));
                localStorage.setItem('q4', JSON.stringify(res[4]));
                localStorage.setItem('q5', JSON.stringify(res[5]));
                localStorage.setItem('q6', JSON.stringify(res[6]));
                localStorage.setItem('q7', JSON.stringify(res[7]));
                localStorage.setItem('q8', JSON.stringify(res[8]));
                localStorage.setItem('q9', JSON.stringify(res[9]));
                this.setState({
                    q0: res[0],
                    q1: res[1],
                    q2: res[2],
                    q3: res[3],
                    q4: res[4],
                    q5: res[5],
                    q6: res[6],
                    q7: res[7],
                    q8: res[8],
                    q9: res[9],
                })
                let q0 = { title: res[0].title };
                let q1 = { title: res[1].title };
                let q2 = { title: res[2].title };
                let q3 = { title: res[3].title };
                let q4 = { title: res[4].title };
                let q5 = { title: res[5].title };
                let q6 = { title: res[6].title };
                let q7 = { title: res[7].title };
                let q8 = { title: res[8].title };
                let q9 = { title: res[9].title };
                this.fetchQuizOptions('q0', q0);
                this.fetchQuizOptions('q1', q1);
                this.fetchQuizOptions('q2', q2);
                this.fetchQuizOptions('q3', q3);
                this.fetchQuizOptions('q4', q4);
                this.fetchQuizOptions('q5', q5);
                this.fetchQuizOptions('q6', q6);
                this.fetchQuizOptions('q7', q7);
                this.fetchQuizOptions('q8', q8);
                this.fetchQuizOptions('q9', q9);
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }

    fetchQuizOptions = (index, payload) => {
        const userToken = localStorage.getItem('userToken');
        axios.post(`${globals.base_url}/quiz/options`, payload, {
            headers: {
                'Authorization': 'Bearer ' + userToken
            }
        })
            .then(response => {
                if (response.data.status === false) {
                    const msg = response.data.msg || 'Please reload page.';
                    globals.createToast(msg, 3000, 'bottom-right');
                    return console.log(response, 'fetch quiz not successful');
                }
                let res = response.data;
                if (index === 'q0') {
                    this.setState({
                        option0: res.data
                    })
                    localStorage.setItem('option0', JSON.stringify(res.data))
                };
                if (index === 'q1') {
                    this.setState({
                        option1: res.data
                    })
                    localStorage.setItem('option1', JSON.stringify(res.data))
                };
                if (index === 'q2') {
                    this.setState({
                        option2: res.data
                    })
                    localStorage.setItem('option2', JSON.stringify(res.data))
                };
                if (index === 'q3') {
                    this.setState({
                        option3: res.data
                    })
                    localStorage.setItem('option3', JSON.stringify(res.data))
                };
                if (index === 'q4') {
                    this.setState({
                        option4: res.data
                    })
                    localStorage.setItem('option4', JSON.stringify(res.data))
                };
                if (index === 'q5') {
                    this.setState({
                        option5: res.data
                    })
                    localStorage.setItem('option5', JSON.stringify(res.data))
                };
                if (index === 'q6') {
                    this.setState({
                        option6: res.data
                    })
                    localStorage.setItem('option6', JSON.stringify(res.data))
                };
                if (index === 'q7') {
                    this.setState({
                        option7: res.data
                    })
                    localStorage.setItem('option7', JSON.stringify(res.data))
                };
                if (index === 'q8') {
                    this.setState({
                        option8: res.data
                    })
                    localStorage.setItem('option8', JSON.stringify(res.data))
                };
                if (index === 'q9') {
                    this.setState({
                        option9: res.data
                    })
                    localStorage.setItem('option9', JSON.stringify(res.data))
                };
            })
            .catch(error => {
                console.log('catch error register', error);
                throw (error);
            })
    }

    generateRandom = (max) => {
        this.randomizeQ.push(Math.floor(Math.random() * Math.floor(max)));
    }

    dismissAll = () => {
        this.setState({
            showScore: false
        })
    }

    playAgain = () => {
        window.location.reload();
        this.setState({
            showScore: false
        })
    }

    runnit = () => {
        this.activateIndex(0);
        window.location.reload();
    }

    activateIndex = (index) => {
        setTimeout(() => {
            if (index === 0) {
                this.setState({
                    activeIndex: 0,
                    activeQuestion: this.state.q0,
                    activeOptions: this.state.option0
                })
            }
            if (index === 1) {
                this.setState({
                    activeIndex: 1,
                    activeQuestion: this.state.q1,
                    activeOptions: this.state.option1
                })
            }
            if (index === 2) {
                this.setState({
                    activeIndex: 2,
                    activeQuestion: this.state.q2,
                    activeOptions: this.state.option2
                })
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
            if (index === 5) {
                this.setState({
                    activeIndex: 5,
                    activeQuestion: this.state.q5,
                    activeOptions: this.state.option5
                })
            }
            if (index === 6) {
                this.setState({
                    activeIndex: 6,
                    activeQuestion: this.state.q6,
                    activeOptions: this.state.option6
                })
            }
            if (index === 7) {
                this.setState({
                    activeIndex: 7,
                    activeQuestion: this.state.q7,
                    activeOptions: this.state.option7
                })
            }
            if (index === 8) {
                this.setState({
                    activeIndex: 8,
                    activeQuestion: this.state.q8,
                    activeOptions: this.state.option8
                })
            }
            if (index === 9) {
                this.setState({
                    activeIndex: 9,
                    activeQuestion: this.state.q9,
                    activeOptions: this.state.option9
                })
            }
        }, 200)
    }

    checkAll = (present) => {
        if (present[0] === false || present[1] === false || present[2] === false || present[3] === false || present[4] === false
            || present[5] === false || present[6] === false || present[7] === false || present[8] === false || present[9] === false) {
            this.setState({
                showSubmit: false
            })
        } else {
            this.setState({
                showSubmit: true
            })
        }
    }

    setAnswer = (answer) => {
        if (this.state.submitted === true) {
            return;
        }
        console.log('activeIndex', this.state.activeIndex);
        if (this.state.activeIndex === 0) {
            let answers = this.state.answers;
            answers[0] = true;
            this.setState({
                answer0: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 1) {
            let answers = this.state.answers;
            answers[1] = true;
            this.setState({
                answer1: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 2) {
            let answers = this.state.answers;
            answers[2] = true;
            this.setState({
                answer2: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 3) {
            let answers = this.state.answers;
            answers[3] = true;
            this.setState({
                answer3: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 4) {
            let answers = this.state.answers;
            answers[4] = true;
            this.setState({
                answer4: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 5) {
            let answers = this.state.answers;
            answers[5] = true;
            this.setState({
                answer5: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 6) {
            let answers = this.state.answers;
            answers[6] = true;
            this.setState({
                answer6: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 7) {
            let answers = this.state.answers;
            answers[7] = true;
            this.setState({
                answer7: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 8) {
            let answers = this.state.answers;
            answers[8] = true;
            this.setState({
                answer8: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
        if (this.state.activeIndex === 9) {
            let answers = this.state.answers;
            answers[9] = true;
            this.setState({
                answer9: answer,
                answers: answers
            })
            this.checkAll(this.state.answers);
        }
    }

    next = () => {
        if (this.state.activeIndex === 9) {
            return;
        } else {
            this.activateIndex(this.state.activeIndex + 1);
        }
    }

    prev = () => {
        if (this.state.activeIndex === 0) {
            return;
        } else {
            this.activateIndex(this.state.activeIndex - 1);
        }
    }

    completeQuiz = () => {
        globals.createToast('Please wait', 3000, 'bottom-right');
        setTimeout(() => {
            if (this.state.q0.title.toString() === this.state.answer0.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q1.title.toString() === this.state.answer1.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q2.title.toString() === this.state.answer2.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q3.title.toString() === this.state.answer3.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q4.title.toString() === this.state.answer4.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q5.title.toString() === this.state.answer5.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q6.title.toString() === this.state.answer6.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q7.title.toString() === this.state.answer7.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q8.title.toString() === this.state.answer8.toString()) {
                this.score = this.score + 1;
            }
            if (this.state.q9.title.toString() === this.state.answer9.toString()) {
                this.score = this.score + 1;
            }
            this.finishQuiz();
            this.setState({
                showScore: true,
                shareDes: `I had ${this.score} out of 10 on Parableus. You can try out the quiz too.`
            })
            this.setState({
                answer0: '',
                answer1: '',
                answer2: '',
                answer3: '',
                answer4: '',
                answer5: '',
                answer6: '',
                answer7: '',
                answer8: '',
                answer9: '',
                answers: [false, false, false, false, false, false, false, false, false, false],
            })
        }, 2500);
    }

    finishQuiz = () => {
        console.log(this.state.quizId);
        let payload = {
            score: this.score,
            username: this.state.userDetails.name,
            _id: localStorage.getItem('quizId')
        }
        this.props.finishQuiz(payload);
        this.setState({
            submitted: true
        })
    }

    resetState = () => {
        return this.setState({
            activeIndex: 0
        })
    }


    render() {
        if (this.props.advert && this.props.advert.image && this.props.advert.image.Location) {
            this.adImgUrl = this.props.advert.image.Location
        }
        return (
            <>
                <Header />
                {this.state.startQuiz ? '' :
                    <div className="search-null">You need to log in to start quiz.</div>
                }
                {this.props.quizData && this.props.quizOptions && this.state.startQuiz ?
                    <section className="height-80 mb-max">
                        <div className="container pos-vertical-center">
                            <div className="row justify-content-around">
                                <div className={this.state.activeIndex === 0 ? "col-lg-8" : 'hide'}>
                                    {this.state.q0.image ?
                                        <div className={this.randomizeQ[0] === 1 ? "quiz-img slide-in" : 'hide'}>
                                            <img src={this.state.q0.image} alt={this.state.q0.image} />
                                        </div> : ''}
                                    {this.state.q0.audio ?
                                        <div className={this.randomizeQ[0] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                            <ReactPlayer url={this.state.q0.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                        </div> : ''}
                                </div>
                                <div className={this.state.activeIndex === 1 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[1] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q1.image} alt={this.state.q1.image} />
                                    </div>
                                    <div className={this.randomizeQ[1] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q1.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 2 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[2] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q2.image} alt={this.state.q2.image} />
                                    </div>
                                    <div className={this.randomizeQ[2] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q2.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 3 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[3] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q3.image} alt={this.state.q3.image} />
                                    </div>
                                    <div className={this.randomizeQ[3] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q3.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 4 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[4] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q4.image} alt={this.state.q4.image} />
                                    </div>
                                    <div className={this.randomizeQ[4] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q4.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 5 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[5] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q5.image} alt={this.state.q5.image} />
                                    </div>
                                    <div className={this.randomizeQ[5] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q5.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 6 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[6] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q6.image} alt={this.state.q6.image} />
                                    </div>
                                    <div className={this.randomizeQ[6] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q6.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 7 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[7] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q7.image} alt={this.state.q7.image} />
                                    </div>
                                    <div className={this.randomizeQ[7] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q7.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 8 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[8] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q8.image} alt={this.state.q8.image} />
                                    </div>
                                    <div className={this.randomizeQ[8] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q8.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className={this.state.activeIndex === 9 ? "col-lg-8" : 'hide'}>
                                    <div className={this.randomizeQ[9] === 1 ? "quiz-img slide-in" : 'hide'}>
                                        <img src={this.state.q9.image} alt={this.state.q9.image} />
                                    </div>
                                    <div className={this.randomizeQ[9] === 1 ? "quiz-img slide-in mt-5" : 'hide'}>
                                        <ReactPlayer url={this.state.q9.audio} file="true" forceaudio="true" controls height="60px" width="100%" />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className={this.state.activeIndex === 0 ? "quiz-options slide-in" : 'hide'}>
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
                                        <div className={this.state.answer0 === this.state.option0[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option0[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q0.title}</div>
                                        </div>

                                    </div>
                                    <div className={this.state.activeIndex === 1 ? "quiz-options slide-in" : 'hide'}>
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
                                        <div className={this.state.answer1 === this.state.option1[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option1[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q1.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 2 ? "quiz-options slide-in" : 'hide'}>
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
                                        <div className={this.state.answer2 === this.state.option2[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option2[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q2.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 3 ? "quiz-options slide-in" : 'hide'}>
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
                                        <div className={this.state.answer3 === this.state.option3[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option3[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q3.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 4 ? "quiz-options slide-in" : 'hide'}>
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
                                        <div className={this.state.answer4 === this.state.option4[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option4[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q4.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 5 ? "quiz-options slide-in" : 'hide'}>
                                        <div className={this.state.answer5 === this.state.option5[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option5[0])}>
                                            <div className="tag">A</div>
                                            <div className="detail">{this.state.activeOptions[0]}</div>
                                        </div>
                                        <div className={this.state.answer5 === this.state.option5[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option5[1])}>
                                            <div className="tag">B</div>
                                            <div className="detail">{this.state.activeOptions[1]}</div>
                                        </div>
                                        <div className={this.state.answer5 === this.state.option5[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option5[2])}>
                                            <div className="tag">C</div>
                                            <div className="detail">{this.state.activeOptions[2]}</div>
                                        </div>
                                        <div className={this.state.answer5 === this.state.option5[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option5[3])}>
                                            <div className="tag">D</div>
                                            <div className="detail">{this.state.activeOptions[3]}</div>
                                        </div>
                                        <div className={this.state.answer5 === this.state.option5[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option5[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q5.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 6 ? "quiz-options slide-in" : 'hide'}>
                                        <div className={this.state.answer6 === this.state.option6[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option6[0])}>
                                            <div className="tag">A</div>
                                            <div className="detail">{this.state.activeOptions[0]}</div>
                                        </div>
                                        <div className={this.state.answer6 === this.state.option6[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option6[1])}>
                                            <div className="tag">B</div>
                                            <div className="detail">{this.state.activeOptions[1]}</div>
                                        </div>
                                        <div className={this.state.answer6 === this.state.option6[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option6[2])}>
                                            <div className="tag">C</div>
                                            <div className="detail">{this.state.activeOptions[2]}</div>
                                        </div>
                                        <div className={this.state.answer6 === this.state.option6[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option6[3])}>
                                            <div className="tag">D</div>
                                            <div className="detail">{this.state.activeOptions[3]}</div>
                                        </div>
                                        <div className={this.state.answer6 === this.state.option6[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option6[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q6.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 7 ? "quiz-options slide-in" : 'hide'}>
                                        <div className={this.state.answer7 === this.state.option7[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option7[0])}>
                                            <div className="tag">A</div>
                                            <div className="detail">{this.state.activeOptions[0]}</div>
                                        </div>
                                        <div className={this.state.answer7 === this.state.option7[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option7[1])}>
                                            <div className="tag">B</div>
                                            <div className="detail">{this.state.activeOptions[1]}</div>
                                        </div>
                                        <div className={this.state.answer7 === this.state.option7[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option7[2])}>
                                            <div className="tag">C</div>
                                            <div className="detail">{this.state.activeOptions[2]}</div>
                                        </div>
                                        <div className={this.state.answer7 === this.state.option7[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option7[3])}>
                                            <div className="tag">D</div>
                                            <div className="detail">{this.state.activeOptions[3]}</div>
                                        </div>
                                        <div className={this.state.answer7 === this.state.option7[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option7[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q7.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 8 ? "quiz-options slide-in" : 'hide'}>
                                        <div className={this.state.answer8 === this.state.option8[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option8[0])}>
                                            <div className="tag">A</div>
                                            <div className="detail">{this.state.activeOptions[0]}</div>
                                        </div>
                                        <div className={this.state.answer8 === this.state.option8[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option8[1])}>
                                            <div className="tag">B</div>
                                            <div className="detail">{this.state.activeOptions[1]}</div>
                                        </div>
                                        <div className={this.state.answer8 === this.state.option8[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option8[2])}>
                                            <div className="tag">C</div>
                                            <div className="detail">{this.state.activeOptions[2]}</div>
                                        </div>
                                        <div className={this.state.answer8 === this.state.option8[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option8[3])}>
                                            <div className="tag">D</div>
                                            <div className="detail">{this.state.activeOptions[3]}</div>
                                        </div>
                                        <div className={this.state.answer8 === this.state.option8[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option8[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q8.title}</div>
                                        </div>
                                    </div>
                                    <div className={this.state.activeIndex === 9 ? "quiz-options slide-in" : 'hide'}>
                                        <div className={this.state.answer9 === this.state.option9[0] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option9[0])}>
                                            <div className="tag">A</div>
                                            <div className="detail">{this.state.activeOptions[0]}</div>
                                        </div>
                                        <div className={this.state.answer9 === this.state.option9[1] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option9[1])}>
                                            <div className="tag">B</div>
                                            <div className="detail">{this.state.activeOptions[1]}</div>
                                        </div>
                                        <div className={this.state.answer9 === this.state.option9[2] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option9[2])}>
                                            <div className="tag">C</div>
                                            <div className="detail">{this.state.activeOptions[2]}</div>
                                        </div>
                                        <div className={this.state.answer9 === this.state.option9[3] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option9[3])}>
                                            <div className="tag">D</div>
                                            <div className="detail">{this.state.activeOptions[3]}</div>
                                        </div>
                                        <div className={this.state.answer9 === this.state.option9[4] ? "each selected" : 'each'} onClick={() => this.setAnswer(this.state.option9[4])}>
                                            <div className="tag">E</div>
                                            <div className="detail">{this.state.activeOptions[4]}</div>
                                        </div>
                                        <div className={this.state.submitted === true ? "each answer" : 'hide'}>
                                            <div className="tag">*</div>
                                            <div className="detail">{this.state.q9.title}</div>
                                        </div>
                                    </div>
                                    {
                                        this.state.option0 && !this.state.activeOptions[0] ?
                                            <button className="visibility-none" onClick={this.activateIndex(0)}></button> :
                                            ''
                                    }
                                    {
                                        this.state.q0 && !this.state.activeQuestion.title ?
                                            <button className="visibility-none" onClick={this.runnit}></button> :
                                            ''
                                    }
                                    <div className="prev-next mb-4">
                                        <div className="action" onClick={this.prev}>
                                            <img src={require('../assets/images/prev.svg')} alt="X" />
                                            <span>Prev</span>
                                        </div>
                                        <div className="action" onClick={this.next}>
                                            <span>Next</span>
                                            <img src={require('../assets/images/next.svg')} alt="X" />
                                        </div>
                                    </div>
                                    <div className="quest-cover">
                                        <h4 className="">Quiz questions</h4>
                                        <div className="question-tags">
                                            <span className={this.state.answers[0] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(0)}>1</span>
                                            <span className={this.state.answers[1] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(1)}>2</span>
                                            <span className={this.state.answers[2] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(2)}>3</span>
                                            <span className={this.state.answers[3] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(3)}>4</span>
                                            <span className={this.state.answers[4] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(4)}>5</span>
                                            <span className={this.state.answers[5] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(5)}>6</span>
                                            <span className={this.state.answers[6] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(6)}>7</span>
                                            <span className={this.state.answers[7] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(7)}>8</span>
                                            <span className={this.state.answers[8] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(8)}>9</span>
                                            <span className={this.state.answers[9] === true ? "tag dirty" : "tag"} onClick={() => this.activateIndex(9)}>10</span>
                                        </div>
                                        <div className={this.state.showSubmit ? "submit slide-in" : 'hide'}>
                                            <button className={this.state.submitted === false ? "submit-quiz" : 'hide'} onClick={this.completeQuiz}>Finish quiz</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    :
                    <div className="search-null"></div>
                }
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
                <Footer />
                <div className={this.state.showScore ? "s4me-modal" : "hide"}>
                    <div className="s4me-modal-body">
                        <div className="close-btn" onClick={this.dismissAll}>
                            <img src={require('../assets/images/close.svg')} alt="X" />
                        </div>
                        <div className="s4me-modal-body-content">
                            <div className="h3 text-center mt-2 mb-4">Final Score: {this.score}</div>
                        </div>
                        <div className="share-score">
                            <div className="each">
                                <img src={require('../assets/images/twitter.svg')} alt="X" />
                                <a href={`https://twitter.com/intent/tweet?text=${this.state.shareDes}&url=${this.state.baseHref}`} target="_blank" rel="noopener noreferrer">Share your score on twitter</a>
                            </div>
                            <div className="each">
                                <img src={require('../assets/images/facebook.svg')} alt="X" />
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${this.state.baseHref}&quote=${this.state.shareDes}`} target="_blank" rel="noopener noreferrer">Share your score on facebook</a>
                            </div>
                        </div>
                        <div className="modal-action">
                            <button className="bttn secondary">
                                <Link to='/'>
                                    Home
                                </Link>
                            </button>
                            <button className="bttn primary" onClick={this.playAgain}>
                                {/* <Link to='/quiz'> */}
                                Play again
                                {/* </Link> */}
                            </button>
                        </div>
                        <div className="mt-4 text-center see-answers" onClick={this.dismissAll}>See answers</div>
                    </div>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    quizData: state.quiz.quizData,
    quizOptions: state.quiz.quizOptions,
    q0: state.quiz.q0,
    q1: state.quiz.q1,
    q2: state.quiz.q2,
    q3: state.quiz.q3,
    q4: state.quiz.q4,
    option0: state.quiz.option0,
    option1: state.quiz.option1,
    option2: state.quiz.option2,
    option3: state.quiz.option3,
    option4: state.quiz.option4,
    advert: state.adverts.advert
})


export default connect(mapStateToProps, { fetchQuizData, fetchQuizOptions, finishQuiz, fetchRandomAdvert, clickAdvert })(Quiz)
