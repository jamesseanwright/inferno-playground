'use strict';

const Inferno = require('inferno');
const InfernoServer = require('inferno-server');
const App = require('../app/components/App');

module.exports = function renderView() {
    return `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8" />
                <title>Inferno Sandbox</title>
            </head>

            <body>
                <section role="main">
                    ${InfernoServer.renderToString(<App class="app" />)}
                </section>
            </body>
        </html>
    `.trim().replace(/\s{4,}/g, ''); // Minify HTML
};