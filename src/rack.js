'use strict';

class Rack {

  constructor(sort){
    this._balls = [];
    this._sort = sort;
  }

  add(ball){
    this._balls.push(ball);
  }

  get balls (){
    return this._balls;
  }

  sort () {
    this._sort.insertionSort(Rack.balls());
  }

}

module.exports = Rack;
