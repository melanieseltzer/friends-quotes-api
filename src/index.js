import express from 'express';
import routes from './routes/index';

const app = express();

// API routes
app.use('/', routes);

// Set port environment variable PORT or 3000
app.set('port', process.env.PORT || 3000);

const server = app.listen(app.get('port'), () => {
  console.log(`Express running on port ${server.address().port}`);
});
