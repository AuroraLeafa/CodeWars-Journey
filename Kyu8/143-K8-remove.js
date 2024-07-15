/* 
    Kyu 8
    Day 143 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57faf7275c991027af000679
    CLEAR!!
*/

// function remove(s,n){
//     let count = 0;
//     return s.split("").filter(char => char !== "!" || count++ >= n).join("")
// }

const remove = (s,n) => {
    for (let i = 0; i < n; i++) {
        s = s.replace("!", "")
    }
    return s
}


console.log(remove("asdasdsad!!!!", 1));
console.log(remove("!!!asdasdsad!!!!", 3));
console.log(remove("!!!asdas !!!dsad!!!!", 5));