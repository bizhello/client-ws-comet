const textarea = document.querySelector('.textarea');
const saveNameButton = document.querySelector('.register__button');
const registerInput = document.querySelector('.register__input');
const chatName = document.querySelector('.chat__name');
const chatButton = document.querySelector('.chat__button');
const chatBox = document.querySelector('.chat__box');

const socket = io("ws://localhost:3000");

let userName = 'unknown'

textarea.value = ''

saveNameButton.addEventListener('click', () => {
    userName = registerInput.value
    registerInput.value = ''

    chatName.textContent = `Ваше имя: ${userName}`
})

chatButton.addEventListener('click', () => {
    socket.emit('sendMessage', { name: userName, message: textarea.value }, (data) => addNewDataToLi([data]));
    textarea.value = ''
    setTimeout(focusLastMessage, 100);
})

// Прослушивание события "connect" (соединение установлено)
socket.on("connect", () => {
    console.log("Соединение установлено");
});

socket.on('defaultChat', (messages) => {
    // Обработка полученных сообщений
    addNewDataToLi(messages)
    focusLastMessage();
});

// Прослушивание события "disconnect" (соединение разорвано)
socket.on("disconnect", () => {
    console.log("Соединение разорвано");
});

function addNewDataToLi(data) {
    data.forEach(item => {
        const liElement = document.createElement('li');
        liElement.className = 'chat__person';

        const nameElement = document.createElement('p');
        nameElement.className = 'chat__person-name';
        nameElement.textContent = item.name;

        const messageElement = document.createElement('p');
        messageElement.className = 'chat__person-message';
        messageElement.textContent = item.message;

        liElement.appendChild(nameElement);
        liElement.appendChild(messageElement);
        chatBox.appendChild(liElement);
    });
}

function focusLastMessage() {
    const lastMessage = chatBox.lastElementChild;

    if (lastMessage) {
      lastMessage.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }