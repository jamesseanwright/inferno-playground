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
        const filePath = pathname.match(FILE_PATH_STRUCTURE) || [];

        const [_, fileName, extension] = filePath;

        if (!fileName || !extension || cachedResources.has(fileName)) {
            return Promise.resolve(cachedResources.get(fileName));
        }

        return this._readFromFileSystem(fileName)
            .then(buffer => buffer)
            .catch(() => null) // not found on fs - still cached to avoid subsequent reads
            .then(result => {
                const resThunk = this._createResThunk(extension, result);
                cachedResources.set(fileName, resThunk);
                return resThunk;
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