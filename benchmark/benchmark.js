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

add('#selectionsSort() with 5 balls', function(){
  sort.selectionSort(rackFive);
})
add('#selectionsSort() with 7 balls', function(){
  sort.selectionSort(rackSeven);
})
add('#selectionsSort() with 9 balls', function(){
  sort.selectionSort(rackNine);
})
add('#selectionsSort() with 15 balls', function(){
  sort.selectionSort(rackFifteen);
})


add('#insertionSort() with 5 balls', function(){
  sort.insertionSort(rackFive);
})
add('#insertionSort() with 7 balls', function(){
  sort.insertionSort(rackSeven);
})
add('#insertionSort() with 9 balls', function(){
  sort.insertionSort(rackNine);
})
add('#insertionSort() with 15 balls', function(){
  sort.insertionSort(rackFifteen);
})

add('#javascriptSort() with 5 balls', function(){
  rackFive.sort(rackFive);
})
add('#javascriptSort() with 7 balls', function(){
  rackSeven.sort(rackSeven);
})
add('#javascriptSort() with 9 balls', function(){
  rackNine.sort(rackNine);
})
add('#javascriptSort() with 15 balls', function(){
  rackFifteen.sort(rackFifteen);
})

options.maxTime = .5; // Second
