'use strict';

const URL = 'ws://localhost:3001';

const socket = new WebSocket(URL);

socket.addEventListener('error', e => console.error('Couldn\'t connect to WebSocket:', e.message));

module.exports = socket;