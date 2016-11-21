class Character{
  constructor(sort){
    this._sort = sort
  }

  splitter(string){
  let splitString = this._removePunctuationAndSpaces(string);
  let splitStringLower = splitString.toLowerCase();

  
  let charArray = Array.from(splitStringLower);
  let sortedArray = this._sortString(CharArray);
  let sortedSting = sortedArray.join("");
  return sortedSting;
  }
  _removePunctuationAndSpaces(string){
    return string.replace(/[.,\/#!$%\^&\*;:{}=\-_ `~()]/g,"");
  }

  _sortString(string){
    return this._sort.insertionSort(string)
  }


}
module.exports = Character;
