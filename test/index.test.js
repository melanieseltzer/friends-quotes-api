const request = require('supertest');
const app = require('../src/index');

describe('homepage', () => {
  it('should explain what the api is', done => {
    request(app)
      .get('/')
      .expect(/Friends Quotes API/)
      .expect(200, done);
  });
});

describe('endpoints', () => {
  describe('GET /quotes', () => {
    it('should respond with json', done => {
      request(app)
        .get('/quotes')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('should not be empty', done => {
      const length = res => res.body.should.not.be.empty;
      request(app)
        .get('/quotes')
        .expect(length)
        .expect(200, done);
    });
  });
  describe('GET /quotes/random', () => {
    it('should respond with json', done => {
      request(app)
        .get('/quotes/random')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('should have both quote and character', done => {
      const isValid = res => {
        res.body.should.have.property('quote');
        res.body.should.have.property('character');
      };
      request(app)
        .get('/quotes/random')
        .expect(isValid)
        .expect(200, done);
    });
  });
  describe('GET /quotes/:num', () => {
    it('should respond with json', done => {
      request(app)
        .get('/quotes/3')
        .expect('Content-Type', /json/)
        .expect(200, done);
    });
    it('should have the correct length', done => {
      const length = res => {
        res.body.should.have.lengthOf(3);
      };
      request(app)
        .get('/quotes/3')
        .expect(length)
        .expect(200, done);
    });
    it('should be empty if no number is passed', done => {
      const length = res => res.body.should.be.empty;
      request(app)
        .get('/quotes/lol')
        .expect(length)
        .expect(200, done);
    });
  });
});
