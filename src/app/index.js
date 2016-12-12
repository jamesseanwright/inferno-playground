'use strict';

const React = require('react');
const { createStore } = require('redux');
const createApp = require('./createApp');
const reducers = require('./reducers');
const store = createStore(reducers, window.APP.state);

React.render(createApp(store), document.querySelector('section[role="main"]'));