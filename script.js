// QuizMaster - Main JavaScript functionality

// Global state
let currentQuiz = null;
let currentQuestion = 0;
let userAnswers = [];
let timer = null;
let timeRemaining = 0;
let quizStartTime = null;

// DOM elements
const homePage = document.getElementById('homePage');
const quizPage = document.getElementById('quizPage');
const resultsPage = document.getElementById('resultsPage');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    loadQuizCards();
    showPage('home');
});

// Page management
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    
    const targetPage = document.getElementById(pageId + 'Page');
    if (targetPage) {
        targetPage.classList.add('active');
    }
}

// Smooth scroll to quizzes section
function scrollToQuizzes() {
    const quizzesSection = document.getElementById('quizzesSection');
    if (quizzesSection) {
        quizzesSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Load quiz cards on home page
function loadQuizCards() {
    const quizGrid = document.getElementById('quizGrid');
    if (!quizGrid) return;

    quizGrid.innerHTML = '';

    quizData.forEach(quiz => {
        const quizCard = createQuizCard(quiz);
        quizGrid.appendChild(quizCard);
    });
}

// Create a quiz card element
function createQuizCard(quiz) {
    const card = document.createElement('div');
    card.className = 'quiz-card animate-slide-up';
    card.onclick = () => startQuiz(quiz.id);

    const difficultyClass = getDifficultyClass(quiz.difficulty);
    
    card.innerHTML = `
        <div class="quiz-header">
            <img src="${quiz.imageUrl}" alt="${quiz.title}" class="quiz-image">
            <div class="difficulty-badge ${difficultyClass}">
                ${quiz.difficulty}
            </div>
        </div>
        
        <div class="quiz-content">
            <h3 class="quiz-title">${quiz.title}</h3>
            <span class="category-badge">${quiz.category}</span>
            <p class="quiz-description">${quiz.description}</p>
            
            <div class="quiz-meta">
                <div class="meta-group">
                    <div class="meta-item">
                        <span class="icon">📚</span>
                        <span>${quiz.questionCount} questions</span>
                    </div>
                    ${quiz.timeLimit ? `
                        <div class="meta-item">
                            <span class="icon">⏰</span>
                            <span>${quiz.timeLimit} min</span>
                        </div>
                    ` : ''}
                </div>
                <div class="meta-item">
                    <span class="icon">👥</span>
                    <span>${quiz.participants}</span>
                </div>
            </div>
            
            <button class="btn btn-hero" style="width: 100%;">
                <span class="icon">🏆</span>
                Start Quiz
            </button>
        </div>
    `;

    return card;
}

// Get CSS class for difficulty badge
function getDifficultyClass(difficulty) {
    switch (difficulty) {
        case 'Easy': return 'badge-easy';
        case 'Medium': return 'badge-medium';
        case 'Hard': return 'badge-hard';
        default: return 'badge-easy';
    }
}

// Start a quiz
function startQuiz(quizId) {
    currentQuiz = quizData.find(quiz => quiz.id === quizId);
    if (!currentQuiz) return;

    // Reset quiz state
    currentQuestion = 0;
    userAnswers = new Array(currentQuiz.questions.length).fill(-1);
    quizStartTime = new Date();

    // Setup timer if quiz has time limit
    if (currentQuiz.timeLimit) {
        timeRemaining = currentQuiz.timeLimit * 60; // Convert to seconds
        startTimer();
    }

    // Initialize quiz UI
    updateQuizHeader();
    updateProgressCard();
    showQuestion();
    updateNavigation();

    // Show quiz page
    showPage('quiz');
}

// Start the countdown timer
function startTimer() {
    const timerDisplay = document.getElementById('timerDisplay');
    const timerText = document.getElementById('timerText');
    
    if (timerDisplay) {
        timerDisplay.style.display = 'flex';
    }

    timer = setInterval(() => {
        timeRemaining--;
        
        if (timerText) {
            timerText.textContent = formatTime(timeRemaining);
        }

        if (timeRemaining <= 0) {
            clearInterval(timer);
            finishQuiz();
        }
    }, 1000);

    // Update initial display
    if (timerText) {
        timerText.textContent = formatTime(timeRemaining);
    }
}

// Format time in MM:SS format
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Update quiz header
function updateQuizHeader() {
    const quizTitle = document.getElementById('quizTitle');
    if (quizTitle && currentQuiz) {
        quizTitle.textContent = currentQuiz.title;
    }
}

// Update progress card
function updateProgressCard() {
    if (!currentQuiz) return;

    const progressBadge = document.getElementById('progressBadge');
    const questionNumber = document.getElementById('questionNumber');
    const progressPercent = document.getElementById('progressPercent');
    const progressFill = document.getElementById('progressFill');

    const answeredCount = userAnswers.filter(answer => answer !== -1).length;
    const progress = ((currentQuestion + 1) / currentQuiz.questions.length) * 100;

    if (progressBadge) {
        progressBadge.textContent = `${answeredCount} / ${currentQuiz.questions.length} answered`;
    }

    if (questionNumber) {
        questionNumber.textContent = `Question ${currentQuestion + 1} of ${currentQuiz.questions.length}`;
    }

    if (progressPercent) {
        progressPercent.textContent = `${Math.round(progress)}% complete`;
    }

    if (progressFill) {
        progressFill.style.width = `${progress}%`;
    }
}

// Show current question
function showQuestion() {
    if (!currentQuiz || !currentQuiz.questions[currentQuestion]) return;

    const question = currentQuiz.questions[currentQuestion];
    const questionText = document.getElementById('questionText');
    const optionsContainer = document.getElementById('optionsContainer');
    const questionCard = document.getElementById('questionCard');

    if (questionText) {
        questionText.textContent = question.question;
    }

    if (optionsContainer) {
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const optionButton = document.createElement('button');
            optionButton.className = 'option-button';
            
            if (userAnswers[currentQuestion] === index) {
                optionButton.classList.add('selected');
            }

            optionButton.innerHTML = `
                <span class="option-letter">${String.fromCharCode(65 + index)}</span>
                <span class="option-text">${option}</span>
            `;

            optionButton.onclick = () => selectAnswer(index);
            optionsContainer.appendChild(optionButton);
        });
    }

    // Add animation to question card
    if (questionCard) {
        questionCard.classList.remove('animate-bounce-in');
        void questionCard.offsetWidth; // Force reflow
        questionCard.classList.add('animate-bounce-in');
    }
}

// Select an answer
function selectAnswer(answerIndex) {
    userAnswers[currentQuestion] = answerIndex;
    
    // Update option buttons
    const optionButtons = document.querySelectorAll('.option-button');
    optionButtons.forEach((button, index) => {
        button.classList.toggle('selected', index === answerIndex);
    });

    // Update progress and navigation
    updateProgressCard();
    updateNavigation();
}

// Update navigation buttons
function updateNavigation() {
    const previousBtn = document.getElementById('previousBtn');
    const nextBtn = document.getElementById('nextBtn');
    const finishBtn = document.getElementById('finishBtn');

    if (previousBtn) {
        previousBtn.disabled = currentQuestion === 0;
    }

    const hasAnswer = userAnswers[currentQuestion] !== -1;
    const isLastQuestion = currentQuestion === currentQuiz.questions.length - 1;

    if (nextBtn && finishBtn) {
        if (isLastQuestion) {
            nextBtn.style.display = 'none';
            finishBtn.style.display = 'flex';
        } else {
            nextBtn.style.display = 'flex';
            nextBtn.disabled = !hasAnswer;
            finishBtn.style.display = 'none';
        }
    }
}

// Navigate to previous question
function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
        updateProgressCard();
        updateNavigation();
    }
}

// Navigate to next question
function nextQuestion() {
    if (currentQuestion < currentQuiz.questions.length - 1) {
        currentQuestion++;
        showQuestion();
        updateProgressCard();
        updateNavigation();
    }
}

// Finish the quiz
function finishQuiz() {
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // Calculate score
    const score = userAnswers.reduce((acc, answer, index) => {
        return answer === currentQuiz.questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);

    // Show results
    showResults(score);
}

// Show quiz results
function showResults(score) {
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);
    const performance = getPerformanceLevel(percentage);

    // Update results header
    updateResultsHeader(score, percentage, performance);
    
    // Update question review
    updateQuestionReview();

    // Show results page
    showPage('results');
}

// Update results header
function updateResultsHeader(score, percentage, performance) {
    const performanceCircle = document.getElementById('performanceCircle');
    const scoreDisplay = document.getElementById('scoreDisplay');
    const performanceBadge = document.getElementById('performanceBadge');
    const scoreDetails = document.getElementById('scoreDetails');
    const resultsProgressFill = document.getElementById('resultsProgressFill');

    if (performanceCircle) {
        performanceCircle.className = `performance-circle ${performance.color}`;
    }

    if (scoreDisplay) {
        scoreDisplay.textContent = `${percentage}%`;
    }

    if (performanceBadge) {
        performanceBadge.textContent = `${performance.icon} ${performance.level}`;
        performanceBadge.className = `performance-badge ${performance.color}`;
    }

    if (scoreDetails) {
        scoreDetails.innerHTML = `
            You scored <span class="score-number">${score}</span> out of 
            <span class="total-number">${currentQuiz.questions.length}</span> questions correctly
        `;
    }

    if (resultsProgressFill) {
        resultsProgressFill.style.width = `${percentage}%`;
    }
}

// Get performance level based on percentage
function getPerformanceLevel(percentage) {
    if (percentage >= 90) return { level: "Excellent", color: "gradient-success", icon: "🏆" };
    if (percentage >= 75) return { level: "Great", color: "gradient-primary", icon: "⭐" };
    if (percentage >= 60) return { level: "Good", color: "gradient-secondary", icon: "👍" };
    return { level: "Needs Improvement", color: "gradient-muted", icon: "📚" };
}

// Update question review section
function updateQuestionReview() {
    const reviewContent = document.getElementById('reviewContent');
    if (!reviewContent || !currentQuiz) return;

    reviewContent.innerHTML = '';

    currentQuiz.questions.forEach((question, index) => {
        const userAnswer = userAnswers[index];
        const isCorrect = userAnswer === question.correctAnswer;
        const isUnanswered = userAnswer === -1;

        const reviewItem = document.createElement('div');
        reviewItem.className = `review-item ${isUnanswered ? 'unanswered' : isCorrect ? 'correct' : 'incorrect'}`;

        reviewItem.innerHTML = `
            <div class="review-item-content">
                <div class="question-number">${index + 1}</div>
                <div class="review-details">
                    <div class="review-question">${question.question}</div>
                    <div class="review-answers">
                        ${!isUnanswered ? `
                            <div class="user-answer ${isCorrect ? 'correct' : 'incorrect'}">
                                Your answer: ${question.options[userAnswer]}
                            </div>
                        ` : ''}
                        ${!isCorrect ? `
                            <div class="correct-answer">
                                Correct answer: ${question.options[question.correctAnswer]}
                            </div>
                        ` : ''}
                        ${isUnanswered ? `
                            <div class="user-answer unanswered">
                                Not answered
                            </div>
                        ` : ''}
                    </div>
                </div>
                <div class="review-status">
                    ${isCorrect ? '✅' : isUnanswered ? '⏭️' : '❌'}
                </div>
            </div>
        `;

        reviewContent.appendChild(reviewItem);
    });
}

// Retake the current quiz
function retakeQuiz() {
    if (currentQuiz) {
        startQuiz(currentQuiz.id);
    }
}

// Share quiz results
function shareResults() {
    if (!currentQuiz) return;

    const score = userAnswers.reduce((acc, answer, index) => {
        return answer === currentQuiz.questions[index].correctAnswer ? acc + 1 : acc;
    }, 0);
    
    const percentage = Math.round((score / currentQuiz.questions.length) * 100);

    const shareData = {
        title: `Quiz Results - ${currentQuiz.title}`,
        text: `I scored ${score}/${currentQuiz.questions.length} (${percentage}%) on the ${currentQuiz.title} quiz!`,
        url: window.location.href,
    };

    if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        navigator.share(shareData).catch(console.error);
    } else {
        // Fallback: copy to clipboard
        const textToCopy = `${shareData.text} ${shareData.url}`;
        navigator.clipboard.writeText(textToCopy).then(() => {
            alert('Results copied to clipboard!');
        }).catch(() => {
            alert('Unable to share results. Please copy the URL manually.');
        });
    }
}

// Return to home page
function backToHome() {
    // Clear any running timer
    if (timer) {
        clearInterval(timer);
        timer = null;
    }

    // Reset state
    currentQuiz = null;
    currentQuestion = 0;
    userAnswers = [];
    timeRemaining = 0;

    // Hide timer display
    const timerDisplay = document.getElementById('timerDisplay');
    if (timerDisplay) {
        timerDisplay.style.display = 'none';
    }

    // Show home page
    showPage('home');
}

// Utility function to animate elements when they come into view
function observeAnimations() {
    const animatedElements = document.querySelectorAll('.animate-slide-up');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = '0s';
                entry.target.style.animationFillMode = 'both';
            }
        });
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Initialize animations when page loads
document.addEventListener('DOMContentLoaded', observeAnimations);