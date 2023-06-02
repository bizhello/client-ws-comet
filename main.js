const textarea = document.querySelector('.textarea');
const saveNameButton = document.querySelector('.register__button');
const registerInput = document.querySelector('.register__input');
const chatName = document.querySelector('.chat__name');
const chatButton = document.querySelector('.chat__button');

let userName = ''
let textareaValue = ''
let chatData = []

textarea.value = ''

saveNameButton.addEventListener('click', () => {
    userName = registerInput.value
    registerInput.value = ''

    chatName.textContent = `Ваше имя: ${userName}`
})

chatButton.addEventListener('click', () => {
    textareaValue = textarea.value
    textarea.value = ''
})

try {
    const socket = io("ws://localhost:3000");
    let data = {
        name: 'RoskГена',
        message: 'aSKDasdasdasdas',
    }

    socket.emit('newMessage', data, (dat) => console.log(dat));

    socket.on('newMessage', function (data) {
        console.log(data)
    });

} catch (err) {
    console.log(err)
}

// try {
//     let socket = new WebSocket("ws://localhost:3000");

//     socket.onopen = function() {
//         alert("[open] Соединение установлено");
//         alert("Отправляем данные на сервер");
//         socket.send("Меня зовут Джон");
//       };

//     socket.onmessage = function (event) {
//         alert(`[message] Данные получены с сервера: ${event.data}`);
//         chatData = event.data
//     };

// } catch (err) {
//     console.log(111, err)
// }