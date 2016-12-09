'use strict';

const { RECEIVE_STORY } = require('../actions');

const initialState = {
    message: 'Hello from Inferno and Redux!',
    stories: []
};

module.exports = function appReducer(state = initialState, action) {
    switch (action.type) {
        case RECEIVE_STORY:
            return Object.assign({}, state, {
                stories: state.stories.concat(action.story)
            });

        default:
            return state;
    }
};