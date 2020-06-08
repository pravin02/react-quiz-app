import React, { Component } from 'react';
import './assets/style.css'
import Result from './components/Result';
import QABox from './components/QABox';
import QuizService from './quizService/index';

export default class App extends Component {

  state = {
    questionBank: [],
    correct: 0,
    responses: 0,
    total: 5
  }

  setAnswers(selected, correct) {
    let totalCorrect = this.state.correct;
    if (selected === correct) {
      totalCorrect++;
    }
    this.setState({
      responses: this.state.responses + 1,
      correct: totalCorrect
    })
  }


  getQuestions() {
    QuizService().then(qa => {
      this.setState({
        questionBank: qa
      })
    })
  }

  playAgain() {
    this.getQuestions();
    this.setState({
      questionBank: [],
      correct: 0,
      responses: 0,
      total: 5
    })
  }

  componentWillMount() {
    this.getQuestions();
  }

  render() {
    return (
      <div className="container">
        <div className="title"> Quiz Application </div>
        {
          this.state.responses < 5 ?
            <QABox questions={this.state.questionBank}
              selected={(s, correct) => this.setAnswers(s, correct)} />
            : null
        }
        
        {
          this.state.responses === 5 ?
            <Result score={this.state.correct}
              outOf={this.state.total}
              playAgain={() => this.playAgain()}
            ></Result> : null
        }
      </div>
    );
  }
}
