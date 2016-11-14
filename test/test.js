var assert = require('assert');
var expect = require('expect.js');
Rack = require('../src/rack.js')

describe('Rack', function() {
  beforeEach(function() {
    var rack = new Rack();
  });
  describe('#balls()', function() {
    it('should initialize with an empty rack', function() {
      assert.deepEqual(rack.getBalls(), [])
    });
  });
  describe('#add()', function(){
    it('adds a ball to the rack', function(){
      rack.add(20);
      assert.deepEqual(rack.getBalls(),[])
    });
  });
});
