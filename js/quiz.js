/* ============================================
   Quiz Page JavaScript
   ============================================ */

// Quiz questions based on skill level
const questionsByLevel = {
    // Basic Understanding - foundational concepts
    basic: [
        {
            question: 'Which of these best describes a <span class="highlight">"variable"</span> in Python?',
            options: [
                'A reserved container for storing data values',
                'A permanent label that cannot be changed',
                'A specific type of function used for loops',
                'A mathematical equation solver'
            ],
            correctIndex: 0
        },
        {
            question: 'What symbol is used to assign a value to a variable in Python?',
            options: [
                'The colon (:)',
                'The equals sign (=)',
                'The arrow (->)',
                'The hash symbol (#)'
            ],
            correctIndex: 1
        },
        {
            question: 'Which of these is a valid <span class="highlight">variable name</span> in Python?',
            options: [
                '2nd_variable',
                'my-variable',
                'my_variable',
                'class'
            ],
            correctIndex: 2
        }
    ],

    // Some Experience - intermediate concepts
    intermediate: [
        {
            question: 'What is the output of <span class="highlight">len([1, 2, [3, 4]])</span> in Python?',
            options: [
                '4',
                '3',
                '5',
                'Error'
            ],
            correctIndex: 1
        },
        {
            question: 'Which keyword is used to handle <span class="highlight">exceptions</span> in Python?',
            options: [
                'catch',
                'handle',
                'except',
                'error'
            ],
            correctIndex: 2
        },
        {
            question: 'What does the <span class="highlight">*args</span> syntax do in a function definition?',
            options: [
                'Multiplies all arguments together',
                'Allows passing a variable number of positional arguments',
                'Makes all arguments required',
                'Converts arguments to a dictionary'
            ],
            correctIndex: 1
        }
    ],

    // Pro / Advanced - complex concepts
    advanced: [
        {
            question: 'What is the time complexity of <span class="highlight">dictionary lookup</span> in Python on average?',
            options: [
                'O(n)',
                'O(log n)',
                'O(1)',
                'O(n²)'
            ],
            correctIndex: 2
        },
        {
            question: 'Which design pattern does Python\'s <span class="highlight">context manager</span> (with statement) implement?',
            options: [
                'Singleton Pattern',
                'Factory Pattern',
                'RAII (Resource Acquisition Is Initialization)',
                'Observer Pattern'
            ],
            correctIndex: 2
        },
        {
            question: 'What is a <span class="highlight">metaclass</span> in Python?',
            options: [
                'A class that inherits from multiple parents',
                'A class whose instances are classes themselves',
                'A class with only static methods',
                'A deprecated feature in Python 3'
            ],
            correctIndex: 1
        }
    ]
};

// State management
let currentQuestionIndex = 0;
let selectedAnswers = [];
let currentQuestions = [];
let skillLevel = '';

document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});

/**
 * Initialize the quiz
 */
function initQuiz() {
    skillLevel = localStorage.getItem('selectedSkillLevel');
    const course = localStorage.getItem('selectedCourse');

    // Redirect if no skill level or if beginner (new to this)
    if (!skillLevel || skillLevel === 'beginner') {
        // For beginners, redirect to a different flow (to be implemented)
        // For now, go back to skill selection
        window.location.href = 'skill-level.html';
        return;
    }

    // Get questions for the skill level
    currentQuestions = questionsByLevel[skillLevel] || questionsByLevel.basic;

    // Update total questions display
    document.getElementById('total-questions').textContent = currentQuestions.length;

    // Load first question
    loadQuestion(0);

    // Initialize button
    initNextButton();
}

/**
 * Load a question by index
 */
function loadQuestion(index) {
    const question = currentQuestions[index];
    if (!question) return;

    // Update question counter
    document.getElementById('current-question').textContent = index + 1;

    // Update question text with animation
    const questionElement = document.getElementById('question-text');
    questionElement.innerHTML = question.question;
    questionElement.parentElement.classList.add('slide-in');

    // Generate options HTML
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    optionsContainer.classList.add('slide-in');

    question.options.forEach((option, optIndex) => {
        const isSelected = selectedAnswers[index] === optIndex;
        const button = document.createElement('button');
        button.className = `quiz-option ${isSelected ? 'quiz-option--selected' : ''}`;
        button.dataset.index = optIndex;
        button.innerHTML = `
            <div class="quiz-option__radio"></div>
            <p class="quiz-option__text">${option}</p>
        `;
        button.addEventListener('click', () => selectOption(optIndex));
        optionsContainer.appendChild(button);
    });

    // Update button state
    updateNextButton();

    // Remove animation class after animation completes
    setTimeout(() => {
        questionElement.parentElement.classList.remove('slide-in');
        optionsContainer.classList.remove('slide-in');
    }, 400);
}

/**
 * Handle option selection
 */
function selectOption(optionIndex) {
    // Store the selected answer
    selectedAnswers[currentQuestionIndex] = optionIndex;

    // Update UI
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('quiz-option--selected');
        } else {
            opt.classList.remove('quiz-option--selected');
        }
    });

    // Enable next button
    updateNextButton();
}

/**
 * Update next button state and text
 */
function updateNextButton() {
    const nextBtn = document.getElementById('next-btn');
    const btnText = document.getElementById('btn-text');

    // Enable if current question has an answer
    nextBtn.disabled = selectedAnswers[currentQuestionIndex] === undefined;

    // Change text on last question
    if (currentQuestionIndex === currentQuestions.length - 1) {
        btnText.textContent = 'Complete Quiz';
    } else {
        btnText.textContent = 'Next Question';
    }
}

/**
 * Initialize next button click handler
 */
function initNextButton() {
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', () => {
        if (nextBtn.disabled) return;

        if (currentQuestionIndex < currentQuestions.length - 1) {
            // Go to next question
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            // Quiz complete - save results and navigate
            saveQuizResults();
        }
    });
}

/**
 * Save quiz results and navigate to next screen
 */
function saveQuizResults() {
    const course = localStorage.getItem('selectedCourse');

    // Calculate score (for potential future use)
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === currentQuestions[index].correctIndex) {
            correctCount++;
        }
    });

    // Store quiz results
    localStorage.setItem('quizResults', JSON.stringify({
        skillLevel: skillLevel,
        course: course,
        answers: selectedAnswers,
        score: correctCount,
        total: currentQuestions.length,
        completedAt: new Date().toISOString()
    }));

    console.log('Quiz completed:', {
        course: course,
        skillLevel: skillLevel,
        score: `${correctCount}/${currentQuestions.length}`
    });

    // Navigate to next screen (to be implemented)
    // For now, show completion message
    alert(`Quiz Complete!\n\nYou scored ${correctCount}/${currentQuestions.length}.\n\nYour personalized ${course} course is being prepared!`);

    // Placeholder for next screen navigation
    // window.location.href = 'course-preview.html';
}
