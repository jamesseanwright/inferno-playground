'use strict';

const React = require('react');
const { Provider } = require('react-redux');
const AppContainer = require('./containers/AppContainer');

module.exports = function createApp(store) {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};