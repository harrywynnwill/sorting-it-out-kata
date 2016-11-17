'use strict';

class Sort {
	constructor() {}
	bubbleSort(rack) {
		var len = rack.length;
		for (var i = len - 1; i >= 0; i--) { //outer loop starts from the end of the array
			for (var j = 1; j <= i; j++) {
				if (rack[j - 1] > rack[j]) {
					var temp = rack[j - 1];
					rack[j - 1] = rack[j];
					rack[j] = temp;
				}
			}
		}
		return rack;
	}

	selectionSort(rack) {
		var minIdx, temp, len = rack.length;
		for (var i = 0; i < len; i++) {
			minIdx = i;
			for (var j = i + 1; j < len; j++) {
				if (rack[j] < rack[minIdx]) {
					minIdx = j;
				}
			}
			temp = rack[i];
			rack[i] = rack[minIdx];
			rack[minIdx] = temp;
		}
		return rack;
	}

	insertionSort(rack) {
		var i, len = rack.length,
			el, j;
		for (i = 1; i < len; i++) {
			el = rack[i];
			j = i;

			while (j > 0 && rack[j - 1] > el) {
				rack[j] = rack[j - 1];
				j--;
			}

			rack[j] = el;
		}

		return rack;
	}


	mergeSort(rack) {
		var len = rack.length;
		if (len < 2)
			return rack;
		var mid = Math.floor(len / 2),
			left = rack.slice(0, mid),
			right = rack.slice(mid);
      return this._merge(this.mergeSort(left), this.mergeSort(right));

	}
  _merge(left, right) {
    var result = [],
      lLen = left.length,
      rLen = right.length,
      l = 0,
      r = 0;
    while (l < lLen && r < rLen) {
      if (left[l] < right[r]) {
        result.push(left[l++]);
      } else {
        result.push(right[r++]);
      }
    }
    return result.concat(left.slice(l)).concat(right.slice(r));
  }

}

module.exports = Sort;
