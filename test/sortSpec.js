var assert = require('assert');
var expect = require('expect.js');
Sort = require('../src/sort.js')

// see algorithm.md in the root for an explanation of the sorting algorithms

describe('Sort', function(){
  describe('#bubbleSort()', function(){
    it('sorts the array using the bubble sort technique', function(){
      var sort = new Sort();
      var rack = [50,30,10,21,45];
      assert.deepEqual(sort.bubbleSort(rack), [10,21,30,45,50]);
    });
  });
  describe('#selectionSort()', function(){
    it('sorts the array using the selection sort technique', function(){
      var sort = new Sort();
      var rack = [50,30,10,21,45];
      assert.deepEqual(sort.selectionSort(rack), [10,21,30,45,50]);
    });
  });
  describe('#insertionSort()', function(){
    it('sorts the array using the insertion sort technique', function(){
      var sort = new Sort();
      var rack = [50,30,10,21,45];
      assert.deepEqual(sort.insertionSort(rack), [10,21,30,45,50]);
    });
  });
  describe('#mergeSort()', function(){
    it('sorts the array using the insertion sort technique', function(){
      var sort = new Sort();
      var rack = [50,30,10,21,45];
      assert.deepEqual(sort.mergeSort(rack), [10,21,30,45,50]);
    });
  });
});
