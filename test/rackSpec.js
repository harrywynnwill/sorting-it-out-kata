var assert = require('assert');
var expect = require('expect.js');
Rack = require('../src/rack.js')

describe('Rack', function() {

  before(function() {
    var rack = new Rack();
  });

  describe('#balls()', function() {
    it('should initialize with an empty rack', function() {
      var rack = new Rack();
      assert.deepEqual(rack.balls, []);
    });
  });

  describe('#add()', function(){
    it('adds a ball to the rack', function(){
      var rack = new Rack();
      rack.add(20);
      assert.deepEqual(rack.balls,[20]);
    });
  });
  // describe('#sort()', function(){
  //   it('')
  // })
});
