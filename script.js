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

window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Show the button after scrolling down 300px
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    });
});

// 3. Responsive Navigation Menu (for smaller screens)
document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const menuButton = document.createElement('button');
    menuButton.classList.add('menu-button');
    menuButton.innerHTML = '☰'; // Use a hamburger icon
    header.appendChild(menuButton);

    const nav = document.querySelector('header nav');
    nav.classList.add('nav-collapsed'); // Add a class for collapsed state

    menuButton.addEventListener('click', () => {
        nav.classList.toggle('nav-expanded'); // Toggle the expanded class
        nav.classList.toggle('nav-collapsed');
    });

        // Close menu when a link is clicked (optional)
        const navLinks = document.querySelectorAll('header nav ul li a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (nav.classList.contains('nav-expanded')) {
                    nav.classList.remove('nav-expanded');
                    nav.classList.add('nav-collapsed');
                }
            });
        });
    
        // Make the menu collapsible on wider screens as well
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) { // Or whatever breakpoint you use
                 nav.classList.remove('nav-expanded');
                 nav.classList.remove('nav-collapsed');
            }
        });
    });
    