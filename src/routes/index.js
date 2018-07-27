const express = require('express');

const router = express.Router();
const quoteController = require('../controllers/quoteController');

// Get all quotes
router.get('/quotes', quoteController.getAllQuotes);

// Get a random quote
router.get('/quotes/random', quoteController.getRandomQuote);

// Get a number of random quotes depending on URL input
router.get('/quotes/:num', quoteController.getNumberOfQuotes);

module.exports = router;
