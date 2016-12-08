'use strict';

const Inferno = require('inferno');
const App = require('./components/App');

Inferno.render(<App />, document.querySelector('section[role="main"]'));