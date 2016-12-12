'use strict';

const Inferno = require('inferno');
const Character = require('./Character');

module.exports = function App({ codes }) {
    return (
        <ul>
            {codes.map(c => <Character key={c} code={c} />)}
        </ul>
    );
};