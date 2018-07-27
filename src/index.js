import express from 'express';
import routes from './routes/index';

// Set port environment variable PORT or 3000
const port = process.env.PORT || 8080;

const app = express();

// API routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
