const cards = document.querySelectorAll('.card-inner');
const closeButtons = document.querySelectorAll('.close-btn');


cards.forEach((card) => {
    card.addEventListener('click', function() {
        if (!this.classList.contains('is-flipped')) {
            this.classList.add('is-flipped');
        }
    });
});

closeButtons.forEach((btn) => {
    btn.addEventListener('click', function(event) {
        event.stopPropagation();
        const cardInner = this.closest('.card-inner');
        cardInner.classList.remove('is-flipped');
    });
});