'use strict';

const newsService = require('../services/newsService');

module.exports = {
    RECEIVE_STORY: 'RECEIVE_STORY',

    _receiveStory(story) {
        return {
            type: this.RECEIVE_STORY,
            story
        };
    },

    listenForStories(dispatch) {
        newsService.addEventListener('message', s => dispatch(this._receiveStory(s)));
    }
};