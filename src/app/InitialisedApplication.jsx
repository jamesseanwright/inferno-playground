'use strict';

const Inferno = require('inferno');
const { createStore } = require('redux');
const { Provider } = require('inferno-redux');
const reducers = require('./reducers');
const AppContainer = require('./containers/AppContainer');

const store = createStore(reducers);

module.exports = function InitialisedApplication() {
    return (
        <Provider store={store}>
            <AppContainer />
        </Provider>
    )
};