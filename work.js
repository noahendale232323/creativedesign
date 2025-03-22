// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Code View Toggle
const viewCodeButtons = document.querySelectorAll('.view-code');

viewCodeButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const codePreview = button.closest('.project-actions').previousElementSibling;
        codePreview.classList.toggle('expanded');
        
        if (codePreview.classList.contains('expanded')) {
            button.innerHTML = `<i class="fas fa-times"></i> Close Code`;
        } else {
            button.innerHTML = `<i class="fas fa-code"></i> View Code`;
        }
    });
});

// Initialize Prism
document.addEventListener('DOMContentLoaded', () => {
    Prism.highlightAll();
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});