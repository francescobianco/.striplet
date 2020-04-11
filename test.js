
const io = require('socket.io-client');


const socket = new io(window.location.href, {
  path: '/socket.io'
});

socket.on('connect', () => {
  document.querySelector('h1').innerText = 'Connected!';
});
socket.on('messageciao', (data) => {
  console.log(data)
  document.querySelector('h1').innerText = data;
});







