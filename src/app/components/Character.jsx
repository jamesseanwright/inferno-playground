'use strict';

const React = require('react');

module.exports = function Character({ code }) {
    return (
        <li>
            <h2>{String.fromCharCode(code)}</h2>
            <p>Character code: {code}</p>
        </li>
    );
};