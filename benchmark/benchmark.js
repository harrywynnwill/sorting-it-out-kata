var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
Sort = require('../src/sort.js')
var rackFive = [50,30,10,21,45];
var rackSeven = [50,30,10,21,45,22,1];
var rackNine = [50,30,10,21,45,22,1,12,49];
var rackFifteen = [50,30,10,21,45,22,1,12,49,8,27,1,44,14,58];
var sort = new Sort();

add('#bubbleSort() with 5 balls', function(){
  sort.bubbleSort(rackFive);
})
add('#bubbleSort() with 7 balls', function(){
  sort.bubbleSort(rackSeven);
})
add('#bubbleSort() with 9 balls', function(){
  sort.bubbleSort(rackNine);
})
add('#bubbleSort() with 15 balls', function(){
  sort.bubbleSort(rackFifteen);
})
add('#selectionsSort()', function(){
  var sort = new Sort();
  sort.selectionSort(rackFive);
})
add('#insetionSort()', function(){
  var sort = new Sort();
  sort.insertionSort(rackFive);
})
add('#javascriptSort() with 5 balls', function(){
  rackFive.sort();
})
add('#javascriptSort() with 7 balls', function(){
  rackSeven.sort();
})
add('#javascriptSort() with 9 balls', function(){
  rackNine.sort();
})
add('#javascriptSort() with 15 balls', function(){
  rackFifteen.sort();
})
options.maxTime = 1; // Second
