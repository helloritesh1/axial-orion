/* ============================================
   Skill Level Selection Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initCourseCard();
    initSkillCards();
    initContinueButton();
});

/**
 * Initialize course card with stored course name
 */
function initCourseCard() {
    const courseNameElement = document.getElementById('course-name');
    const storedCourse = localStorage.getItem('selectedCourse');

    if (storedCourse) {
        courseNameElement.textContent = storedCourse;
    } else {
        // Default fallback if no course was selected
        courseNameElement.textContent = 'Select a course';
        // Optionally redirect back to home if no course selected
        // window.location.href = 'index.html';
    }
}

/**
 * Initialize skill card selection behavior
 */
function initSkillCards() {
    const skillCards = document.querySelectorAll('.skill-card');

    skillCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove selected state from all cards
            skillCards.forEach(c => c.classList.remove('skill-card--selected'));

            // Add selected state to clicked card
            card.classList.add('skill-card--selected');

            // Store the selected skill level
            const level = card.dataset.level;
            localStorage.setItem('selectedSkillLevel', level);

            // Enable continue button
            const continueBtn = document.getElementById('continue-btn');
            continueBtn.disabled = false;
        });
    });

    // Check if there's a previously selected level and restore it
    const savedLevel = localStorage.getItem('selectedSkillLevel');
    if (savedLevel) {
        const savedCard = document.querySelector(`.skill-card[data-level="${savedLevel}"]`);
        if (savedCard) {
            savedCard.classList.add('skill-card--selected');
            document.getElementById('continue-btn').disabled = false;
        }
    }
}

/**
 * Initialize continue button action
 */
function initContinueButton() {
    const continueBtn = document.getElementById('continue-btn');

    continueBtn.addEventListener('click', () => {
        const selectedLevel = localStorage.getItem('selectedSkillLevel');
        const selectedCourse = localStorage.getItem('selectedCourse');

        if (selectedLevel && selectedCourse) {
            console.log('Proceeding with:', {
                course: selectedCourse,
                skillLevel: selectedLevel
            });

            // Check skill level and navigate accordingly
            if (selectedLevel === 'beginner') {
                // "I'm new to this" - different flow (to be implemented)
                // For now, show placeholder message
                alert(`Welcome to ${selectedCourse}!\n\nSince you're new to this, we'll start from the very beginning.\n\nCourse creation screen coming soon!`);
                // Future: window.location.href = 'course-intro.html';
            } else {
                // basic, intermediate, advanced - go to quiz
                window.location.href = 'quiz.html';
            }
        }
    });
}
