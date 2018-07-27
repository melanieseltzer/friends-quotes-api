# Friends Quotes API [![Build Status](https://travis-ci.org/melanieseltzer/friends-quotes-api.svg?branch=master)](https://travis-ci.org/melanieseltzer/friends-quotes-api)

> *"Joey doesn't share food!"*

A simple Node/Express quote API for the TV show *Friends* 😄

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

https://friends-quotes-api.herokuapp.com/quotes

Returns an array of all quotes.

### `GET /quotes/random`

https://friends-quotes-api.herokuapp.com/quotes/random

Returns a single quote object which is random.

### `GET /quotes/{num}`

E.g. https://friends-quotes-api.herokuapp.com/quotes/4 (returns 4 random quotes)

Returns a random array of quotes with length {num}.

## 🚀 Local Development

Fork and install dependencies:

`npm install`

Start the dev server:

`npm run dev`

## Made With ❤️

- [Express](https://expressjs.com/)
