exports.getAllQuotes = (req, res) => {
  res.send('Get all quotes');
};

exports.getRandomQuote = (req, res) => {
  res.send('Random quote');
};

exports.getNumberOfQuotes = (req, res) => {
  res.send('Get specific number of quotes');
};
