import { quotes } from '../data/quotes';

exports.getAllQuotes = (req, res) => {
  res.json(quotes);
};

exports.getRandomQuote = (req, res) => {
  res.send('Random quote');
};

exports.getNumberOfQuotes = (req, res) => {
  res.send('Get specific number of quotes');
};
