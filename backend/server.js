const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./db');
const Quiz = require('./models/Quiz');

// Load .env variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();
app.use(express.json()); // Allows us to accept JSON in the request body

// --- START OF CORS UPDATE ---
// We now allow MULTIPLE URLs to talk to our backend
const whitelist = [
  process.env.CLIENT_URL,       // The Railway frontend URL (if you have one)
  process.env.GITHUB_PAGES_URL, // Your new GitHub Pages URL
  'http://localhost:5173'       // Your local development URL
];

const corsOptions = {
  origin: (origin, callback) => {
    // We check if the 'origin' (the site making the request) is in our whitelist
    // We also allow 'undefined' origins (like Postman or curl)
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      console.error('CORS Error: Origin not allowed:', origin); // Log the bad origin
      callback(new Error('Not allowed by CORS'));
    }
  },
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
// --- END OF CORS UPDATE ---

const PORT = process.env.PORT || 5001;

// --- API ROUTES (No changes below) ---

// GET: /api/quizzes
// Get a *list* of all quizzes (without questions)
app.get('/api/quizzes', async (req, res) => {
  try {
    const quizzes = await Quiz.find().select(
      'title description category difficulty questionCount imageUrl participants'
    );
    res.json(quizzes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET: /api/quiz/:id
// Get a *single* quiz with all its questions
app.get('/api/quiz/:id', async (req, res) => {
  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res.status(404).json({ message: 'Quiz not found' });
    }
    res.json(quiz);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST route to add a new quiz
app.post('/api/quizzes', async (req, res) => {
  try {
    const newQuiz = new Quiz(req.body); // req.body should match your schema
    const savedQuiz = await newQuiz.save();
    res.status(201).json(savedQuiz);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});