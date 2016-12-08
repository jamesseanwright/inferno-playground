'use strict';

const Inferno = require('inferno');

module.exports = function App({ message }) {
    return <h1>{message}</h1>;
};