'use strict';

const Inferno = require('inferno');

module.exports = function Character({ code }) {
    return (
        <li>
            <h2>{String.fromCharCode(code)}</h2>
            <p>Character code: {code}</p>
        </li>
    );
};