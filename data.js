// Quiz Data - Sample quizzes with questions and answers
const quizData = [
    {
        id: "science-basics",
        title: "Science Fundamentals",
        description: "Test your knowledge of basic scientific principles and concepts",
        category: "Science",
        difficulty: "Easy",
        questionCount: 5,
        timeLimit: 10, // minutes
        participants: 1247,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNlUDq5WpdnYr8TiFoUFoGg7oEXxoIPWArPQ&s",
        questions: [
            {
                id: "q1",
                question: "What is the chemical symbol for water?",
                options: ["H2O", "CO2", "NaCl", "CH4"],
                correctAnswer: 0,
                type: "multiple-choice"
            },
            {
                id: "q2",
                question: "Which planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Saturn"],
                correctAnswer: 1,
                type: "multiple-choice"
            },
            {
                id: "q3",
                question: "What force keeps planets in orbit around the sun?",
                options: ["Magnetism", "Electricity", "Gravity", "Friction"],
                correctAnswer: 2,
                type: "multiple-choice"
            },
            {
                id: "q4",
                question: "The smallest unit of matter is called an atom.",
                options: ["True", "False"],
                correctAnswer: 0,
                type: "true-false"
            },
            {
                id: "q5",
                question: "Which gas makes up most of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correctAnswer: 2,
                type: "multiple-choice"
            }
        ]
    },
    {
        id: "world-history",
        title: "World History Quiz",
        description: "Journey through major historical events and civilizations",
        category: "History",
        difficulty: "Medium",
        questionCount: 5,
        timeLimit: 12,
        participants: 892,
        imageUrl: "https://play-lh.googleusercontent.com/FSi-XkZeIKie6wtu4tm_tQGKbuYPANOoHmhM85Gp9NdjtIhlAV5ug7EKllaw3nSFMRUa",
        questions: [
            {
                id: "h1",
                question: "In which year did World War II end?",
                options: ["1944", "1945", "1946", "1947"],
                correctAnswer: 1,
                type: "multiple-choice"
            },
            {
                id: "h2",
                question: "Who was the first person to walk on the moon?",
                options: ["Buzz Aldrin", "Neil Armstrong", "John Glenn", "Yuri Gagarin"],
                correctAnswer: 1,
                type: "multiple-choice"
            },
            {
                id: "h3",
                question: "The Great Wall of China was built to keep out invaders.",
                options: ["True", "False"],
                correctAnswer: 0,
                type: "true-false"
            },
            {
                id: "h4",
                question: "Which ancient civilization built the pyramids of Giza?",
                options: ["Romans", "Greeks", "Egyptians", "Babylonians"],
                correctAnswer: 2,
                type: "multiple-choice"
            },
            {
                id: "h5",
                question: "The Renaissance period began in which country?",
                options: ["France", "England", "Italy", "Spain"],
                correctAnswer: 2,
                type: "multiple-choice"
            }
        ]
    },
    {
        id: "programming-basics",
        title: "Programming Fundamentals",
        description: "Basic concepts every programmer should know",
        category: "Programming",
        difficulty: "Medium",
        questionCount: 5,
        timeLimit: 15,
        participants: 2156,
        imageUrl: "https://miro.medium.com/v2/resize:fit:1400/1*E9jq3Wm_OSoPk5u4xNzKlg.jpeg",
        questions: [
            {
                id: "p1",
                question: "What does HTML stand for?",
                options: [
                    "Hyper Text Markup Language", 
                    "High Tech Modern Language", 
                    "Home Tool Markup Language", 
                    "Hyperlink and Text Markup Language"
                ],
                correctAnswer: 0,
                type: "multiple-choice"
            },
            {
                id: "p2",
                question: "Which of these is NOT a programming language?",
                options: ["Python", "JavaScript", "HTML", "Java"],
                correctAnswer: 2,
                type: "multiple-choice"
            },
            {
                id: "p3",
                question: "CSS is used for styling web pages.",
                options: ["True", "False"],
                correctAnswer: 0,
                type: "true-false"
            },
            {
                id: "p4",
                question: "What does API stand for?",
                options: [
                    "Application Programming Interface", 
                    "Advanced Programming Integration", 
                    "Automated Program Instruction", 
                    "Application Process Integration"
                ],
                correctAnswer: 0,
                type: "multiple-choice"
            },
            {
                id: "p5",
                question: "Which symbol is used for comments in JavaScript?",
                options: ["#", "//", "<!--", "/*"],
                correctAnswer: 1,
                type: "multiple-choice"
            }
        ]
    },
    {
        id: "sports-trivia",
        title: "Sports Trivia Challenge",
        description: "Test your knowledge of sports facts and records",
        category: "Sports",
        difficulty: "Hard",
        questionCount: 5,
        timeLimit: 8,
        participants: 743,
        imageUrl: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2182970/capsule_616x353.jpg?t=1742941703",
        questions: [
            {
                id: "s1",
                question: "How many players are on a basketball team on the court at one time?",
                options: ["4", "5", "6", "7"],
                correctAnswer: 1,
                type: "multiple-choice"
            },
            {
                id: "s2",
                question: "Which country has won the most FIFA World Cups?",
                options: ["Germany", "Argentina", "Brazil", "Italy"],
                correctAnswer: 2,
                type: "multiple-choice"
            },
            {
                id: "s3",
                question: "The Olympics are held every 4 years.",
                options: ["True", "False"],
                correctAnswer: 0,
                type: "true-false"
            },
            {
                id: "s4",
                question: "In which sport would you perform a slam dunk?",
                options: ["Tennis", "Basketball", "Volleyball", "Baseball"],
                correctAnswer: 1,
                type: "multiple-choice"
            },
            {
                id: "s5",
                question: "What is the maximum score possible in ten-pin bowling?",
                options: ["200", "250", "300", "350"],
                correctAnswer: 2,
                type: "multiple-choice"
            }
        ]
    }
];

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { quizData };

}

