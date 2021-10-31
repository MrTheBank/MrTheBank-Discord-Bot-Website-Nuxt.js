const express = require('express');
const router = express.Router();

/*
 * Routing for info
 */
const CommandsController = require('../controllers/Info/commands');
const commands = new CommandsController();

router.get('/commands', (req, res) => commands.view(req, res));

module.exports = router;
