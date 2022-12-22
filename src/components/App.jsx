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
  stateIncrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  stateIncrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  stateIncrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
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
    const { stateIncrementGood, stateIncrementNeutral, stateIncrementBad } =
      this;
    const countTotal = this.countTotalFeedback();
    const coutPositive = this.countPositiveFeedbackPercentage();
    const countPercenage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Feedback
          feedback={this.state}
          onIncrementGood={stateIncrementGood}
          onIncrementNeutral={stateIncrementNeutral}
          onIncrementBad={stateIncrementBad}
        />
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
