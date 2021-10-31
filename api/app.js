const express = require('express');
const routes = require('./routes')
const app = express();
const bodyParser = require('body-parser'); // Module for POST/GET data

/*
 * Body Parser for API responds.
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/*
 * Routes
 */
app.use(routes);

module.exports = app;

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001;
  app.listen(port, () => {
    console.log('Starting standalone API server.\nAPI server listening on port ' + port);
  });
}
