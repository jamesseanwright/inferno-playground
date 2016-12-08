'use strict';

const Inferno = require('inferno');
const InitialisedApplication = require('./InitialisedApplication');

Inferno.render(<InitialisedApplication />, document.querySelector('section[role="main"]'));