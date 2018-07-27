import express from 'express';
import path from 'path';
import routes from './routes/index';

// Set port environment variable PORT or 3000
const port = process.env.PORT || 8080;

const app = express();

// View for the homepage
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Static files live here
app.use(express.static(path.join(__dirname, '../public')));

// Enable CORS
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// API routes
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
