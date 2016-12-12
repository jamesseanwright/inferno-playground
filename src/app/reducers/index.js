'use strict';

const { FETCH_CODES } = require('../actions');

const initialState = {
    message: 'Hello from Inferno and Redux!',
    characters: []
};

module.exports = function appReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CODES:
            return Object.assign({}, state, {
                codes: [].concat(action.codes)
            });

        default:
            return state;
    }
};