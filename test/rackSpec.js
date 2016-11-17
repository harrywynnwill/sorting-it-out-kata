var assert = require('assert');
Rack = require('../src/rack.js');
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var expect = chai.expect;
var should = chai.should();

var sort = { insertionSort: function () {} };
var spy = sinon.spy();
var mock = sinon.mock(sort);


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

  describe('#drawBall()', function(){
    it('draws a ball to the rack', function(){
      var rack = new Rack();
      rack._drawBall(20);
      assert.deepEqual(rack.balls,[20]);
    });
  });
  describe('#sort()', function(){
    it('sorts the balls in the rack', function(){
      var rack = new Rack(sort);
      rack._sortBalls();
      mock.expects("insertionSort").once();
      mock.verify();
    });
  });
  // describe('#drawBall()' function(){
  //   it('draws a ball and sorts the rack', function(){
  //
  //   });
  // });
});
