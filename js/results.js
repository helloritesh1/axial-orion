/* ============================================
   Results Page JavaScript
   ============================================ */

// Skill mappings for each course and skill level
// These define what skills are assessed based on the quiz questions
const skillMappingsByCourse = {
    'python': {
        basic: [
            { name: 'Variable Concepts', icon: 'data_object' },
            { name: 'Assignment Operators', icon: 'code' },
            { name: 'Naming Conventions', icon: 'edit_note' }
        ],
        intermediate: [
            { name: 'Data Structures', icon: 'account_tree' },
            { name: 'Exception Handling', icon: 'error' },
            { name: 'Function Arguments', icon: 'functions' }
        ],
        advanced: [
            { name: 'Algorithm Complexity', icon: 'speed' },
            { name: 'Context Managers', icon: 'settings' },
            { name: 'Metaclasses', icon: 'hub' }
        ],
        focusTopics: {
            basic: ['Control Flow Statements', 'Functions Basics', 'Data Types', 'List Operations'],
            intermediate: ['Object-Oriented Programming', 'Decorators', 'Generators', 'File Handling'],
            advanced: ['Async Programming', 'Memory Management', 'Design Patterns', 'Performance Optimization']
        }
    },
    'digital marketing': {
        basic: [
            { name: 'SEO Fundamentals', icon: 'search' },
            { name: 'Platform Knowledge', icon: 'hub' },
            { name: 'Marketing Terminology', icon: 'description' }
        ],
        intermediate: [
            { name: 'Email Marketing Metrics', icon: 'mail' },
            { name: 'CTR Analysis', icon: 'trending_up' },
            { name: 'A/B Testing', icon: 'science' }
        ],
        advanced: [
            { name: 'Customer Analytics', icon: 'analytics' },
            { name: 'Attribution Models', icon: 'account_tree' },
            { name: 'Programmatic Ads', icon: 'smart_display' }
        ],
        focusTopics: {
            basic: ['Content Marketing', 'Social Media Strategy', 'PPC Basics', 'Analytics Setup'],
            intermediate: ['Conversion Optimization', 'Funnel Building', 'Audience Segmentation', 'Retargeting'],
            advanced: ['Marketing Automation', 'Multi-Channel Attribution', 'Predictive Analytics', 'Growth Hacking']
        }
    },
    'data science': {
        basic: [
            { name: 'Data Visualization', icon: 'bar_chart' },
            { name: 'Data Types', icon: 'category' },
            { name: 'File Formats', icon: 'description' }
        ],
        intermediate: [
            { name: 'Classification Algorithms', icon: 'account_tree' },
            { name: 'Model Evaluation', icon: 'assessment' },
            { name: 'Data Manipulation', icon: 'table_chart' }
        ],
        advanced: [
            { name: 'Bias-Variance Tradeoff', icon: 'balance' },
            { name: 'Deep Learning Concepts', icon: 'psychology' },
            { name: 'Model Validation', icon: 'verified' }
        ],
        focusTopics: {
            basic: ['Statistics Basics', 'Python for Data', 'SQL Queries', 'Data Cleaning'],
            intermediate: ['Feature Engineering', 'Regression Models', 'Clustering', 'Time Series'],
            advanced: ['Neural Networks', 'NLP Techniques', 'Computer Vision', 'MLOps']
        }
    },
    'ux design': {
        basic: [
            { name: 'UX Fundamentals', icon: 'design_services' },
            { name: 'Wireframing', icon: 'dashboard' },
            { name: 'Design Tools', icon: 'construction' }
        ],
        intermediate: [
            { name: 'User Research', icon: 'people' },
            { name: 'Usability Testing', icon: 'science' },
            { name: 'User Behavior Patterns', icon: 'visibility' }
        ],
        advanced: [
            { name: 'Cognitive Psychology', icon: 'psychology' },
            { name: 'Design Principles', icon: 'auto_awesome' },
            { name: 'Information Architecture', icon: 'account_tree' }
        ],
        focusTopics: {
            basic: ['Figma Basics', 'UI Fundamentals', 'Color Theory', 'Typography'],
            intermediate: ['Prototyping', 'Interaction Design', 'Design Systems', 'Accessibility'],
            advanced: ['Service Design', 'Design Strategy', 'Advanced Animations', 'Design Leadership']
        }
    },
    'blockchain': {
        basic: [
            { name: 'Blockchain Basics', icon: 'link' },
            { name: 'Cryptocurrency Concepts', icon: 'currency_bitcoin' },
            { name: 'Wallet Management', icon: 'account_balance_wallet' }
        ],
        intermediate: [
            { name: 'Mining Concepts', icon: 'engineering' },
            { name: 'Smart Contracts', icon: 'description' },
            { name: 'Decentralization', icon: 'hub' }
        ],
        advanced: [
            { name: 'Consensus Mechanisms', icon: 'how_to_vote' },
            { name: 'Security Vulnerabilities', icon: 'security' },
            { name: 'Transaction Fees', icon: 'payments' }
        ],
        focusTopics: {
            basic: ['Web3 Fundamentals', 'DeFi Basics', 'NFT Concepts', 'Wallet Security'],
            intermediate: ['Solidity Programming', 'dApp Development', 'Token Standards', 'Layer 2 Solutions'],
            advanced: ['Protocol Design', 'Governance Models', 'Cross-Chain Bridges', 'MEV Strategies']
        }
    }
};

// Default skill mappings for unknown courses
const defaultSkillMappings = {
    basic: [
        { name: 'Core Concepts', icon: 'school' },
        { name: 'Terminology', icon: 'description' },
        { name: 'Basic Tools', icon: 'construction' }
    ],
    intermediate: [
        { name: 'Applied Knowledge', icon: 'engineering' },
        { name: 'Problem Solving', icon: 'psychology' },
        { name: 'Best Practices', icon: 'verified' }
    ],
    advanced: [
        { name: 'Advanced Techniques', icon: 'auto_awesome' },
        { name: 'Industry Patterns', icon: 'hub' },
        { name: 'Optimization', icon: 'speed' }
    ],
    focusTopics: {
        basic: ['Foundational Concepts', 'Practical Applications', 'Tools & Setup', 'Getting Started'],
        intermediate: ['Advanced Techniques', 'Real-World Projects', 'Best Practices', 'Efficiency Tips'],
        advanced: ['Expert Strategies', 'Industry Trends', 'Leadership Skills', 'Innovation']
    }
};

// Focus area icons mapping
const focusAreaIcons = ['school', 'functions', 'data_table', 'auto_awesome', 'psychology', 'trending_up'];

// State
let quizResults = null;
let skillMappings = null;

document.addEventListener('DOMContentLoaded', () => {
    initResultsPage();
});

/**
 * Initialize the results page
 */
function initResultsPage() {
    // Load quiz results from localStorage
    const resultsData = localStorage.getItem('quizResults');

    if (!resultsData) {
        // No quiz results found, redirect back
        console.error('No quiz results found');
        window.location.href = 'quiz.html';
        return;
    }

    quizResults = JSON.parse(resultsData);
    console.log('Quiz Results:', quizResults);

    // Get skill mappings for the course
    skillMappings = getSkillMappings(quizResults.course, quizResults.skillLevel);

    // Analyze and display results
    displayResults();

    // Initialize form validation
    initFormValidation();

    // Initialize submit button
    initSubmitButton();
}

/**
 * Get skill mappings for a specific course
 */
function getSkillMappings(course, level) {
    const normalizedCourse = course.toLowerCase().trim();

    // Try exact match
    if (skillMappingsByCourse[normalizedCourse]) {
        return skillMappingsByCourse[normalizedCourse];
    }

    // Try partial matching
    for (const [key, mappings] of Object.entries(skillMappingsByCourse)) {
        if (normalizedCourse.includes(key) || key.includes(normalizedCourse)) {
            return mappings;
        }
    }

    // Return default
    return defaultSkillMappings;
}

/**
 * Analyze quiz results and display skills
 */
function displayResults() {
    const { score, total, answers, skillLevel } = quizResults;
    const percentage = (score / total) * 100;

    // Determine greeting based on performance
    updateGreeting(percentage);

    // Get assessed skills for this level
    const assessedSkills = skillMappings[skillLevel] || skillMappings.basic;

    // Determine which skills are mastered based on individual question performance
    const masteredSkills = [];
    const focusSkills = [];

    answers.forEach((answer, index) => {
        const skill = assessedSkills[index];
        if (skill) {
            // Import the correct answer check - we need to know if this specific answer was correct
            // For now, we'll use a simple heuristic based on the answer patterns
            // In production, you'd store the correct/incorrect status in quizResults
            const wasCorrect = isAnswerCorrect(index, answer);

            if (wasCorrect) {
                masteredSkills.push(skill);
            } else {
                focusSkills.push(skill);
            }
        }
    });

    // Render mastered skills
    renderMasteredSkills(masteredSkills);

    // Render focus areas (incorrect answers + recommended topics)
    renderFocusAreas(focusSkills, skillLevel);
}

/**
 * Check if a specific answer was correct
 * This requires access to the questions data
 */
function isAnswerCorrect(questionIndex, selectedAnswer) {
    // We need to determine this based on the stored data
    // Since quiz.js stores the score but not per-question correctness,
    // we'll need to recalculate or use a different approach

    // For now, we'll use a simple calculation based on known totals
    // In a real implementation, you'd store this in quizResults

    // Get the questions for this course and level to check correctness
    const correctAnswers = getCorrectAnswersForCourse(quizResults.course, quizResults.skillLevel);

    if (correctAnswers && correctAnswers[questionIndex] !== undefined) {
        return selectedAnswer === correctAnswers[questionIndex];
    }

    // Fallback: use score-based distribution
    return false;
}

/**
 * Get correct answer indices for a course
 * This mirrors the question data structure from quiz.js
 */
function getCorrectAnswersForCourse(course, level) {
    const correctAnswersByCourse = {
        'python': {
            basic: [0, 1, 2],
            intermediate: [1, 2, 1],
            advanced: [2, 2, 1]
        },
        'digital marketing': {
            basic: [1, 2, 1],
            intermediate: [1, 2, 1],
            advanced: [1, 2, 1]
        },
        'data science': {
            basic: [1, 0, 1],
            intermediate: [2, 0, 1],
            advanced: [1, 1, 1]
        },
        'ux design': {
            basic: [1, 1, 1],
            intermediate: [1, 1, 1],
            advanced: [1, 0, 0]
        },
        'blockchain': {
            basic: [1, 1, 1],
            intermediate: [1, 1, 1],
            advanced: [1, 1, 1]
        }
    };

    const normalizedCourse = course.toLowerCase().trim();

    if (correctAnswersByCourse[normalizedCourse] && correctAnswersByCourse[normalizedCourse][level]) {
        return correctAnswersByCourse[normalizedCourse][level];
    }

    // Check partial match
    for (const [key, answers] of Object.entries(correctAnswersByCourse)) {
        if (normalizedCourse.includes(key) || key.includes(normalizedCourse)) {
            if (answers[level]) {
                return answers[level];
            }
        }
    }

    // Default answers
    return [0, 1, 2];
}

/**
 * Update greeting text based on performance
 */
function updateGreeting(percentage) {
    const greetingElement = document.getElementById('greeting-text');

    if (percentage === 100) {
        greetingElement.textContent = 'Perfect score! 🎉';
    } else if (percentage >= 66) {
        greetingElement.textContent = 'Great job! 👏';
    } else if (percentage >= 33) {
        greetingElement.textContent = 'Good effort! 💪';
    } else {
        greetingElement.textContent = "Let's level up! 🚀";
    }
}

/**
 * Render mastered skills section
 */
function renderMasteredSkills(skills) {
    const container = document.getElementById('skills-mastered-list');
    const section = document.getElementById('skills-mastered-section');

    if (skills.length === 0) {
        // Hide the section if no skills mastered
        section.style.display = 'none';
        // Also hide the divider
        section.nextElementSibling.style.display = 'none';
        return;
    }

    container.innerHTML = skills.map(skill => `
        <div class="flex items-center gap-3 p-2 rounded-lg bg-[#102221]/50 border border-[#316863]/30">
            <span class="material-symbols-outlined text-green-400 text-lg">check</span>
            <span class="text-gray-200 text-sm font-medium">${skill.name}</span>
        </div>
    `).join('');
}

/**
 * Render focus areas section
 */
function renderFocusAreas(incorrectSkills, skillLevel) {
    const container = document.getElementById('focus-areas-list');

    // Combine incorrect answer skills with recommended focus topics
    const focusTopics = skillMappings.focusTopics[skillLevel] || skillMappings.focusTopics.basic;

    // Create focus items - prioritize skills they got wrong, then add recommended topics
    const focusItems = [];

    // Add skills they need to work on (from incorrect answers)
    incorrectSkills.forEach((skill, index) => {
        focusItems.push({
            name: skill.name,
            icon: skill.icon
        });
    });

    // Add recommended focus topics to reach 3-4 items
    const additionalTopicsNeeded = Math.max(0, 3 - focusItems.length);
    focusTopics.slice(0, additionalTopicsNeeded).forEach((topic, index) => {
        // Avoid duplicates
        if (!focusItems.find(item => item.name.toLowerCase() === topic.toLowerCase())) {
            focusItems.push({
                name: topic,
                icon: focusAreaIcons[index % focusAreaIcons.length]
            });
        }
    });

    // Render focus areas (max 4)
    container.innerHTML = focusItems.slice(0, 4).map(item => `
        <div class="flex items-center gap-3 p-2 rounded-lg bg-primary/10 border border-primary/20">
            <span class="material-symbols-outlined text-primary text-lg">${item.icon}</span>
            <span class="text-white text-sm font-medium">${item.name}</span>
        </div>
    `).join('');
}

/**
 * Initialize form validation
 */
function initFormValidation() {
    const nameInput = document.getElementById('name');
    const whatsappInput = document.getElementById('whatsapp');
    const submitBtn = document.getElementById('submit-btn');

    const validateForm = () => {
        const nameValid = nameInput.value.trim().length >= 2;
        const whatsappValid = whatsappInput.value.trim().length >= 10;

        submitBtn.disabled = !(nameValid && whatsappValid);
    };

    nameInput.addEventListener('input', validateForm);
    whatsappInput.addEventListener('input', validateForm);
}

/**
 * Initialize submit button
 */
function initSubmitButton() {
    const submitBtn = document.getElementById('submit-btn');
    const form = document.getElementById('contact-form');

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();

        if (submitBtn.disabled) return;

        const name = document.getElementById('name').value.trim();
        const whatsapp = document.getElementById('whatsapp').value.trim();

        // Save contact info to localStorage
        const contactInfo = {
            name: name,
            whatsapp: whatsapp,
            submittedAt: new Date().toISOString()
        };

        localStorage.setItem('userContact', JSON.stringify(contactInfo));

        // Update quiz results with contact info
        const updatedResults = {
            ...quizResults,
            contact: contactInfo
        };
        localStorage.setItem('quizResults', JSON.stringify(updatedResults));

        console.log('Contact Info Saved:', contactInfo);

        // Show success feedback
        submitBtn.innerHTML = `
            <span class="material-symbols-outlined text-xl">check_circle</span>
            <span>Submitted Successfully!</span>
        `;
        submitBtn.classList.remove('primary-gradient');
        submitBtn.classList.add('bg-green-500');

        // Navigate to course reveal page after a brief delay
        setTimeout(() => {
            window.location.href = 'course-reveal.html';
        }, 500);
    });
}
