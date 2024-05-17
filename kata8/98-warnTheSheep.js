/* 
    Day 98 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
    CLEAR!!
*/

// function warnTheSheep(queue) {
//     let wolfPosition = queue.findIndex((x) => x === "wolf");
//     if(wolfPosition === queue.length-1){
//         return "Pls go away and stop eating my sheep"
//     }else{
//         let sheepPosition = queue.length - wolfPosition - 1
//         return `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
//     }
// }

const warnTheSheep = queue => {
    let sheepPosition = queue.length - queue.indexOf("wolf") - 1
    return sheepPosition === 0 ? "Pls go away and stop eating my sheep" : `Oi! Sheep number ${sheepPosition}! You are about to be eaten by a wolf!`;
}

console.log(warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["wolf", "sheep", "sheep", "sheep", "sheep", "sheep", "sheep"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));