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
    return (
      <div>
        <Feedback
          feedback={this.state}
          onIncrementGood={this.stateIncrementGood}
          onIncrementNeutral={this.stateIncrementNeutral}
          onIncrementBad={this.stateIncrementBad}
        />
        <GlobalStyle />
        <StatisticTitle />
        {this.countTotalFeedback() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            percentage={
              !isNaN(this.countPositiveFeedbackPercentage())
                ? this.countPositiveFeedbackPercentage()
                : 0
            }
          />
        ) : (
          <NoFeedback />
        )}
      </div>
    );
  }
}
