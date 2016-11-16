var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
Sort = require('../src/sort.js')
var rack = [50,30,10,21,45];

add('#bubbleSort()', function(){
  var sort = new Sort();
  sort.bubbleSort(rack);
})
add('#selectionsSort()', function(){
  var sort = new Sort();
  sort.selectionSort(rack);
})
add('#insetionSort()', function(){
  var sort = new Sort();
  sort.insertionSort(rack);
})
add('#javascriptSort()', function(){
  rack.sort();
})
options.maxTime = 1; // Second
