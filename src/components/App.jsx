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

  stateIncrement = e => {
    this.setState(prevState => {
      switch (e.target.innerText) {
        case 'Good':
          return { good: prevState.good + 1 };
        case 'Neutral':
          return { neutral: prevState.neutral + 1 };
        case 'Bad':
          return { bad: prevState.bad + 1 };
        default:
          return;
      }
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;

    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };
  render() {
    const { good, neutral, bad } = this.state;
    const { stateIncrement } = this;
    const countTotal = this.countTotalFeedback();
    const coutPositive = this.countPositiveFeedbackPercentage();
    const countPercenage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Feedback feedback={this.state} onIncrement={stateIncrement} />
        <GlobalStyle />
        <StatisticTitle />
        {countTotal ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotal}
            percentage={!isNaN(coutPositive) ? countPercenage : 0}
          />
        ) : (
          <NoFeedback />
        )}
      </div>
    );
  }
}
