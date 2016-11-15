var assert = require('assert');
var expect = require('expect.js');
Sort = require('../src/sort.js')

// see algorithm.md in the root for an explanation of the sorting algorithms


describe('Sort', function(){
  describe('#bubbleSort()', function(){
    it('sorts the array using the bubble sort technique', function(){
      var sort = new Sort();
      var rack = [50,30,10,21,45];
      assert.deepEqual(console.time("bubble test");sort.bubbleSort(rack);console.timeEnd("bubble test");, [10,21,30,45,50]);
    });
  });
});
