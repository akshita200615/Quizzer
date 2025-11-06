// src/utils/helpers.js

/**
 * Formats a number of seconds into an MM:SS string.
 * @param {number} seconds - The total number of seconds.
 * @returns {string} - The formatted time string.
 */
export const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
};

/**
 * Saves a quiz score to localStorage.
 * @param {string} title - The title of the quiz.
 * @param {number} score - The user's score.
 * @param {number} total - The total number of questions.
 */
export const saveScore = (title, score, total) => {
  try {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    const newScore = {
      title,
      score,
      total,
      date: new Date().toLocaleString(),
    };
    history.push(newScore);
    localStorage.setItem('quizHistory', JSON.stringify(history));
  } catch (error) {
    console.error('Failed to save score:', error);
  }
};

/**
 * Loads the score history from localStorage.
 * @returns {Array} - An array of score objects.
 */
export const loadHistory = () => {
  try {
    const history = JSON.parse(localStorage.getItem('quizHistory')) || [];
    return history.reverse();
  } catch (error) {
    console.error('Failed to load history:', error);
    return [];
  }
};