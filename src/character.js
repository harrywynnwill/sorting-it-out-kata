class Character{
  constructor(sort){
    this._sort = sort
  }

  splitter(string){
  let splitString = this._removePunctuationAndSpaces(string);
  let splitStringLower = splitString.toLowerCase();
  let array = Array.from(splitStringLower);
  let sortedArray = this._sortString(array);
  let sortedSting = sortedArray.join("");
  console.log(sortedSting)
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
