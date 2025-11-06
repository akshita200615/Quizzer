// src/components/QuizPage.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import ProgressBar from './ProgressBar';
import Timer from './Timer';
import { Container, Page, SectionTitle } from '../styles/Common';
import { slideUp, bounceIn } from '../styles/GlobalStyle';

// ... (All styled components are the SAME, from QuizContainer to OptionLetter) ...
// (No change to styled-components)

const QuizContainer = styled(Container)`
  max-width: 1000px;
`;

const QuizHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;

const ProgressCard = styled.div`
  background: rgba(240, 10%, 3.9%, 0.8);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius-lg);
  padding: 1.5rem;
  margin-bottom: 2rem;
  animation: ${slideUp} 0.6s ease-out;
`;

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  color: var(--muted-foreground);
`;

const QuestionCard = styled.div`
  background: rgba(240, 10%, 3.9%, 0.8);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  margin-bottom: 2rem;
  animation: ${bounceIn} 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
`;

const QuestionText = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  line-height: 1.5;
  margin-bottom: 2rem;
  color: white;
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const OptionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: var(--card);
  border: 2px solid var(--border);
  border-radius: var(--border-radius);
  color: var(--card-foreground);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: left;
  width: 100%;
  min-height: 4rem;

  &:hover:not(:disabled) {
    border-color: var(--primary);
    background: rgba(262, 83%, 58%, 0.1);
    transform: scale(1.02);
  }

  ${props =>
    props.selected &&
    css`
      border-color: var(--primary);
      background: rgba(262, 83%, 58%, 0.2);
      box-shadow: var(--shadow-glow);
    `}

  ${props =>
    props.isCorrect &&
    css`
      background: var(--gradient-success);
      color: white;
      border: 2px solid var(--success);
    `}

  ${props =>
    props.isIncorrect &&
    css`
      background: var(--destructive);
      color: var(--destructive-foreground);
      border: 2px solid var(--destructive);
    `}
`;

const OptionLetter = styled.span`
  background: var(--muted);
  color: var(--muted-foreground);
  padding: 0.5rem 0.75rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  min-width: 2rem;
  text-align: center;

  ${OptionButton}:hover & {
    background-color: var(--primary);
    color: var(--primary-foreground);
  }
`;

// --- UPDATE THE COMPONENT PROPS ---
const QuizPage = ({
  quiz,
  question,
  questionIndex,
  score,
  timeLeft,
  selectedAnswer,
  answerSubmitted, // <-- ADDED
  onSelectAnswer,
  onSubmitAnswer, // <-- ADDED
  onNext,
  onGoHome,
}) => {
  const progressPercentage = (questionIndex / quiz.questions.length) * 100;
  const optionLetters = ['A', 'B', 'C', 'D'];

  return (
    <Page>
      <QuizContainer>
        <QuizHeader>
          <Button variant="outline" onClick={onGoHome}>
            <span>&larr;</span> Back to Home
          </Button>
          <SectionTitle style={{ fontSize: '1.5rem', marginBottom: 0 }}>
            {quiz.title}
          </SectionTitle>
          <Timer timeLeft={timeLeft} />
        </QuizHeader>

        <ProgressCard>
          <ProgressInfo>
            <span>
              Question {questionIndex + 1}/{quiz.questions.length}
            </span>
            <span>Score: {score}</span>
          </ProgressInfo>
          <ProgressBar percentage={progressPercentage + 100 / quiz.questions.length} />
        </ProgressCard>

        <QuestionCard>
          <QuestionText>{question.question}</QuestionText>
          <OptionsContainer>
            {/* --- UPDATE THE OPTION LOGIC --- */}
            {question.options.map((option, index) => {
              let isCorrect, isIncorrect;
              if (answerSubmitted) { // Only show colors AFTER submit
                isCorrect = index === question.correctAnswer;
                isIncorrect =
                  index === selectedAnswer.index && index !== question.correctAnswer;
              }

              return (
                <OptionButton
                  key={index}
                  onClick={() => onSelectAnswer(index)} // Just select
                  disabled={answerSubmitted} // Disable after submit
                  selected={selectedAnswer?.index === index} // Check if selected
                  isCorrect={isCorrect}
                  isIncorrect={isIncorrect}
                >
                  <OptionLetter>{optionLetters[index]}</OptionLetter>
                  <span>{option}</span>
                </OptionButton>
              );
            })}
          </OptionsContainer>
        </QuestionCard>

        {/* --- UPDATE THE BUTTON LOGIC --- */}
        <div style={{ textAlign: 'center' }}>
          {!answerSubmitted ? (
            // Show SUBMIT button if answer not submitted
            <Button
              variant="primary"
              onClick={onSubmitAnswer}
              disabled={selectedAnswer === null} // Disabled until an option is picked
            >
              Submit Answer
            </Button>
          ) : (
            // Show NEXT button if answer is submitted
            <Button variant="primary" onClick={onNext}>
              {questionIndex < quiz.questions.length - 1
                ? 'Next Question'
                : 'Show Results'}{' '}
              <span>&rarr;</span>
            </Button>
          )}
        </div>
        
      </QuizContainer>
    </Page>
  );
};

export default QuizPage;