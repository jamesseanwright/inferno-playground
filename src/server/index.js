'use strict';

const http = require('http');
const url = require('url');
const routes = require('./routes');
const staticResources = require('./staticResources');
const server = http.createServer(handleRequest);

const PORT = 3000;

function handleRequest(req, res) {
    const { pathname } = url.parse(req.url);

    staticResources.get(pathname)
        .then(serveStaticResource => {
            if (serveStaticResource) {
                serveStaticResource(req, res);
                return;
            }

            const route = routes.has(pathname) ? routes.get(pathname) : routes.get('notFound');
            route(req, res);
        }).catch(e => {
            console.error(e);
            routes.get('serverError')(req, res);
        });
};

server.listen(PORT, () => console.log(`Listening on port ${PORT} in ${process.env.NODE_ENV} mode...`));