'use strict';

const Inferno = require('inferno');
const InfernoServer = require('inferno-server');
const App = require('../app');

module.exports = function renderView() {
    return InfernoServer.renderToString(<App />);
};