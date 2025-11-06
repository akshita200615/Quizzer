// src/components/QuizCard.jsx
import React from 'react';
import styled from 'styled-components';
import { slideUp } from '../styles/GlobalStyle';

const QuizCardStyled = styled.div`
  background: rgba(240, 10%, 3.9%, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  animation: ${slideUp} 0.6s ease-out;

  &:hover {
    box-shadow: var(--shadow-glow);
    transform: scale(1.02);
  }
`;

const QuizCardImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
`;

const QuizCardHeader = styled.div`
  position: relative;
  overflow: hidden;
`;

const DifficultyBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: 600;
  background: ${props =>
    props.$difficulty === 'Easy'
      ? 'var(--success)'
      : props.$difficulty === 'Medium'
      ? 'var(--secondary)'
      : 'var(--destructive)'};
  color: white;
`;

const QuizCardContent = styled.div`
  padding: 1.5rem;
`;

const CategoryBadge = styled.span`
  background: transparent;
  border: 1px solid var(--border);
  color: var(--muted-foreground);
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  margin-bottom: 1rem;
  display: inline-block;
`;

const QuizCardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: white;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);

  ${QuizCardStyled}:hover & {
    color: var(--primary);
  }
`;

const QuizCardDescription = styled.p`
  color: var(--muted-foreground);
  margin-bottom: 1rem;
`;

const QuizMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--muted-foreground);
`;

const QuizCard = ({ quiz, onClick }) => {
  return (
    <QuizCardStyled onClick={onClick}>
      <QuizCardHeader>
        <QuizCardImage src={quiz.imageUrl || 'logo.png'} alt="Quiz Image" />
        <DifficultyBadge $difficulty={quiz.difficulty}>
          {quiz.difficulty}
        </DifficultyBadge>
      </QuizCardHeader>
      <QuizCardContent>
        <CategoryBadge>{quiz.category}</CategoryBadge>
        <QuizCardTitle>{quiz.title}</QuizCardTitle>
        <QuizCardDescription>{quiz.description}</QuizCardDescription>
        <QuizMeta>
          <span>{quiz.questionCount} Questions</span>
          <span>{quiz.participants || 0} Plays</span>
        </QuizMeta>
      </QuizCardContent>
    </QuizCardStyled>
  );
};

export default QuizCard;