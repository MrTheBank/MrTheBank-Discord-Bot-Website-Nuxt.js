const express = require('express');
const route = express();

/*
 * Route modules.
 */
const info = require('./routes/info');

route.use('/info', info);

// Default route.
route.all('/', (req, res) => { res.sendStatus(403).end() });

module.exports = route;
