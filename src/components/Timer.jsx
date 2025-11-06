// src/components/Timer.jsx
import React from 'react';
import styled from 'styled-components';
import { formatTime } from '../utils/helpers';

const TimerDisplay = styled.div`
  background: rgba(240, 10%, 3.9%, 0.8);
  border: 1px solid rgba(240, 10%, 20%, 0.5);
  border-radius: var(--border-radius);
  padding: 0.75rem 1.5rem;
  color: var(--primary);
  font-weight: 600;
  font-size: 1.125rem;
`;

const Timer = ({ timeLeft }) => {
  return <TimerDisplay>{formatTime(timeLeft)}</TimerDisplay>;
};

export default Timer;