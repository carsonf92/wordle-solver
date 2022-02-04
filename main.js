// ========================
// Letter inputs
// ========================

document.querySelectorAll('input[type="text"]').forEach(input => {
    
    // clear letter on click
    input.addEventListener('click', (event) => {
        event.target.value = '';
    });

    // auto advance to next letter
    input.addEventListener('keyup', (event) => {
        if (event.target.value.length >= event.target.maxLength) {
            event.target.parentElement.nextElementSibling.querySelector('input[type="text"]').focus();
        }
    });
});

// ========================
// Letter markers
// ========================

document.querySelectorAll('input[type="radio"]').forEach(input => {

    // highlight corresponding letter
    input.addEventListener('click', (event) => {
        let highlight = event.target.value;
        if (highlight != 'black') {
            event.target.parentElement.parentElement.querySelector('input[type="text"]').classList = 'letter__input letter__input--' + highlight;
        } else {
            event.target.parentElement.parentElement.querySelector('input[type="text"]').classList = 'letter__input';
        }
        
    });
});