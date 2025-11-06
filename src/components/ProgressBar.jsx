// src/components/ProgressBar.jsx
import React from 'react';
import styled from 'styled-components';

const Bar = styled.div`
  background: var(--muted);
  border-radius: 9999px;
  height: ${props => props.height || '0.5rem'};
  overflow: hidden;
  width: 100%;
`;

const Fill = styled.div`
  background: var(--quiz-progress);
  height: 100%;
  transition: width 0.3s ease;
  width: ${props => props.width || '0%'};
`;

const ProgressBar = ({ percentage, height }) => (
  <Bar height={height}>
    <Fill width={`${percentage}%`} />
  </Bar>
);

export default ProgressBar;