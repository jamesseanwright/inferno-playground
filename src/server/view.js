'use strict';

const Inferno = require('inferno');
const InfernoServer = require('inferno-server');
const createApp = require('../app/createApp');

module.exports = function renderView(store) {
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
                <section role="main">
                    ${InfernoServer.renderToString(createApp(store))}
                </section>

                <script src="/index.js"></script>
            </body>
        </html>
    `.trim().replace(/\s{4,}/g, ''); // Minify HTML
};