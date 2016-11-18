var assert = require('assert');
Rack = require('../src/rack.js');
Sort = require('../src/sort.js');

describe('Feature Test', function(){


  describe('Draw 5 balls ', function(){
    before(function(){
      var sort = new Sort();
      var rack = new Rack(sort);
    });
    it('sorts the rack after each ball is drawn to the rack', function(){
      var sort = new Sort();
      var rack = new Rack(sort);
      assert.deepEqual(rack.balls, []);
      rack.add(20);
      assert.deepEqual(rack.balls, [20]);
      rack.add(10);
      assert.deepEqual(rack.balls, [10, 20]);
      rack.add(30);
      assert.deepEqual(rack.balls, [10, 20, 30]);
      rack.add(11);
      assert.deepEqual(rack.balls, [10, 11, 20, 30]);
      rack.add(48);
      assert.deepEqual(rack.balls, [10, 11, 20, 30, 48]);
    });
  });
  describe('Sorting Characters', function(){
    it('takes a block of text and returns the letters it contain sorted', function(){
      var sort = new Sort();
      var character = new Character(sort);
      let string = "When not studying nuclear physics, Bambi likes to play beach volleyball.";
      let splitString = "aaaaabbbbcccdeeeeeghhhiiiiklllllllmnnnnooopprsssstttuuvwyyyy";
      assert.equal(character.splitter(string, splitString));

    })
  })
});
