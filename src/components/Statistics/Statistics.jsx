import PropTypes from 'prop-types';
import { Container, StatisticsText } from './StatisticsStyles';

export const Statistics = ({ good, neutral, bad, total, percentage }) => {
  return (
    <Container>
      <StatisticsText>Good : {good} </StatisticsText>
      <StatisticsText>Neutral : {neutral}</StatisticsText>
      <StatisticsText>Bad: {bad}</StatisticsText>
      <StatisticsText>Total : {total}</StatisticsText>
      <StatisticsText>Positive feedbac : {percentage} %</StatisticsText>
    </Container>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
};
