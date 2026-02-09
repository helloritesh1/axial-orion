/* ============================================
   Course Reveal Page JavaScript
   ============================================ */

// Course data configurations
const courseData = {
    'python': {
        title: 'Python Programming',
        icon: 'code',
        weeks: 6,
        modules: 18,
        projects: 5,
        growthDescription: 'Master Python from basics to advanced concepts',
        weeklyPlan: [
            {
                week: 1,
                title: 'Python Fundamentals',
                lessons: [
                    { icon: 'play_arrow', title: 'Variables & Data Types', duration: '45 min', type: 'Video Lesson' },
                    { icon: 'description', title: 'Control Flow & Loops', duration: '30 min', type: 'Hands-on Lab' },
                    { icon: 'rocket_launch', title: 'Mini-Project: Calculator App', type: 'Hands-on Lab', isProject: true }
                ]
            },
            { week: 2, title: 'Functions & Modules', collapsed: true },
            { week: 3, title: 'Object-Oriented Programming', collapsed: true },
            { week: 4, title: 'File Handling & Exceptions', collapsed: true },
            { week: 5, title: 'Libraries & Frameworks', collapsed: true },
            { week: 6, title: 'Capstone: Full Project Build', collapsed: true }
        ]
    },
    'digital marketing': {
        title: 'Social Media Marketing',
        icon: 'campaign',
        weeks: 4,
        modules: 12,
        projects: 4,
        growthDescription: 'Master SMM tools and strategies in record time',
        weeklyPlan: [
            {
                week: 1,
                title: 'SMM Foundations & Strategy',
                lessons: [
                    { icon: 'play_arrow', title: 'Platform Psychology & Algorithms', duration: '45 min', type: 'Video Lesson' },
                    { icon: 'description', title: 'Creating User Personas', duration: '30 min', type: 'Template Resource' },
                    { icon: 'rocket_launch', title: 'Mini-Project: Brand Audit', type: 'Hands-on Lab', isProject: true }
                ]
            },
            { week: 2, title: 'Content Creation Mastery', collapsed: true },
            { week: 3, title: 'Paid Advertising & Analytics', collapsed: true },
            { week: 4, title: 'Capstone: Full Campaign Launch', collapsed: true }
        ]
    },
    'data science': {
        title: 'Data Science Masterclass',
        icon: 'analytics',
        weeks: 8,
        modules: 24,
        projects: 6,
        growthDescription: 'From data analysis to machine learning',
        weeklyPlan: [
            {
                week: 1,
                title: 'Python for Data Science',
                lessons: [
                    { icon: 'play_arrow', title: 'NumPy & Pandas Basics', duration: '60 min', type: 'Video Lesson' },
                    { icon: 'description', title: 'Data Cleaning Techniques', duration: '45 min', type: 'Hands-on Lab' },
                    { icon: 'rocket_launch', title: 'Mini-Project: Dataset Analysis', type: 'Hands-on Lab', isProject: true }
                ]
            },
            { week: 2, title: 'Data Visualization', collapsed: true },
            { week: 3, title: 'Statistics & Probability', collapsed: true },
            { week: 4, title: 'Machine Learning Basics', collapsed: true },
            { week: 5, title: 'Supervised Learning', collapsed: true },
            { week: 6, title: 'Unsupervised Learning', collapsed: true },
            { week: 7, title: 'Deep Learning Intro', collapsed: true },
            { week: 8, title: 'Capstone: ML Project', collapsed: true }
        ]
    },
    'ux design': {
        title: 'UX/UI Design Professional',
        icon: 'design_services',
        weeks: 5,
        modules: 15,
        projects: 5,
        growthDescription: 'Design user-centered digital experiences',
        weeklyPlan: [
            {
                week: 1,
                title: 'UX Fundamentals',
                lessons: [
                    { icon: 'play_arrow', title: 'User Research Methods', duration: '50 min', type: 'Video Lesson' },
                    { icon: 'description', title: 'Creating Wireframes', duration: '40 min', type: 'Figma Tutorial' },
                    { icon: 'rocket_launch', title: 'Mini-Project: User Persona', type: 'Hands-on Lab', isProject: true }
                ]
            },
            { week: 2, title: 'UI Design Principles', collapsed: true },
            { week: 3, title: 'Prototyping & Testing', collapsed: true },
            { week: 4, title: 'Design Systems', collapsed: true },
            { week: 5, title: 'Capstone: App Redesign', collapsed: true }
        ]
    },
    'blockchain': {
        title: 'Blockchain & Web3 Development',
        icon: 'link',
        weeks: 6,
        modules: 18,
        projects: 4,
        growthDescription: 'Build decentralized applications from scratch',
        weeklyPlan: [
            {
                week: 1,
                title: 'Blockchain Fundamentals',
                lessons: [
                    { icon: 'play_arrow', title: 'How Blockchain Works', duration: '45 min', type: 'Video Lesson' },
                    { icon: 'description', title: 'Crypto Wallets & Transactions', duration: '30 min', type: 'Guided Setup' },
                    { icon: 'rocket_launch', title: 'Mini-Project: First Transaction', type: 'Hands-on Lab', isProject: true }
                ]
            },
            { week: 2, title: 'Smart Contracts Basics', collapsed: true },
            { week: 3, title: 'Solidity Programming', collapsed: true },
            { week: 4, title: 'DeFi & NFTs', collapsed: true },
            { week: 5, title: 'dApp Development', collapsed: true },
            { week: 6, title: 'Capstone: Build a dApp', collapsed: true }
        ]
    }
};

// Default course data
const defaultCourse = {
    title: 'Professional Skills',
    icon: 'school',
    weeks: 4,
    modules: 12,
    projects: 3,
    growthDescription: 'Master essential skills for career growth',
    weeklyPlan: [
        {
            week: 1,
            title: 'Core Foundations',
            lessons: [
                { icon: 'play_arrow', title: 'Introduction & Overview', duration: '30 min', type: 'Video Lesson' },
                { icon: 'description', title: 'Key Concepts', duration: '45 min', type: 'Interactive Module' },
                { icon: 'rocket_launch', title: 'Mini-Project: Basics', type: 'Hands-on Lab', isProject: true }
            ]
        },
        { week: 2, title: 'Intermediate Concepts', collapsed: true },
        { week: 3, title: 'Advanced Techniques', collapsed: true },
        { week: 4, title: 'Capstone Project', collapsed: true }
    ]
};

// Confetti colors
const confettiColors = [
    '#0df2df', // primary
    '#34d399', // accent-green
    '#FF7F7F', // coral
    '#ffd700', // gold
    '#ff6b6b', // red
    '#4ecdc4', // teal
    '#ffe66d', // yellow
    '#95e1d3', // mint
    '#f38181', // salmon
    '#aa96da'  // purple
];

// State
let userData = null;
let selectedCourse = null;

document.addEventListener('DOMContentLoaded', () => {
    loadUserData();
    triggerConfetti();
    populateCourseContent();
    startCountdownTimer();
});

/**
 * Load user data from localStorage
 */
function loadUserData() {
    // Get user contact info
    const contactData = localStorage.getItem('userContact');
    if (contactData) {
        userData = JSON.parse(contactData);
    }

    // Get quiz results for course info
    const quizData = localStorage.getItem('quizResults');
    if (quizData) {
        const quizResults = JSON.parse(quizData);
        selectedCourse = quizResults.course;

        // If contact info stored in quiz results
        if (quizResults.contact) {
            userData = quizResults.contact;
        }
    }

    // Fallback to selected course from localStorage
    if (!selectedCourse) {
        selectedCourse = localStorage.getItem('selectedCourse') || 'digital marketing';
    }

    console.log('User Data:', userData);
    console.log('Selected Course:', selectedCourse);
}

/**
 * Trigger confetti burst animation
 */
function triggerConfetti() {
    const container = document.getElementById('confetti-container');
    const confettiCount = 150;

    for (let i = 0; i < confettiCount; i++) {
        createConfettiPiece(container, i);
    }

    // Clean up after animation
    setTimeout(() => {
        container.innerHTML = '';
    }, 4000);
}

/**
 * Create a single confetti piece
 */
function createConfettiPiece(container, index) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';

    // Random properties
    const color = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    const left = Math.random() * 100;
    const delay = Math.random() * 0.8;
    const duration = 2 + Math.random() * 2;
    const size = 6 + Math.random() * 8;
    const rotation = Math.random() * 360;

    // Shape variation
    const shapes = ['rectangle', 'circle', 'triangle'];
    const shape = shapes[Math.floor(Math.random() * shapes.length)];

    confetti.style.cssText = `
        left: ${left}%;
        width: ${size}px;
        height: ${shape === 'circle' ? size : size * 1.5}px;
        background: ${color};
        animation-delay: ${delay}s;
        animation-duration: ${duration}s;
        transform: rotate(${rotation}deg);
        border-radius: ${shape === 'circle' ? '50%' : '2px'};
    `;

    container.appendChild(confetti);
}

/**
 * Populate course content based on selected course
 */
function populateCourseContent() {
    // Get course data
    const normalizedCourse = selectedCourse.toLowerCase().trim();
    let course = defaultCourse;

    // Try exact match
    if (courseData[normalizedCourse]) {
        course = courseData[normalizedCourse];
    } else {
        // Try partial match
        for (const [key, data] of Object.entries(courseData)) {
            if (normalizedCourse.includes(key) || key.includes(normalizedCourse)) {
                course = data;
                break;
            }
        }
    }

    // Get user name
    const userName = userData?.name || 'Learner';
    const firstName = userName.split(' ')[0];

    // Update course hero
    document.getElementById('course-icon').textContent = course.icon;
    document.getElementById('course-title').textContent = course.title;
    document.getElementById('user-name').textContent = firstName;
    document.getElementById('course-weeks').textContent = course.weeks;
    document.getElementById('course-modules').textContent = course.modules;
    document.getElementById('course-projects').textContent = course.projects;

    // Update growth section
    document.getElementById('growth-timeline').textContent = `${course.weeks} Weeks`;
    document.getElementById('growth-description').textContent = course.growthDescription;

    // Update certificate
    document.getElementById('cert-name').textContent = userName;
    document.getElementById('cert-course').textContent = course.title + ' Course';
    document.getElementById('cert-id').textContent = Math.floor(10000000 + Math.random() * 90000000);

    // Update comparison name
    document.getElementById('comparison-name').textContent = firstName;

    // Render weekly plan
    renderWeeklyPlan(course.weeklyPlan);
}

/**
 * Render the weekly plan section
 */
function renderWeeklyPlan(weeklyPlan) {
    const container = document.getElementById('weekly-plan');
    container.innerHTML = '';

    weeklyPlan.forEach((week, index) => {
        if (week.collapsed) {
            // Collapsed week card
            container.innerHTML += `
                <div class="bg-card-dark/60 rounded-xl border border-[#316863]/30 overflow-hidden">
                    <div class="p-4 flex items-center justify-between">
                        <div>
                            <p class="text-xs text-text-secondary font-bold uppercase tracking-wider mb-0.5">Week ${week.week}</p>
                            <h3 class="font-semibold text-gray-300">${week.title}</h3>
                        </div>
                        <span class="material-symbols-outlined text-gray-500">expand_more</span>
                    </div>
                </div>
            `;
        } else {
            // Expanded week card (first week)
            let lessonsHTML = '';
            week.lessons.forEach(lesson => {
                if (lesson.isProject) {
                    lessonsHTML += `
                        <div class="flex items-start gap-3 relative z-10">
                            <div class="min-w-[24px] h-6 rounded-full bg-accent-green/20 border border-accent-green text-accent-green flex items-center justify-center mt-0.5 shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                                <span class="material-symbols-outlined text-[12px]">${lesson.icon}</span>
                            </div>
                            <div>
                                <p class="text-sm font-bold text-white">${lesson.title}</p>
                                <span class="inline-block mt-1 px-2 py-0.5 bg-accent-green/10 text-accent-green text-[10px] rounded border border-accent-green/20 font-medium">${lesson.type}</span>
                            </div>
                        </div>
                    `;
                } else {
                    lessonsHTML += `
                        <div class="flex items-start gap-3 relative z-10">
                            <div class="min-w-[24px] h-6 rounded-full bg-card-dark border border-gray-600 flex items-center justify-center mt-0.5">
                                <span class="material-symbols-outlined text-[10px] text-gray-300">${lesson.icon}</span>
                            </div>
                            <div>
                                <p class="text-sm font-medium text-gray-200">${lesson.title}</p>
                                <p class="text-xs text-text-secondary">${lesson.duration} • ${lesson.type}</p>
                            </div>
                        </div>
                    `;
                }
            });

            container.innerHTML += `
                <div class="bg-card-dark rounded-xl border border-primary/30 overflow-hidden shadow-[0_0_15px_rgba(13,242,223,0.05)]">
                    <div class="p-4 bg-gradient-to-r from-primary/10 to-transparent border-b border-primary/10 flex items-center justify-between">
                        <div>
                            <p class="text-xs text-primary font-bold uppercase tracking-wider mb-0.5">Week ${week.week}</p>
                            <h3 class="font-semibold text-white">${week.title}</h3>
                        </div>
                        <span class="material-symbols-outlined text-primary">expand_less</span>
                    </div>
                    <div class="p-4 space-y-4 relative">
                        <div class="absolute left-[27px] top-6 bottom-6 w-0.5 bg-gray-700/50"></div>
                        ${lessonsHTML}
                    </div>
                </div>
            `;
        }
    });
}

/**
 * Start the countdown timer (15 minutes)
 */
function startCountdownTimer() {
    const timerElement = document.getElementById('countdown-timer');
    const progressElement = document.getElementById('timer-progress');

    if (!timerElement) return;

    // Start from 15 minutes (900 seconds)
    const totalSeconds = 15 * 60;
    let remainingSeconds = totalSeconds;

    // Check if there's a saved timer in localStorage
    const savedTimer = localStorage.getItem('courseRevealTimerEnd');
    if (savedTimer) {
        const endTime = parseInt(savedTimer);
        const now = Date.now();
        if (endTime > now) {
            remainingSeconds = Math.floor((endTime - now) / 1000);
        } else {
            // Timer expired, reset it
            localStorage.setItem('courseRevealTimerEnd', Date.now() + (totalSeconds * 1000));
            remainingSeconds = totalSeconds;
        }
    } else {
        // Set new timer end time
        localStorage.setItem('courseRevealTimerEnd', Date.now() + (totalSeconds * 1000));
    }

    function updateTimer() {
        if (remainingSeconds <= 0) {
            timerElement.textContent = '00:00';
            timerElement.classList.add('text-red-400');
            if (progressElement) {
                progressElement.style.width = '0%';
            }
            return;
        }

        const minutes = Math.floor(remainingSeconds / 60);
        const seconds = remainingSeconds % 60;

        // Format as MM:SS
        const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        timerElement.textContent = formattedTime;

        // Update progress bar
        if (progressElement) {
            const progressPercent = (remainingSeconds / totalSeconds) * 100;
            progressElement.style.width = `${progressPercent}%`;
            progressElement.style.transition = 'width 1s linear';
        }

        // Add urgency flash when under 5 minutes
        if (remainingSeconds <= 300) {
            timerElement.classList.add('text-red-300');
            if (remainingSeconds <= 60) {
                timerElement.classList.add('animate-pulse');
            }
        }

        remainingSeconds--;
    }

    // Initial update
    updateTimer();

    // Update every second
    setInterval(updateTimer, 1000);
}
