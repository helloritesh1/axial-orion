/* ============================================
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initTrendingPills();
    initSearchInput();
    initScrollBehavior();
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
        console.log('Searching for:', query);
        // Add your search logic here
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
