document.addEventListener('DOMContentLoaded', () => {
    // --- Theme Toggling System ---
    const themeToggle = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement;

    // Check localStorage for preferred theme
    const storedTheme = localStorage.getItem('theme');
    
    // Check system preference if no stored theme
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Initialize theme
    if (storedTheme) {
        htmlTag.setAttribute('data-theme', storedTheme);
    } else {
        htmlTag.setAttribute('data-theme', systemPrefersDark ? 'dark' : 'light');
    }

    // Toggle logic
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlTag.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlTag.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme); // Save preference
    });


    // --- Active Navigation Highlight ---
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            // Highlight a bit earlier for smoother UI
            if (scrollY >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});