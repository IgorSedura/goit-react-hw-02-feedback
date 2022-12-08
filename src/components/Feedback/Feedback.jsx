import { Button, Container, ButtonContainer, Title } from './FeedbackStyles';

export const Feedback = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <ButtonContainer>
        <Button type="button" onClick={onIncrementGood}>
          Good
        </Button>
        <Button type="button" onClick={onIncrementNeutral}>
          Neutral
        </Button>
        <Button type="button" onClick={onIncrementBad}>
          Bad
        </Button>
      </ButtonContainer>
    </Container>
  );
};
