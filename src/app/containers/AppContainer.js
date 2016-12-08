'use strict';

const { connect } = require('inferno-redux');
const App = require('../components/App');

function mapStateToProps(state) {
    const { message } = state;

    return {
        message
    };
}

module.exports = connect(mapStateToProps)(App);