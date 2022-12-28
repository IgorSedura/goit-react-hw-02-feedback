import { Button, Container, ButtonContainer, Title } from './FeedbackStyles';

export const Feedback = ({ stateIncrement, options }) => {
  return (
    <Container>
      <Title>Please leave feedback</Title>
      <ButtonContainer>
        <Button type="button" name={options} onClick={stateIncrement}>
          Good
        </Button>
        <Button type="button" name={options} onClick={stateIncrement}>
          Neutral
        </Button>
        <Button type="button" name={options} onClick={stateIncrement}>
          Bad
        </Button>
      </ButtonContainer>
    </Container>
  );
};
