var assert = require('assert');
var expect = require('expect.js');
Rack = require('../src/rack.js')

describe('Rack', function() {
  describe('#balls()', function() {
    it('should initialize with an empty rack', function() {
      var rack = new Rack()
      console.log(rack)
      assert.deepEqual(rack.getBalls(), {})
    });
  });
});
