import '/src/scss/main.scss'

// Select all elements with the class 'heading-xxl'
const headings = document.querySelectorAll('.heading-xxl');

// Iterate over each heading
headings.forEach(heading => {
    // If the heading has more than 8 characters, add hyphens and break-word
    if (heading.innerText.length > 8) {
        heading.style.hyphens = 'auto';
        heading.style.wordBreak = 'break-word';
    }
});
