'use strict';

const Inferno = require('inferno');
const InfernoServer = require('inferno-server');
const { createStore, applyMiddleware } = require('redux');
const reducers = require('../app/reducers');
const actions = require('../app/actions');
const createApp = require('../app/createApp');

const store = createStore(reducers);

store.dispatch(actions.fetchCodes());

module.exports = function renderView() {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Inferno Sandbox</title>
            </head>

            <body>
                <script>
                    window.APP = {
                        state: ${JSON.stringify(store.getState())}
                    };
                </script>

                <h1>Unicode Characters</h1>

                <section role="main">
                    ${InfernoServer.renderToString(createApp(store))}
                </section>

                <script src="/index.js"></script>
            </body>
        </html>
    `;
};