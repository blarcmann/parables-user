import React, { Component } from 'react';
import { connect } from 'react-redux';
import globals from '../globals';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import { fetchScores } from '../actions/quiz';

export class Leaderboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: true
        }
    }

    componentDidMount() {
        this.props.fetchScores();
        if(!localStorage.getItem('userDetails')) {
            this.props.history.push('/');
        }
    }
    render() {
        let table = [];
        if (this.props.scores[0]) {
            this.props.scores[0].forEach((leader, i) => {
                table.push(
                    <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{globals.capitalize(leader.username)}</td>
                        <td className={leader.gender === 'male' ? '' : 'hide'}>
                            <img src={require('../assets/images/male.svg')} alt="" />
                        </td>
                        <td className={leader.gender === 'female' ? '' : 'hide'}>
                            <img src={require('../assets/images/female.svg')} alt="" />
                        </td>
                        <td className={!leader.gender ? '' : 'hide'}>
                            <img src={require('../assets/images/user.svg')} alt="" />
                        </td>
                        <td>{leader.score}</td>
                    </tr>
                )
            })
        }
        return (
            <>
                <Header />
                {this.state.show ?
                    <>
                        <section className="table-toppings">
                            <div className="table-title">This week's leaderboard score</div>
                            <div className="tbl-header">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <thead>
                                        <tr>
                                            <th>Position</th>
                                            <th>Username</th>
                                            <th>Gender</th>
                                            <th>Score</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            <div className="tbl-content">
                                <table cellPadding="0" cellSpacing="0" border="0">
                                    <tbody>
                                        {table}
                                    </tbody>
                                </table>
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
    scores: state.quiz.scores
})


export default connect(mapStateToProps, { fetchScores })(Leaderboard)
