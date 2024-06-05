// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', () => {
            clearHighlights();
            card.classList.add('highlight');
        });
    });

    function clearHighlights() {
        cards.forEach(card => {
            card.classList.remove('highlight');
        });
    }
});
