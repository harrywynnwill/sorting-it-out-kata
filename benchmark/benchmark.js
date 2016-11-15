var Benchmark = require('benchmark');
var suite = new Benchmark.Suite;
Sort = require('../src/sort.js')
var rack = [50,30,10,21,45];

// suite.add('#bubbleSort', function(){
//   sort.bubbleSort(rack)
// })
// .on('complete', function() {
//   console.log('Fastest is ' + this.filter('fastest').map('name'));
// });

add('RegExp#test', function() {
  /o/.test('Hello World!');
});

add('String#indexOf', function() {
  'Hello World!'.indexOf('o') > -1;
});

options.maxTime = 3; // Second 
