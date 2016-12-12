'use strict';

const React = require('react');
const Character = require('./Character');

module.exports = function App({ codes }) {
    return (
        <ul>
            {codes.map(c => <Character key={c} code={c} />)}
        </ul>
    );
};