// backend/models/Quiz.js
const mongoose = require('mongoose');

// This is the schema for the *detailed* quiz with questions
const QuizSchema = new mongoose.Schema({
  title: { type: String, required: true },
  timeLimit: { type: Number, required: true }, // in minutes
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      correctAnswer: { type: Number, required: true }, // index of the correct option
    },
  ],
  // These are for the *list* on the home page
  description: { type: String, required: true },
  category: { type: String, required: true },
  difficulty: { type: String, required: true },
  questionCount: { type: Number, required: true },
  imageUrl: { type: String },
  participants: { type: Number, default: 0 },
});

module.exports = mongoose.model('Quiz', QuizSchema);