import * as path from 'path';
import * as express from 'express';
export function init(config, pluginOptions) {
    config.run('express', {
        onStart: (instance) => {
            const options = {
                etag: true,
                extensions: ['woff', 'woff2', 'ttf', 'eot'],
                maxAge: '1d',
                redirect: false,
                setHeaders: (res) => {
                    res.set('x-timestamp', Date.now());
                },
            };
            const clientDir = path.resolve(path.join(__dirname, pluginOptions.clientPath));
            instance.use(pluginOptions.path, express.static(clientDir, options));
        },
    });
    return config;
}
