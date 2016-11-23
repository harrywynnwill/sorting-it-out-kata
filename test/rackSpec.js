var assert = require('assert');
Rack = require('../src/rack.js');
var sinon = require('sinon');
var chai = require('chai');

var sinonChai = require("sinon-chai");

chai.use(sinonChai);
var expect = chai.expect;

describe('Rack', function() {

  beforeEach(function() {
    rack = new Rack();
  });

	it('should initialize with an empty rack', function() {
		assert.deepEqual(rack.balls, []);
	});
    describe("#add()", function(){
      it("draws balls to the rack and sorts them on the fly", function(){
        var sort = new Sort();
        var rack = new Rack(sort);
        var stub = sinon.stub(sort, 'insertionSort');
        stub.returns([0, 1, 2, 3]);
        rack.add(1)
        assert.deepEqual(rack.add(1),[0,1,2,3]);
        stub.restore();
      });
    });

  	describe('#balls()', function() {
      it('shows the balls in the rack', function(){
        rack._drawBall(20);
        assert.deepEqual(rack.balls,[20]);
      });
  	});

  	describe('#_drawBall()', function() {
  		it('draws a ball to the rack', function() {
  			rack._drawBall(20);
        rack._drawBall(30);
        rack._drawBall(1);
  			assert.deepEqual(rack.balls, [20,30,1]);
  		});
  	});

  	describe('#_sortBalls()', function() {
  		it('sorts the balls in the rack', function() {
  			var sort = new Sort();
  			var rack = new Rack(sort);
        var stub = sinon.stub(sort, 'insertionSort');
  			rack._drawBall(20)
  			rack._sortBalls()
  			expect(sort.insertionSort).to.have.been.calledWith(rack._balls);
  			stub.restore();
  		});
  	});
});
