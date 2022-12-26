import { Button, Container, ButtonContainer, Title } from './FeedbackStyles';

export const Feedback = ({ onIncrement }) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <ButtonContainer>
        <Button type="button" onClick={onIncrement}>
          Good
        </Button>
        <Button type="button" onClick={onIncrement}>
          Neutral
        </Button>
        <Button type="button" onClick={onIncrement}>
          Bad
        </Button>
      </ButtonContainer>
    </Container>
  );
};
