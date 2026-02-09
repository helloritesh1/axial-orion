/* ============================================
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initTrendingPills();
    initSearchInput();
    initScrollBehavior();
    initBottomCTA();
});

/**
 * Initialize trending pills click behavior
 */
function initTrendingPills() {
    const pills = document.querySelectorAll('.trending-pill');
    const searchInput = document.querySelector('.search-input');

    pills.forEach(pill => {
        pill.addEventListener('click', () => {
            // Remove active class from all pills
            pills.forEach(p => p.classList.remove('trending-pill--active'));

            // Add active class to clicked pill
            pill.classList.add('trending-pill--active');

            // Update search input with pill text
            if (searchInput) {
                searchInput.value = pill.textContent.trim();
                searchInput.focus();
            }
        });
    });
}

/**
 * Initialize search input functionality
 */
function initSearchInput() {
    const searchInput = document.querySelector('.search-input');
    const searchButton = document.querySelector('.search-button');

    if (searchButton && searchInput) {
        searchButton.addEventListener('click', () => {
            handleSearch(searchInput.value);
        });

        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleSearch(searchInput.value);
            }
        });
    }
}

/**
 * Handle search action
 * @param {string} query - Search query
 */
function handleSearch(query) {
    if (query.trim()) {
        // Store the selected course name
        localStorage.setItem('selectedCourse', query.trim());
        // Navigate to skill level selection page
        window.location.href = 'skill-level.html';
    }
}

/**
 * Initialize scroll behavior for header
 */
function initScrollBehavior() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}

/**
 * Initialize bottom CTA button
 */
function initBottomCTA() {
    const bottomCTAButton = document.querySelector('.bottom-cta__button');
    const searchInput = document.querySelector('.search-input');

    if (bottomCTAButton) {
        bottomCTAButton.addEventListener('click', () => {
            if (searchInput && searchInput.value.trim()) {
                // If search input has a value, use it
                handleSearch(searchInput.value);
            } else {
                // Scroll to search and focus
                searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
                setTimeout(() => searchInput.focus(), 500);
            }
        });
    }
}
