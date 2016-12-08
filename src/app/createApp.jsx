'use strict';

const Inferno = require('inferno');
const { Provider } = require('inferno-redux');
const AppContainer = require('./containers/AppContainer');

module.exports = function createApp(store) {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    );
};