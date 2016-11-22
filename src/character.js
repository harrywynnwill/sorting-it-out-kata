class Character{
  constructor(sort){
    this._sort = sort
    this._splitString;
  }
  splitter(string){
    this._splitString = this._stringFormatter(string);
    this._sortString(this._splitString);
    this._splitString = this._splitString.join("");
    return this._splitString;
  }

  _stringFormatter(string){
    return string.replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"").toLowerCase().split("");
  }

  _sortString(string){
    return this._sort.insertionSort(string)
  }


}
module.exports = Character;
