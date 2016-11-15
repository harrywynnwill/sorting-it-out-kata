'use strict';

class Rack {

  constructor(){
    this._balls = [];
  }

  add(ball){
    this._balls.push(ball);
  }

  get balls (){
    return this._balls;
  }

}

module.exports = Rack;
