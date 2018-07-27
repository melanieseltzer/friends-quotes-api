import { quotes } from '../data/quotes';

exports.getAllQuotes = (req, res) => {
  res.status(200).json(quotes);
};

exports.getRandomQuote = (req, res) => {
  const item = quotes[Math.floor(Math.random() * quotes.length)];
  res.status(200).json(item);
};

exports.getNumberOfQuotes = (req, res) => {
  // If the number in the URL is larger than the array length
  // set the count to the array length instead
  const count = req.params.num > quotes.length ? quotes.length : req.params.num;

  // Make sure we're not mutating the original
  const newArr = [...quotes];

  // Get n amount of quotes (from count)
  // after shuffling initial array
  const items = newArr.sort(() => 0.5 - Math.random()).slice(0, count);

  res.status(200).json(items);
};
