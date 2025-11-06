import React, { useState, useEffect, useRef } from 'react';

// Styles
import GlobalStyle from './styles/GlobalStyle';

// Page Components
import HomePage from './components/HomePage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import HistoryPage from './components/HistoryPage';

// Utils
import { saveScore, loadHistory } from './utils/helpers';

// --- UPDATE THE API URL ---
// This automatically uses the production URL (VITE_API_URL) when deployed,
// but falls back to localhost for development.
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

// --- The Main App Component ---
function App() {
  // --- State Management ---
  const [page, setPage] = useState('home'); // 'home', 'quiz', 'results', 'history'
  const [quizzes, setQuizzes] = useState([]);
  const [currentQuiz, setCurrentQuiz] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]); // Stores { question, selected, correct, isCorrect }
  const [selectedAnswer, setSelectedAnswer] = useState(null); // { index }
  const [timeLeft, setTimeLeft] = useState(null);
  const [history, setHistory] = useState([]);
  const timerRef = useRef(null);

  // --- NEW STATE ---
  const [answerSubmitted, setAnswerSubmitted] = useState(false);

  // --- Data Fetching Effect ---
  useEffect(() => {
    async function loadQuizList() {
      try {
        const response = await fetch(`${API_URL}/api/quizzes`);
        const data = await response.json();
        setQuizzes(data);
      } catch (error) {
        console.error('Could not fetch quiz list:', error);
      }
    }
    loadQuizList();
  }, []);

  // --- Timer Effect ---
  useEffect(() => {
    if (page === 'quiz' && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0 && page === 'quiz') {
      clearInterval(timerRef.current);
      handleShowResults(); // Auto-submit when time runs out
    }
    return () => clearInterval(timerRef.current);
  }, [page, timeLeft]);

  // --- Core Logic Functions ---

  // --- loadSpecificQuiz ---
  const loadSpecificQuiz = async quizId => {
    try {
      const response = await fetch(`${API_URL}/api/quiz/${quizId}`);
      const quiz = await response.json();
      startQuiz(quiz);
    } catch (error) {
      console.error(`Could not fetch quiz ${quizId}:`, error);
      alert('Error: Quiz not found.');
    }
  };

  // --- startQuiz ---
  const startQuiz = quiz => {
    setCurrentQuiz(quiz);
    setCurrentQuestionIndex(0);
    setScore(0);
    setUserAnswers([]);
    setSelectedAnswer(null);
    setTimeLeft(quiz.timeLimit * 60);
    setAnswerSubmitted(false); // <-- RESET
    setPage('quiz');
  };

  // --- selectAnswer ---
  // This just saves the *choice*, it doesn't check it
  const selectAnswer = (selectedIndex) => {
    if (answerSubmitted) return; // Don't allow changing answer
    setSelectedAnswer({ index: selectedIndex });
  };

  // --- handleSubmitAnswer ---
  // This checks the answer, scores, and saves
  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    
    const question = currentQuiz.questions[currentQuestionIndex];
    const selectedIndex = selectedAnswer.index;
    const correctAnswerIndex = question.correctAnswer;
    const isCorrect = selectedIndex === correctAnswerIndex;

    if (isCorrect) {
      setScore(prevScore => prevScore + 1);
    }

    setUserAnswers(prevAnswers => [
      ...prevAnswers,
      {
        question: question.question,
        selected: question.options[selectedIndex],
        correct: question.options[correctAnswerIndex],
        isCorrect: isCorrect,
      },
    ]);
    
    setAnswerSubmitted(true); // Lock in the answer
  };

  // --- handleNextButton ---
  const handleNextButton = () => {
    if (currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
      setSelectedAnswer(null);
      setAnswerSubmitted(false); // <-- RESET for next question
    } else {
      handleShowResults(); // Quiz is over
    }
  };

  // --- handleShowResults ---
  const handleShowResults = () => {
    clearInterval(timerRef.current);
    saveScore(currentQuiz.title, score, currentQuiz.questions.length);
    setPage('results');
  };

  // --- handleShowHistory ---
  const handleShowHistory = () => {
    setHistory(loadHistory());
    setPage('history');
  };

  // --- handleRestart ---
  const handleRestart = () => {
    startQuiz(currentQuiz);
  };

  // --- handleGoHome ---
  const handleGoHome = () => {
    setCurrentQuiz(null);
    setPage('home');
  };

  // --- Render ---
  const renderPage = () => {
    switch (page) {
      case 'quiz':
        return (
          <QuizPage
            quiz={currentQuiz}
            question={currentQuiz.questions[currentQuestionIndex]}
            questionIndex={currentQuestionIndex}
            score={score}
            timeLeft={timeLeft}
            selectedAnswer={selectedAnswer}
            answerSubmitted={answerSubmitted} // <-- PASS NEW STATE
            onSelectAnswer={selectAnswer}
            onSubmitAnswer={handleSubmitAnswer} // <-- PASS NEW HANDLER
            onNext={handleNextButton}
            onGoHome={handleGoHome}
          />
        );
      case 'results':
        return (
          <ResultsPage
            score={score}
            userAnswers={userAnswers}
            quiz={currentQuiz}
            onRestart={handleRestart}
            onGoHome={handleGoHome}
            onShowHistory={handleShowHistory}
          />
        );
      case 'history':
        return <HistoryPage history={history} onGoHome={handleGoHome} />;
      case 'home':
      default:
        return <HomePage quizzes={quizzes} onStartQuiz={loadSpecificQuiz} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      {renderPage()}
    </>
  );
}

export default App;