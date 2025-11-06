// src/styles/Common.js
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--container-padding);
`;

export const Page = styled.div`
  min-height: 100vh;
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

export const SectionTitle = styled.h2`
  font-size: clamp(2rem, 5vw, 3rem);
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-align: center; /* <--- THIS IS THE FIX for "All Quizzes" */
`;