var assert = require('assert');
Rack = require('../src/rack.js');
var sinon = require('sinon');
var chai = require('chai');

var sinonChai = require("sinon-chai");

chai.use(sinonChai);
var expect = chai.expect;
//
// var sort = { insertionSort: function () {} };
// var spy = sinon.spy();
// var sort = sinon.mock();
//
// var stub = sinon.stub(sort, "insertionSort", func);

describe('Rack', function() {

  var rack;

  // beforeEach(function() {
  //   rack = new Rack();
  //
  //
  // });

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
      var sort = new Sort();
      var rack = new Rack(sort);
      var stub = sinon.stub(sort, 'insertionSort');
      stub.returns([0,1,2,3])

      //
      // rack.add(20)
      //
      //
       rack._drawBall(20)
       rack._sortBalls()
        expect(sort.insertionSort).to.have.been.calledWith(rack._balls);
        // expect(sort.insertionSort()).to.equal('1')
      stub.restore();
    });
  });

  // describe('#drawBall()' function(){
  //   it('draws a ball and sorts the rack', function(){
  //
  //   });
  // });
});
