/* 
    Kyu 8
    Day 129 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57a77726bb9944d000000b06
    CLEAR!!
*/

const mango = (quantity, price) => {
    let freeMangos = Math.floor(quantity / 3)
    let mustPayMangos = quantity - freeMangos
    return mustPayMangos * price
}

console.log(mango(2, 3)); // 6
console.log(mango(3, 3)); // 6
console.log(mango(9, 5)); // 30
