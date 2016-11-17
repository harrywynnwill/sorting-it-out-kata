var assert = require('assert');
Rack = require('../src/rack.js');
Sort = require('../src/sort.js');

describe('Feature Test', function(){


  describe('Draw 5 balls ', function(){
    beforeEach(function(){
      var sort = new Sort();
      var rack = new Rack(sort);
    });
    it('it sorts the rack after each ball is drawn to the rack', function(){
      var sort = new Sort();
      var rack = new Rack(sort);
      assert.deepEqual(rack.balls, []);
      rack.add(20);
      assert.deepEqual(rack.balls, [20]);
      rack.add(10);
      assert.deepEqual(rack.balls, [10, 20]);
      rack.add(30);
      assert.deepEqual(rack.balls, [10, 20, 30]);
    });
  });
  });
