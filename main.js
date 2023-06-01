const textareaSelector = document.querySelectorAll('textarea')[0];

textareaSelector.addEventListener('click', () => {
    if (textareaSelector.value.length === 17) {
        textareaSelector.setSelectionRange(0, 0);
        textareaSelector.focus();
    }
})