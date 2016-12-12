'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
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
                    ${ReactDOMServer.renderToString(createApp(store))}
                </section>

                <script src="/index.js"></script>
            </body>
        </html>
    `.trim().replace(/\s{4,}/g, ''); // Minify HTML
};