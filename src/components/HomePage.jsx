// src/components/HomePage.jsx
import React from 'react';
import styled from 'styled-components';
import QuizCard from './QuizCard';
import Footer from './Footer';
import Button from './Button';
import { Container, Page, SectionTitle } from '../styles/Common';
import { pulseGlow, slideUp } from '../styles/GlobalStyle';

// --- Dark Theme Components (No Change) ---
const HeroSection = styled.section`
  padding: 5rem 0;
  text-align: center;
`;

const HeroImage = styled.img`
  width: 8rem;
  height: 8rem;
  border-radius: 1.5rem;
  box-shadow: var(--shadow-glow);
  animation: ${pulseGlow} 2s ease-in-out infinite;
  margin-bottom: 2rem;
`;

const HeroTitle = styled.h1`
  font-size: clamp(3rem, 8vw, 5rem);
  font-weight: 800;
  color: white;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  animation: ${slideUp} 0.6s ease-out;
`;

const AccentText = styled.span`
  color: var(--accent);
`;

const HeroDescription = styled.p`
  font-size: clamp(1.125rem, 3vw, 1.5rem);
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2rem;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
  animation: ${slideUp} 0.6s ease-out;
`;

// --- UPDATED QUIZ GRID (2-in-a-row) ---
const QuizGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* <-- 2 COLUMNS */
  gap: 2rem;
  max-width: 1000px; /* <-- Constrain width for a cleaner look */
  margin: 0 auto; /* <-- Center the grid */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* <-- 1 column on mobile */
  }
`;

// --- NEW WHITE SECTION WRAPPER ---
const WhiteSection = styled.section`
  background: white;
  color: #282e3e; /* Dark text */
  padding: 5rem 0;

  /* Style links inside the white section */
  a {
    color: var(--primary);
    font-weight: 600;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// --- NEW FEATURES SECTION (image_ec2604) ---
const FeatureRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 3rem;
  padding: 3rem 0;

  /* Reverse order for alternating layout */
  &:nth-child(even) {
    grid-template-columns: 1fr 1fr;
    & > :first-child {
      order: 2;
    }
    & > :last-child {
      order: 1;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    &:nth-child(even) {
      grid-template-columns: 1fr;
      & > :first-child {
        order: 1; /* Stack in order on mobile */
      }
      & > :last-child {
        order: 2; /* Stack in order on mobile */
      }
    }
  }
`;

const FeatureText = styled.div`
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }
  p {
    font-size: 1.125rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #586380;
  }
`;

const FeatureImage = styled.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
`;

// --- NEW FLASHCARDS SECTION (image_ec2600) ---
const FlashcardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Flashcard = styled.div`
  background: white;
  border-radius: var(--border-radius-lg);
  border: 1px solid #d9ddee;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }
`;

const CardTerm = styled.span`
  background: #eef1f8;
  color: #586380;
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.8rem;
  font-weight: 600;
`;

const CardUser = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1.5rem;

  img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
  span {
    font-size: 0.875rem;
    font-weight: 500;
  }
`;

// Mock data for flashcards
const flashcards = [
  { title: 'Chapter 6 Review Exam', terms: 23, user: 'luckblue404', img: 'https://picsum.photos/id/433/32/32' },
  { title: 'Sadlier Level F - Unit 5', terms: 20, user: 'Christina_Namendorf', img: 'https://picsum.photos/id/431/32/32' },
  { title: 'Old English/Medieval Review', terms: 73, user: 'CPrice125', img: 'https://picsum.photos/id/432/32/32' },
];

// --- The Final Page Component ---
const HomePage = ({ quizzes, onStartQuiz }) => (
  <>
    <Page>
      {/* --- DARK SECTION (TOP) --- */}
      <HeroSection>
        <Container>
          <HeroImage src="logo.png" alt="Quizzer Logo" />
          <HeroTitle>
            Welcome to <AccentText>Quizzer</AccentText>
          </HeroTitle>
          <HeroDescription>
            Select a quiz from the categories below to test your knowledge.
          </HeroDescription>
        </Container>
      </HeroSection>
      <Container>
        <SectionTitle>All Quizzes</SectionTitle>
        <QuizGrid>
          {quizzes.map(quiz => (
            <QuizCard
              key={quiz._id}
              quiz={quiz}
              onClick={() => onStartQuiz(quiz._id)}
            />
          ))}
        </QuizGrid>
      </Container>

      {/* --- NEW WHITE SECTIONS (BOTTOM) --- */}
      <WhiteSection>
        {/* --- Features Section --- */}
        <Container>
          <FeatureRow>
            <FeatureText>
              <h2>Every class, every test, one ultimate study app</h2>
              <p>
                Create your own flashcards or find sets made by teachers, students, and experts. Study them
                anytime, anywhere with our free app.
              </p>
              {/* You can add app store buttons here */}
            </FeatureText>
            <FeatureImage src="https://picsum.photos/id/11/600/400" alt="Study App" />
          </FeatureRow>

          <FeatureRow>
            <FeatureText>
              <h2>Make class material instantly studiable</h2>
              <p>
                Turn your slides, videos, and notes into flashcard sets, practice tests, and study guides.
              </p>
              <Button $variant="primary">Try it out</Button>
            </FeatureText>
            <FeatureImage src="https://picsum.photos/id/12/600/400" alt="Class Material" />
          </FeatureRow>

          <FeatureRow>
            <FeatureText>
              <h2>Test prep for any subject</h2>
              <p>
                Memorize anything with personalized practice tests and study sessions. In Learn, 90% of
                students say Quizlet has improved their understanding.
              </p>
              <Button $variant="primary">Get started</Button>
            </FeatureText>
            <FeatureImage src="https://picsum.photos/id/13/600/400" alt="Test Prep" />
          </FeatureRow>
        </Container>
      </WhiteSection>

      <WhiteSection style={{ background: '#f6f7fb' }}> {/* Lighter gray background */}
        {/* --- Flashcards Section --- */}
        <Container>
          <SectionTitle style={{ color: '#282e3e' }}>Popular flashcard sets</SectionTitle>
          <FlashcardGrid>
            {flashcards.map((card, index) => (
              <Flashcard key={index}>
                <h3>{card.title}</h3>
                <CardTerm>{card.terms} terms</CardTerm>
                <CardUser>
                  <img src={card.img} alt={card.user} />
                  <span>{card.user}</span>
                </CardUser>
              </Flashcard>
            ))}
          </FlashcardGrid>
        </Container>
      </WhiteSection>

      {/* --- NEW FOOTER --- */}
      <Footer />
    </Page>
  </>
);

export default HomePage;