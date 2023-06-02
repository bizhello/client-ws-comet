const textarea = document.querySelector('.textarea');
const saveNameButton = document.querySelector('.register__button');
const registerInput = document.querySelector('.register__input');
const chatName = document.querySelector('.chat__name');
const chatButton = document.querySelector('.chat__button');

let userName = ''
let textareaValue = ''

textarea.value = ''

saveNameButton.addEventListener('click', () => {
    userName = registerInput.value
    registerInput.value = ''

    chatName.textContent = `Ваше имя: ${userName}`
})

chatButton.addEventListener('click', () => {
    textareaValue = textarea.value
    textarea.value = ''

    console.log(textareaValue)
})


try {
    let socket = new WebSocket("ws://localhost:3000");
    
    socket.onopen = function(e) {
        console.log('Socket OPEN')
    };
} catch (err) {
    console.log(111, err)
}