'use strict';

const http = require('http');
const url = require('url');
const Inferno = require('inferno');
const InfernoServer = require('inferno-server');
const routes = require('./routes');
const server = http.createServer(handleRequest);

const PORT = 3000;

function handleRequest(req, res) {
    const pathname = url.parse(req.url).pathname;
    const route = routes.has(pathname) ? routes.get(pathname) : routes.get('notFound');

    route(req, res);
};

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));