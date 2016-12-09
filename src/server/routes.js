'use strict';

const view = require('./view');
const { createStore, applyMiddleware } = require('redux');
const reducers = require('../app/reducers');
const actions = require('../app/actions');

const store = createStore(reducers);

actions.listenForStories(store.dispatch);

module.exports = new Map([
    ['/', function index(req, res) {
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });

        res.end(view(store), 'utf-8');
    }],

    ['notFound', function notFound(req, res) {
        res.writeHead(404, {
            'Content-Type': 'text/plain'
        });

        res.end('Not found', 'utf-8');
    }],

    ['serverError', function serverError(req, res) {
        res.writeHead(500, {
            'Content-Type': 'text/plain'
        });

        res.end('Internal server error', 'utf-8');
    }]
]);