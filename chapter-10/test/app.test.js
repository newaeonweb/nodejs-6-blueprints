// import modules
var request = require('supertest');
var server = require('../server');

// Test 01
describe('GET /', function() {
  it('should render ok', function(done) {
    request(server)
      .get('/')
        // expected result
      .expect(200, done);
  });
});

// Test 02
describe('GET /bikes', function() {
  it('should not found', function(done) {
    request(server)
      .get('/bikes')
        // expected result
      .expect(404, done);
  });
});
