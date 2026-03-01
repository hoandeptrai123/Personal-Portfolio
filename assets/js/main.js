// Main JavaScript file for Portfolio Website

// Form validation enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Range input output update (already in contact.html, but can be moved here)
    const rangeInputs = document.querySelectorAll('input[type="range"]');
    rangeInputs.forEach(function(range) {
        const output = document.querySelector('output[for="' + range.id + '"]');
        if (output) {
            range.addEventListener('input', function() {
                output.value = range.value;
            });
        }
    });

    // Form submission handling
    const forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
        form.addEventListener('submit', function(e) {
            // Add custom validation if needed
            if (!form.checkValidity()) {
                e.preventDefault();
                e.stopPropagation();
            }
            form.classList.add('was-validated');
        });
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

