var assert = require('assert');
Rack = require('../src/rack.js');
var chai = require('chai');
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
chai.use(sinonChai);
var expect = chai.expect;
var should = chai.should();
//
// var sort = { insertionSort: function () {} };
// var spy = sinon.spy();
// var sort = sinon.mock();
//
// var stub = sinon.stub(sort, "insertionSort", func);

describe('Rack', function() {

  var sort;
  var rack;

  beforeEach(function() {
    rack = new Rack();
    sort = sinon.sort.create

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
      expect(stub).to.have.been.calledWith("insertionSort");
    });
  });

  // describe('#drawBall()' function(){
  //   it('draws a ball and sorts the rack', function(){
  //
  //   });
  // });
});
