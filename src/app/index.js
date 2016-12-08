'use strict';

const Inferno = require('inferno');
const { createStore } = require('redux');
const createApp = require('./createApp');
const reducers = require('./reducers');
const store = createStore(reducers, window.APP.state);

Inferno.render(createApp(store), document.querySelector('section[role="main"]'));