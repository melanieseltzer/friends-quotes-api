# Friends Quotes API [![Build Status](https://travis-ci.org/melanieseltzer/friends-quotes-api.svg?branch=master)](https://travis-ci.org/melanieseltzer/friends-quotes-api)

> *"Joey doesn't share food!"*

Simple Node API to return quotes from the tv show Friends 📺 Built with Express.

## Host

https://friends-quotes-api.herokuapp.com

## API

Quotes are returned in the following format:

```
[
  {
    quote: "...",
    character: "..."
  }
]
```

### `GET /quotes`

Returns an array of all quotes.

https://friends-quotes-api.herokuapp.com/quotes

### `GET /quotes/random`

Returns a single random quote.

https://friends-quotes-api.herokuapp.com/quotes/random

### `GET /quotes/{num}`

Returns an array of quotes (which are randomized) with length {num}.

https://friends-quotes-api.herokuapp.com/quotes/4 (returns 4 random quotes)

## 🚀 Local Development

Fork and install dependencies:

`npm install`

Start the dev server:

`npm run dev`

## Made With ❤️

- [Express](https://expressjs.com/)
