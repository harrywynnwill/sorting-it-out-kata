'use strict';

class Sort {
  constructor(){

  }
  bubbleSort(rack){
   var len = rack.length;
   for (var i = len-1; i>=0; i--){ //outer loop starts from the end of the array
     for(var j = 1; j<=i; j++){
       if(rack[j-1]>rack[j]){
           var temp = rack[j-1];
           rack[j-1] = rack[j];
           rack[j] = temp;
        }
     }
   }
   return rack;
  }
}

module.exports = Sort;
