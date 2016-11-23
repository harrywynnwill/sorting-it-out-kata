'use strict';

class Rack {

  constructor(sort){
    this._balls = [];
    this._sort = sort;
  }

  add(ball){
    this._drawBall(ball);
    return this._sortBalls();
  }

  get balls (){
    return this._balls;
  }

  _drawBall(ball){
    this._balls.push(ball);
  }

  _sortBalls() {
    return this._sort.insertionSort(this._balls);
  }
}

module.exports = Rack;
