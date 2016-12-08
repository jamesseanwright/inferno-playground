'use strict';

const { RECEIVE_TRANSACTION } = require('../actions');

const initialState = {
    message: 'Hello from Inferno and Redux!',
    transactions: []
};

module.exports = function appReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_TRANSACTION:
            return Object.assign({}, state, {
                transactions: state.transactions.concat(action.transaction)
            });

        default:
            return state;
    }
};