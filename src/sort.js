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

  selectionSort(rack){
    var minIdx, temp, len = rack.length;
    for(var i = 0; i < len; i++){
      minIdx = i;
      for(var  j = i+1; j<len; j++){
         if(rack[j]<rack[minIdx]){
            minIdx = j;
         }
      }
      temp = rack[i];
      rack[i] = rack[minIdx];
      rack[minIdx] = temp;
    }
    return rack;
  }

}

module.exports = Sort;
