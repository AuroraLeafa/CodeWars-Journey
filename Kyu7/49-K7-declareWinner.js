/* 
    Kyu 7
    Day 49 - Code Wars Challenge
    Link : https://www.codewars.com/kata/577bd8d4ae2807c64b00045b
    CLEAR!!
*/


function Fighter(name, health, damagePerAttack) {
  this.name = name;
  this.health = health;
  this.damagePerAttack = damagePerAttack;
  this.toString = function () {
    return this.name;
  };
} // Need to be included

function declareWinner(fighter1, fighter2, firstAttacker) {
  let attacker = fighter1.name === firstAttacker ? fighter1 : fighter2;
  let defender = fighter1.name === firstAttacker ? fighter2 : fighter1;

  while (fighter1.health > 0 && fighter2.health > 0) {
    defender.health -= attacker.damagePerAttack;
    if (defender.health <= 0) {
      return attacker.name;
    }
    [attacker, defender] = [defender, attacker];
  }
}

// const declareWinner = (fighter1, fighter2, firstAttacker) => {
//     const fight = (attacker, defender) => {
//         defender.health -= attacker.damagePerAttack;
//         return defender.health <= 0 ? attacker : fight(defender, attacker);
//     };
//     return fight(fighter1.name === firstAttacker ? fighter1 : fighter2, fighter1.name === firstAttacker ? fighter2 : fighter1).name;
// };

console.log(
    declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew")
); // "Lew"
