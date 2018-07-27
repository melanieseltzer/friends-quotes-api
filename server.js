const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const routes = require('./routes/index');

const app = express();

// Body-parser middleware
app.use(bodyParser.json());

// Our API routes
app.use('/', routes);

// Set port environment variable PORT or 3000
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`);
});
