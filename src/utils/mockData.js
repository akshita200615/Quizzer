// src/utils/mockData.js

// This data simulates the list you see on the home page
export const mockQuizzes = [
  {
    id: '1',
    title: 'React Hooks Mastery',
    description: 'Test your knowledge of the most common React hooks.',
    category: 'React',
    difficulty: 'Medium',
    questionCount: 5,
    imageUrl: 'https://picsum.photos/id/10/600/400',
    participants: 1024,
  },
  {
    id: '2',
    title: 'JavaScript Async/Await',
    description: 'How well do you understand modern JavaScript async patterns?',
    category: 'JavaScript',
    difficulty: 'Hard',
    questionCount: 5,
    imageUrl: 'https://picsum.photos/id/20/600/400',
    participants: 2048,
  },
  {
    id: '3',
    title: 'CSS Wizards',
    description: 'Flexbox, Grid, and Modern CSS challenges.',
    category: 'CSS',
    difficulty: 'Easy',
    questionCount: 5,
    imageUrl: 'https://picsum.photos/id/30/600/400',
    participants: 512,
  },
  {
    id: '4',
    title: 'HTML5 Fundamentals',
    description: 'Check your knowledge of modern HTML5 tags and structure.',
    category: 'HTML',
    difficulty: 'Easy',
    questionCount: 5,
    imageUrl: 'https://picsum.photos/id/40/600/400',
    participants: 301,
  },
  {
    id: '5',
    title: 'World Capitals Challenge',
    description: 'How well do you know the capitals of the world?',
    category: 'General Knowledge',
    difficulty: 'Medium',
    questionCount: 5,
    imageUrl: 'https://picsum.photos/id/50/600/400',
    participants: 102,
  },
  {
    id: '6',
    title: 'Solar System Science',
    description: 'Explore the planets and wonders of our solar system.',
    category: 'Science',
    difficulty: 'Hard',
    questionCount: 5,
    imageUrl: 'https://picsum.photos/id/60/600/400',
    participants: 418,
  },
];

// This data simulates the API call for a *specific* quiz
export const mockQuizDetails = {
  '1': {
    id: '1',
    title: 'React Hooks Mastery',
    timeLimit: 10, // 10 minutes
    questions: [
      {
        question: 'What is the purpose of the `useState` hook?',
        options: [
          'To fetch data from an API',
          'To add stateful logic to function components',
          'To perform side effects',
          'To manage CSS styles',
        ],
        correctAnswer: 1,
      },
      {
        question: 'Which hook is used for performing side effects in a component?',
        options: ['useEffect', 'useState', 'useContext', 'useReducer'],
        correctAnswer: 0,
      },
      {
        question: 'What does the second argument (dependency array) in `useEffect` do?',
        options: [
          'It specifies the state variable to update',
          'It defines the component props',
          'It controls when the effect runs',
          'It lists the functions to call',
        ],
        correctAnswer: 2,
      },
      {
        question: 'What is `useContext` used for?',
        options: [
          'To pass props down manually',
          'To manage component state',
          'To avoid "prop drilling"',
          'To create refs to DOM elements',
        ],
        correctAnswer: 2,
      },
      {
        question: 'What is a "controlled component" in React?',
        options: [
          'A component that controls other components',
          'A component that is controlled by Redux',
          'An input form element whose value is controlled by React state',
          'A component with no state',
        ],
        correctAnswer: 2,
      },
    ],
  },
  '2': {
    id: '2',
    title: 'JavaScript Async/Await',
    timeLimit: 5, // 5 minutes
    questions: [
      {
        question: 'What keyword is used to pause execution inside an `async` function?',
        options: ['pause', 'wait', 'await', 'stop'],
        correctAnswer: 2,
      },
      {
        question: 'What does an `async` function always return?',
        options: ['A boolean', 'A Promise', 'An object', 'null'],
        correctAnswer: 1,
      },
      {
        question: 'What does `...` (the spread operator) do?',
        options: [
          'Multiplies numbers',
          'Expands an iterable into individual elements',
          'Creates a comment',
          'Selects all elements in the DOM',
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is a "closure" in JavaScript?',
        options: [
          'A way to close a web browser',
          'A function that has access to its outer function\'s scope',
          'A syntax error',
          'A type of variable',
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the difference between `==` and `===`?',
        options: [
          'No difference',
          '`==` compares value (with coercion), `===` compares value and type',
          '`===` is faster',
          '`==` is for numbers, `===` is for strings',
        ],
        correctAnswer: 1,
      },
    ],
  },
  '3': {
    id: '3',
    title: 'CSS Wizards',
    timeLimit: 5, // 5 minutes
    questions: [
      {
        question: 'Which CSS property is used to create a flexible layout?',
        options: ['display: flex', 'display: block', 'position: relative', 'float: left'],
        correctAnswer: 0,
      },
      {
        question: 'What does `justify-content: center` do in Flexbox?',
        options: [
          'Centers items vertically',
          'Centers items horizontally (on the main axis)',
          'Adds space around items',
          'Stretches items',
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the "box model" in CSS?',
        options: [
          'A 3D model of a box',
          'A model for 2D layout',
          'Content, padding, border, and margin',
          'A CSS framework',
        ],
        correctAnswer: 2,
      },
      {
        question: 'What does `position: absolute` do?',
        options: [
          'Makes an element position itself relative to the viewport',
          'Removes an element from the normal document flow',
          'Centers an element',
          'Makes an element static',
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the purpose of a CSS preprocessor like SASS?',
        options: [
          'To make CSS run faster',
          'To add features like variables, nesting, and mixins',
          'To minify CSS files',
          'To automatically write CSS',
        ],
        correctAnswer: 1,
      },
    ],
  },
  '4': {
    id: '4',
    title: 'HTML5 Fundamentals',
    timeLimit: 5,
    questions: [
      {
        question: 'What does the `<!DOCTYPE html>` declaration do?',
        options: [
          'It creates an HTML element',
          'It defines the document type and version of HTML',
          'It adds a comment',
          'It links a stylesheet',
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the difference between `<div>` and `<span>`?',
        options: [
          'No difference',
          '`<div>` is for links, `<span>` is for text',
          '`<div>` is a block-level element, `<span>` is an inline element',
          '`<span>` has more attributes',
        ],
        correctAnswer: 2,
      },
      {
        question: 'Which tag is used to create a hyperlink?',
        options: ['<link>', '<a>', '<href>', '<ul>'],
        correctAnswer: 1,
      },
      {
        question: 'What are "semantic" HTML tags?',
        options: [
          'Tags that are difficult to understand',
          'Tags that describe their meaning (e.g., <article>, <header>)',
          'Tags that are deprecated',
          'Tags that control layout',
        ],
        correctAnswer: 1,
      },
      {
        question: 'What is the purpose of the `alt` attribute on an `<img>` tag?',
        options: [
          'To provide a title for the image',
          'To set the image alignment',
          'To provide alternative text for screen readers',
          'To link the image',
        ],
        correctAnswer: 2,
      },
    ],
  },
  '5': {
    id: '5',
    title: 'World Capitals Challenge',
    timeLimit: 5,
    questions: [
      {
        question: 'What is the capital of Japan?',
        options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
        correctAnswer: 2,
      },
      {
        question: 'What is the capital of Canada?',
        options: ['Toronto', 'Vancouver', 'Montreal', 'Ottawa'],
        correctAnswer: 3,
      },
      {
        question: 'What is the capital of Australia?',
        options: ['Sydney', 'Melbourne', 'Canberra', 'Brisbane'],
        correctAnswer: 2,
      },
      {
        question: 'What is the capital of Egypt?',
        options: ['Cairo', 'Alexandria', 'Giza', 'Luxor'],
        correctAnswer: 0,
      },
      {
        question: 'What is the capital of Brazil?',
        options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
        correctAnswer: 2,
      },
    ],
  },
  '6': {
    id: '6',
    title: 'Solar System Science',
    timeLimit: 5,
    questions: [
      {
        question: 'Which planet is known as the "Red Planet"?',
        options: ['Jupiter', 'Venus', 'Mars', 'Saturn'],
        correctAnswer: 2,
      },
      {
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Saturn', 'Jupiter', 'Neptune'],
        correctAnswer: 2,
      },
      {
        question: 'What is the powerhouse of the cell?',
        options: ['Nucleus', 'Ribosome', 'Mitochondria', 'Cell membrane'],
        correctAnswer: 2,
      },
      {
        question: 'What gas do plants absorb from the atmosphere?',
        options: ['Oxygen', 'Nitrogen', 'Carbon Dioxide', 'Hydrogen'],
        correctAnswer: 2,
      },
      {
        question: 'What is the chemical symbol for Gold?',
        options: ['Go', 'Ag', 'Au', 'Gd'],
        correctAnswer: 2,
      },
    ],
  },
};