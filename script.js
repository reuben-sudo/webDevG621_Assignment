// script.js

// 1. Progress Bar Animation (for the skills section)
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');

    progressBars.forEach(bar => {
        const progress = bar.dataset.progress; // Get the data-progress value
        bar.style.width = `${progress}%`; // Set the width of the progress bar
        bar.querySelector('span').innerText = `${progress}%`; // Update the percentage text
    });
});

// 2. "Back to Top" Button Functionality
document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.createElement('button');
    backToTopButton.innerHTML = '↑'; // Use an arrow or a simple text
    backToTopButton.classList.add('back-to-top');
    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling animation
        });
    });
