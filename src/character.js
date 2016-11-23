'use strict';

class Character{
  constructor(sort){
    this._sort = sort;
    this._splitString;
  }
  splitter(string){
    this._splitString = this._stringFormatter(string);
    this._sortString(this._splitString);
    return this._stringer(this._splitString);
  }

  _stringFormatter(string){
    return string.replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"").toLowerCase().split("");
  }

  _sortString(string){
    return this._sort.insertionSort(string);
  }

  _stringer(array){
    return array.join("")
  }


}
module.exports = Character;
