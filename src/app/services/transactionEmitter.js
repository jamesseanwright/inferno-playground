'use strict';

const URL = 'https://blockexplorer.com/';

const socket = require('socket.io-client');

module.exports = socket(URL);