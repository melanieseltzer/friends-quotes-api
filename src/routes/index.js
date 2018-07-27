const express = require('express');

const router = express.Router();
const quoteController = require('../controllers/quoteController');

router.get('/quotes', quoteController.getAllQuotes);
router.get('/quotes/random', quoteController.getRandomQuote);
router.get('/quotes/:num', quoteController.getNumberOfQuotes);

module.exports = router;
