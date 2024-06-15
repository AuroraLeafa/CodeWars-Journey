/* 
    Kyu 8
    Day 124 - Code Wars Challenge
    Link : https://www.codewars.com/kata/53f0f358b9cb376eca001079
    CLEAR!!
*/

class Ball {
  constructor(ballType = "regular") {
    this.ballType = ballType;
  }
}

let Ball1 = new Ball();
let Ball2 = new Ball("Super");

console.log(Ball1);
console.log(Ball2);
