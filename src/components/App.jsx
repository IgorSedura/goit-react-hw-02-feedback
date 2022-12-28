import { Component } from 'react';
import { Feedback } from './Feedback/Feedback';
import { GlobalStyle } from './GlobalStyles';
import { NoFeedback } from './NoFeedback/NoFeedback';
import { Statistics } from './Statistics/Statistics';
import { StatisticTitle } from './StatisticTitle/StatisticTitle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // stateIncrement = e => {
  //   this.setState(prevState => {
  //     switch (e.target.innerText) {
  //       case 'Good':
  //         return { good: prevState.good + 1 };
  //       case 'Neutral':
  //         return { neutral: prevState.neutral + 1 };
  //       case 'Bad':
  //         return { bad: prevState.bad + 1 };
  //       default:
  //         return;
  //     }
  //   });
  // };

  stateIncrement = e => {
    const options = e.target.innerText;
    console.log(options);
    this.setState(prevState => ({
      [options.toLowerCase()]: prevState[options.toLowerCase()] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const keys = Object.keys(this.state);
    console.log(keys);
    const { good, neutral, bad } = this.state;
    const { stateIncrement } = this;
    const total = this.countTotalFeedback();
    console.log(total);
    const coutPositive = this.countPositiveFeedbackPercentage();
    const countPercenage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <Feedback options={keys} stateIncrement={stateIncrement} />
        <GlobalStyle />
        <StatisticTitle />
        {total === 0 ? (
          <NoFeedback />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            percentage={!isNaN(coutPositive) ? countPercenage : 0}
          />
        )}
      </div>
    );
  }
}
