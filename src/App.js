import React from 'react';
import './App.css';
import ExampleBox from './exampleBox';
import Questionnaire from './Questionnaire';
import ThankYou from './ThankYou';

class App extends React.Component {

  state = {
    stage: 0,
    evaluations: [],
    userData: {}
  }

  moveToNextStage(p) {
    let nextStage
    p ? nextStage = -1 : nextStage = this.state.stage + 1;
    this.setState({ stage: nextStage });
  }

  addEval(evaluation) {
    let newEvaluationsState = [...this.state.evaluations].concat(evaluation);
    this.setState({ evaluations: newEvaluationsState })
  }

  addUserData(data) {
    this.setState({ userData: data })
  }

  saveInputs() {
    let id = localStorage.length;
    localStorage.setItem(id, JSON.stringify([this.state.userData, this.state.evaluations]));
  }

  render() {

    let currentStage;
    
    switch (this.state.stage) {
      case 0: currentStage = <Questionnaire moveToNextStage={this.moveToNextStage.bind(this)} addUserData={this.addUserData.bind(this)}/>;
        break;
      case -1: currentStage = <ThankYou saveInputs={this.saveInputs.bind(this)}/>;
        break;
      default: currentStage = <ExampleBox stage={this.state.stage} moveToNextStage={this.moveToNextStage.bind(this)} addEval={this.addEval.bind(this)} />
    }

    return (
      <div className="App">
        <header className="App-header">
          experLINGment
      </header>
        {currentStage}
      </div>
    );
  }
}

export default App;
