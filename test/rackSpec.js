var assert = require('assert');
var expect = require('expect.js');
Rack = require('../src/rack.js');
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var expect = chai.expect;
var should = chai.should();
var sort = { insertionSort: function () {} };
var spy = sinon.spy(sort, 'insertionSort');


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
  describe('#sort()', function(){
    it('sorts the balls in the rack', function(){
      var rack = new Rack(sort);
      rack.sort();
      assert(spy.calledWith(rack))
    });
  });
});
