// src/components/HistoryPage.jsx
import React from 'react';
import styled, { css } from 'styled-components';
import Button from './Button';
import { Container, Page, SectionTitle } from '../styles/Common';

const HistoryListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  background: rgba(240, 10%, 3.9%, 0.8);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius-lg);
`;

const HistoryItem = styled.div`
  padding: 1rem;
  border-radius: var(--border-radius);
  border: 2px solid;
  display: flex;
  align-items: center;
  gap: 1rem;

  ${props =>
    (props.score / props.total) >= 0.7
      ? css`
          border-color: var(--success);
          background: rgba(142, 76%, 36%, 0.1);
        `
      : css`
          border-color: var(--destructive);
          background: rgba(0, 84%, 60%, 0.1);
        `}
`;

const HistoryScore = styled.span`
  font-size: 1.2rem;
  font-weight: 600;
  padding: 0.5rem;
  border-radius: var(--border-radius);
  background: var(--muted);
`;

const HistoryTitle = styled.p`
  font-weight: 600;
  font-size: 1.1rem;
`;

const HistoryDate = styled.p`
  color: var(--muted-foreground);
  font-size: 0.9rem;
`;

const HistoryPage = ({ history, onGoHome }) => {
  return (
    <Page>
      <Container>
        <Button $variant="outline" onClick={onGoHome} style={{marginBottom: '2rem'}}>
          &larr; Back to Home
        </Button>
        <SectionTitle>Your Score History</SectionTitle>
        <HistoryListContainer>
          {history.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--muted-foreground)' }}>
              You have no saved scores yet.
            </p>
          ) : (
            history.map((entry, index) => (
              <HistoryItem key={index} score={entry.score} total={entry.total}>
                <HistoryScore>
                  {entry.score}/{entry.total}
                </HistoryScore>
                <div>
                  <HistoryTitle>{entry.title}</HistoryTitle>
                  <HistoryDate>{entry.date}</HistoryDate>
                </div>
              </HistoryItem>
            ))
          )}
        </HistoryListContainer>
      </Container>
    </Page>
  );
};

export default HistoryPage;