'use strict';

const fs = require('fs');
const path = require('path');

const cachedResources = new Map();

const contentTypes = new Map([
   ['js', 'application/javascript'],
   ['css', 'text/css']
]);

const FILE_PATH_STRUCTURE = /\/([a-z0-9\.]*\.([a-z]{2,3}))$/;
const DEFAULT_CONTENT_TYPE = 'text/plain';

module.exports = {
    get(pathname) {
        const filePath = pathname.match(FILE_PATH_STRUCTURE);

        if (!filePath || filePath.length !== 3) {
            return Promise.resolve(null);
        }

        const [_, fileName, extension] = filePath;

        if (cachedResources.has(fileName)) {
            return Promise.resolve(cachedResources.get(fileName));
        }

        return this._readFromFileSystem(fileName)
            .then(buffer => {
                const resThunk = this._createResThunk(extension, buffer);
                cachedResources.set(fileName, resThunk);
                return resThunk;
            })
            .catch(() => {
                // if non-static path is requested again as static asset, then it will still be cached
                cachedResources.set(fileName, null);
                return null;
            });
    },

    _readFromFileSystem(fileName) {
        return new Promise((resolve, reject) => {
            fs.readFile(path.join(__dirname, '..', 'assets', fileName), (err, data) => {
                if (err) {
                    reject(err);
                    return;
                }

                resolve(data);
            });
        });
    },

    _createResThunk(extension, buffer) {
        return (req, res) => {
            res.writeHead(200, {
                'Content-Type': contentTypes.get(extension) || DEFAULT_CONTENT_TYPE
            });

            res.end(buffer, 'utf-8');
        };
    }
};