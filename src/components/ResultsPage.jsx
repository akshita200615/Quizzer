// src/components/ResultsPage.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import ProgressBar from './ProgressBar';
import { Container, Page, SectionTitle } from '../styles/Common';
import { slideUp, bounceIn } from '../styles/GlobalStyle';

const ResultsHeader = styled.div`
  background: rgba(240, 10%, 3.9%, 0.8);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius-lg);
  padding: 3rem 2rem;
  text-align: center;
  margin-bottom: 2rem;
  animation: ${bounceIn} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const ScoreDisplay = styled.div`
  font-size: 4rem;
  font-weight: 800;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const ScoreDetails = styled.p`
  font-size: 1.25rem;
  color: var(--muted-foreground);
  margin-bottom: 1.5rem;
`;

const QuestionReview = styled.div`
  background: rgba(240, 10%, 3.9%, 0.8);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  margin-bottom: 2rem;
  animation: ${slideUp} 0.6s ease-out;
`;

const ReviewItem = styled.div`
  padding: 1rem;
  border-radius: var(--border-radius);
  border: 2px solid;
  margin-bottom: 1rem;

  ${props =>
    props.isCorrect
      ? css`
          border-color: var(--success);
          background: rgba(142, 76%, 36%, 0.1);
        `
      : css`
          border-color: var(--destructive);
          background: rgba(0, 84%, 60%, 0.1);
        `}
`;

const ReviewQuestion = styled.p`
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const YourAnswer = styled.p`
  color: ${props =>
    props.isCorrect ? 'var(--success)' : 'var(--destructive)'};
`;
const CorrectAnswer = styled.p`
  color: var(--success);
`;

const ActionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

const ResultsPage = ({
  score,
  userAnswers,
  quiz,
  onRestart,
  onGoHome,
  onShowHistory,
}) => {
  const totalQuestions = quiz.questions.length;
  const resultsPercentage = (score / totalQuestions) * 100;

  return (
    <Page>
      <Container>
        <ResultsHeader>
          <SectionTitle>Quiz Complete!</SectionTitle>
          <ScoreDisplay>
            {score}/{totalQuestions}
          </ScoreDisplay>
          <ScoreDetails>
            You answered {score} out of {totalQuestions} questions correctly.
          </ScoreDetails>
          <ProgressBar
            percentage={resultsPercentage}
            height="0.75rem"
          />
        </ResultsHeader>

        <QuestionReview>
          <h3>Question Review</h3>
          {userAnswers.map((answer, index) => (
            <ReviewItem key={index} isCorrect={answer.isCorrect}>
              <ReviewQuestion>
                {index + 1}. {answer.question}
              </ReviewQuestion>
              <YourAnswer isCorrect={answer.isCorrect}>
                Your answer: {answer.selected}
              </YourAnswer>
              {!answer.isCorrect && (
                <CorrectAnswer>
                  Correct answer: {answer.correct}
                </CorrectAnswer>
              )}
            </ReviewItem>
          ))}
        </QuestionReview>

        <ActionsContainer>
          <Button $variant="secondary" onClick={onShowHistory}>
            Score History
          </Button>
          <Button $variant="primary" onClick={onRestart}>
            Restart Quiz
          </Button>
          <Button $variant="outline" onClick={onGoHome}>
            Back to Home
          </Button>
        </ActionsContainer>
      </Container>
    </Page>
  );
};

export default ResultsPage;