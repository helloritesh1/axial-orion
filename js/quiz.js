/* ============================================
   Quiz Page JavaScript
   ============================================ */

// Quiz questions organized by Course -> Skill Level
const questionsByCourse = {
    // ==================== PYTHON ====================
    'python': {
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
        intermediate: [
            {
                question: 'What is the output of <span class="highlight">len([1, 2, [3, 4]])</span> in Python?',
                options: ['4', '3', '5', 'Error'],
                correctIndex: 1
            },
            {
                question: 'Which keyword is used to handle <span class="highlight">exceptions</span> in Python?',
                options: ['catch', 'handle', 'except', 'error'],
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
        advanced: [
            {
                question: 'What is the time complexity of <span class="highlight">dictionary lookup</span> in Python on average?',
                options: ['O(n)', 'O(log n)', 'O(1)', 'O(n²)'],
                correctIndex: 2
            },
            {
                question: 'Which design pattern does Python\'s <span class="highlight">context manager</span> implement?',
                options: ['Singleton Pattern', 'Factory Pattern', 'RAII Pattern', 'Observer Pattern'],
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
    },

    // ==================== DIGITAL MARKETING ====================
    'digital marketing': {
        basic: [
            {
                question: 'What does <span class="highlight">SEO</span> stand for?',
                options: [
                    'Social Engagement Optimization',
                    'Search Engine Optimization',
                    'Site Enhancement Operations',
                    'Sales Effectiveness Online'
                ],
                correctIndex: 1
            },
            {
                question: 'Which platform is best known for <span class="highlight">B2B marketing</span>?',
                options: ['TikTok', 'Snapchat', 'LinkedIn', 'Pinterest'],
                correctIndex: 2
            },
            {
                question: 'What is a <span class="highlight">CTA</span> in marketing?',
                options: [
                    'Customer Tracking Analytics',
                    'Call To Action',
                    'Content Type Analysis',
                    'Click Through Average'
                ],
                correctIndex: 1
            }
        ],
        intermediate: [
            {
                question: 'What is a good <span class="highlight">email open rate</span> for most industries?',
                options: ['1-5%', '15-25%', '50-60%', '80-90%'],
                correctIndex: 1
            },
            {
                question: 'Which metric measures how often people click on your ad after seeing it?',
                options: ['Bounce Rate', 'Conversion Rate', 'Click-Through Rate (CTR)', 'Impression Share'],
                correctIndex: 2
            },
            {
                question: 'What is <span class="highlight">A/B testing</span> used for?',
                options: [
                    'Testing website security',
                    'Comparing two versions to see which performs better',
                    'Analyzing competitor strategies',
                    'Measuring brand awareness'
                ],
                correctIndex: 1
            }
        ],
        advanced: [
            {
                question: 'What is <span class="highlight">Customer Lifetime Value (CLV)</span>?',
                options: [
                    'Time spent on website per session',
                    'Total revenue expected from a customer over their relationship',
                    'Number of repeat purchases',
                    'Average order value'
                ],
                correctIndex: 1
            },
            {
                question: 'Which attribution model gives equal credit to all touchpoints?',
                options: ['First-click', 'Last-click', 'Linear', 'Time-decay'],
                correctIndex: 2
            },
            {
                question: 'What is <span class="highlight">programmatic advertising</span>?',
                options: [
                    'Manual ad placement on websites',
                    'Automated buying and selling of ad inventory',
                    'Email automation workflows',
                    'Social media scheduling'
                ],
                correctIndex: 1
            }
        ]
    },

    // ==================== DATA SCIENCE ====================
    'data science': {
        basic: [
            {
                question: 'What is the primary purpose of <span class="highlight">data visualization</span>?',
                options: [
                    'To store data efficiently',
                    'To present data in a graphical format',
                    'To encrypt sensitive information',
                    'To delete duplicate records'
                ],
                correctIndex: 1
            },
            {
                question: 'Which of these is a common data type?',
                options: ['Integer', 'Paragraph', 'Sentence', 'Document'],
                correctIndex: 0
            },
            {
                question: 'What does <span class="highlight">CSV</span> stand for?',
                options: [
                    'Computer System Variables',
                    'Comma Separated Values',
                    'Central Storage Vault',
                    'Calculated Statistical Values'
                ],
                correctIndex: 1
            }
        ],
        intermediate: [
            {
                question: 'Which algorithm is used for <span class="highlight">classification</span> problems?',
                options: ['Linear Regression', 'K-means Clustering', 'Random Forest', 'Principal Component Analysis'],
                correctIndex: 2
            },
            {
                question: 'What is <span class="highlight">overfitting</span> in machine learning?',
                options: [
                    'Model performs well on training data but poorly on new data',
                    'Model is too simple to capture patterns',
                    'Model takes too long to train',
                    'Model requires too much memory'
                ],
                correctIndex: 0
            },
            {
                question: 'Which library is commonly used for <span class="highlight">data manipulation</span> in Python?',
                options: ['TensorFlow', 'Pandas', 'Flask', 'Django'],
                correctIndex: 1
            }
        ],
        advanced: [
            {
                question: 'What is the <span class="highlight">bias-variance tradeoff</span>?',
                options: [
                    'Choosing between speed and accuracy',
                    'Balancing underfitting and overfitting',
                    'Selecting features vs samples',
                    'Memory vs processing power'
                ],
                correctIndex: 1
            },
            {
                question: 'Which technique helps prevent <span class="highlight">gradient vanishing</span> in deep networks?',
                options: ['Dropout', 'Batch Normalization', 'Data Augmentation', 'Feature Scaling'],
                correctIndex: 1
            },
            {
                question: 'What is <span class="highlight">cross-validation</span> primarily used for?',
                options: [
                    'Encrypting data',
                    'Assessing how well a model generalizes',
                    'Speeding up training',
                    'Reducing dataset size'
                ],
                correctIndex: 1
            }
        ]
    },

    // ==================== UX DESIGN ====================
    'ux design': {
        basic: [
            {
                question: 'What does <span class="highlight">UX</span> stand for?',
                options: [
                    'Universal Exchange',
                    'User Experience',
                    'Unified Expression',
                    'Ultimate eXecution'
                ],
                correctIndex: 1
            },
            {
                question: 'What is a <span class="highlight">wireframe</span>?',
                options: [
                    'A final polished design',
                    'A basic structural layout of a page',
                    'A type of animation',
                    'A color palette'
                ],
                correctIndex: 1
            },
            {
                question: 'Which tool is commonly used for <span class="highlight">UI/UX design</span>?',
                options: ['Excel', 'Figma', 'Word', 'PowerPoint'],
                correctIndex: 1
            }
        ],
        intermediate: [
            {
                question: 'What is a <span class="highlight">user persona</span>?',
                options: [
                    'A real user\'s profile',
                    'A fictional representation of target users',
                    'A login credential',
                    'A type of interface element'
                ],
                correctIndex: 1
            },
            {
                question: 'What does <span class="highlight">usability testing</span> evaluate?',
                options: [
                    'Code performance',
                    'How easily users can accomplish tasks',
                    'Server uptime',
                    'Marketing effectiveness'
                ],
                correctIndex: 1
            },
            {
                question: 'What is the <span class="highlight">F-pattern</span> in web design?',
                options: [
                    'A color scheme',
                    'How users typically scan content on a page',
                    'A responsive layout technique',
                    'A typography style'
                ],
                correctIndex: 1
            }
        ],
        advanced: [
            {
                question: 'What is <span class="highlight">cognitive load</span> in UX?',
                options: [
                    'Website loading speed',
                    'Mental effort required to use an interface',
                    'Server processing power',
                    'Database query complexity'
                ],
                correctIndex: 1
            },
            {
                question: 'What is <span class="highlight">Hick\'s Law</span>?',
                options: [
                    'More choices increase decision time',
                    'Simpler designs are always better',
                    'Users prefer familiar interfaces',
                    'First impressions are crucial'
                ],
                correctIndex: 0
            },
            {
                question: 'What is <span class="highlight">progressive disclosure</span>?',
                options: [
                    'Gradually revealing information as needed',
                    'Showing all features at once',
                    'A type of loading animation',
                    'Automatic form completion'
                ],
                correctIndex: 0
            }
        ]
    },

    // ==================== BLOCKCHAIN ====================
    'blockchain': {
        basic: [
            {
                question: 'What is a <span class="highlight">blockchain</span>?',
                options: [
                    'A type of cryptocurrency',
                    'A distributed ledger technology',
                    'A social media platform',
                    'An internet browser'
                ],
                correctIndex: 1
            },
            {
                question: 'What is <span class="highlight">Bitcoin</span>?',
                options: [
                    'A company',
                    'A decentralized digital currency',
                    'A bank',
                    'A mobile app'
                ],
                correctIndex: 1
            },
            {
                question: 'What is a <span class="highlight">digital wallet</span> used for?',
                options: [
                    'Storing physical cash',
                    'Storing and managing cryptocurrencies',
                    'Online shopping only',
                    'Email communication'
                ],
                correctIndex: 1
            }
        ],
        intermediate: [
            {
                question: 'What is <span class="highlight">mining</span> in cryptocurrency?',
                options: [
                    'Digging for gold',
                    'Validating transactions and adding them to the blockchain',
                    'Creating new wallets',
                    'Buying cryptocurrency'
                ],
                correctIndex: 1
            },
            {
                question: 'What is a <span class="highlight">smart contract</span>?',
                options: [
                    'A legal document',
                    'Self-executing code on the blockchain',
                    'A mobile app',
                    'An insurance policy'
                ],
                correctIndex: 1
            },
            {
                question: 'What does <span class="highlight">decentralization</span> mean in blockchain?',
                options: [
                    'Controlled by a single authority',
                    'Distributed across many participants without central control',
                    'Only accessible in one location',
                    'Requires government approval'
                ],
                correctIndex: 1
            }
        ],
        advanced: [
            {
                question: 'What is <span class="highlight">Proof of Stake (PoS)</span>?',
                options: [
                    'A mining technique',
                    'A consensus mechanism based on token ownership',
                    'A type of wallet',
                    'A cryptocurrency exchange'
                ],
                correctIndex: 1
            },
            {
                question: 'What is a <span class="highlight">51% attack</span>?',
                options: [
                    'A software bug',
                    'When an entity controls majority of network hash rate',
                    'A security feature',
                    'A type of smart contract'
                ],
                correctIndex: 1
            },
            {
                question: 'What are <span class="highlight">gas fees</span> on Ethereum?',
                options: [
                    'Physical fuel costs',
                    'Transaction processing fees paid to validators',
                    'Monthly subscription fees',
                    'Exchange trading fees'
                ],
                correctIndex: 1
            }
        ]
    }
};

// Default questions for unknown courses
const defaultQuestions = {
    basic: [
        {
            question: 'What motivates you to learn this <span class="highlight">new skill</span>?',
            options: ['Career advancement', 'Personal interest', 'Required for work', 'Exploring options'],
            correctIndex: 0
        },
        {
            question: 'How do you prefer to <span class="highlight">learn</span> new topics?',
            options: ['Video tutorials', 'Reading articles', 'Hands-on practice', 'All of the above'],
            correctIndex: 3
        },
        {
            question: 'How much time can you dedicate to learning <span class="highlight">per week</span>?',
            options: ['1-2 hours', '3-5 hours', '6-10 hours', 'More than 10 hours'],
            correctIndex: 1
        }
    ],
    intermediate: [
        {
            question: 'Have you worked on any <span class="highlight">projects</span> in this field?',
            options: ['No projects yet', 'Personal projects only', 'Academic projects', 'Professional work'],
            correctIndex: 1
        },
        {
            question: 'What aspect do you want to <span class="highlight">improve</span> most?',
            options: ['Fundamentals', 'Advanced techniques', 'Practical application', 'Industry knowledge'],
            correctIndex: 2
        },
        {
            question: 'How do you handle <span class="highlight">challenges</span> when learning?',
            options: ['Give up quickly', 'Seek help immediately', 'Try to solve independently first', 'Avoid challenges'],
            correctIndex: 2
        }
    ],
    advanced: [
        {
            question: 'Have you <span class="highlight">mentored</span> others in this field?',
            options: ['Never', 'Occasionally', 'Regularly', 'I run training sessions'],
            correctIndex: 2
        },
        {
            question: 'Do you stay updated with <span class="highlight">industry trends</span>?',
            options: ['Rarely', 'Sometimes', 'Frequently', 'I contribute to the field'],
            correctIndex: 2
        },
        {
            question: 'What\'s your goal with this <span class="highlight">advanced learning</span>?',
            options: ['Refresh knowledge', 'Master edge cases', 'Lead teams', 'Innovate in the field'],
            correctIndex: 3
        }
    ]
};

// State management
let currentQuestionIndex = 0;
let selectedAnswers = [];
let currentQuestions = [];
let skillLevel = '';
let courseName = '';

document.addEventListener('DOMContentLoaded', () => {
    initQuiz();
});

/**
 * Initialize the quiz
 */
function initQuiz() {
    skillLevel = localStorage.getItem('selectedSkillLevel');
    courseName = localStorage.getItem('selectedCourse') || '';

    // Redirect if no skill level or if beginner (new to this)
    if (!skillLevel || skillLevel === 'beginner') {
        window.location.href = 'skill-level.html';
        return;
    }

    // Get questions for the course and skill level
    currentQuestions = getQuestionsForCourse(courseName, skillLevel);

    // Update total questions display
    document.getElementById('total-questions').textContent = currentQuestions.length;

    // Load first question
    loadQuestion(0);

    // Initialize button
    initNextButton();
}

/**
 * Get questions for a specific course and skill level
 */
function getQuestionsForCourse(course, level) {
    // Normalize course name (lowercase for matching)
    const normalizedCourse = course.toLowerCase().trim();

    // Try to find exact match
    if (questionsByCourse[normalizedCourse] && questionsByCourse[normalizedCourse][level]) {
        return questionsByCourse[normalizedCourse][level];
    }

    // Try partial matching for flexibility
    for (const [key, questions] of Object.entries(questionsByCourse)) {
        if (normalizedCourse.includes(key) || key.includes(normalizedCourse)) {
            if (questions[level]) {
                return questions[level];
            }
        }
    }

    // Fallback to default questions
    console.log(`No questions found for "${course}" at "${level}" level. Using defaults.`);
    return defaultQuestions[level] || defaultQuestions.basic;
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
    selectedAnswers[currentQuestionIndex] = optionIndex;

    const options = document.querySelectorAll('.quiz-option');
    options.forEach((opt, idx) => {
        if (idx === optionIndex) {
            opt.classList.add('quiz-option--selected');
        } else {
            opt.classList.remove('quiz-option--selected');
        }
    });

    updateNextButton();
}

/**
 * Update next button state and text
 */
function updateNextButton() {
    const nextBtn = document.getElementById('next-btn');
    const btnText = document.getElementById('btn-text');

    nextBtn.disabled = selectedAnswers[currentQuestionIndex] === undefined;

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
            currentQuestionIndex++;
            loadQuestion(currentQuestionIndex);
        } else {
            saveQuizResults();
        }
    });
}

/**
 * Save quiz results and navigate to next screen
 */
function saveQuizResults() {
    let correctCount = 0;
    selectedAnswers.forEach((answer, index) => {
        if (answer === currentQuestions[index].correctIndex) {
            correctCount++;
        }
    });

    localStorage.setItem('quizResults', JSON.stringify({
        skillLevel: skillLevel,
        course: courseName,
        answers: selectedAnswers,
        score: correctCount,
        total: currentQuestions.length,
        completedAt: new Date().toISOString()
    }));

    console.log('Quiz completed:', {
        course: courseName,
        skillLevel: skillLevel,
        score: `${correctCount}/${currentQuestions.length}`
    });

    alert(`Quiz Complete!\n\nYou scored ${correctCount}/${currentQuestions.length}.\n\nYour personalized ${courseName} course is being prepared!`);

    // Placeholder for next screen navigation
    // window.location.href = 'course-preview.html';
}
