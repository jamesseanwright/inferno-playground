'use strict';

const { connect } = require('inferno-redux');
const App = require('../components/App');

function mapStateToProps(state) {
    const { codes } = state;

    return {
        codes
    };
}

module.exports = connect(mapStateToProps)(App);