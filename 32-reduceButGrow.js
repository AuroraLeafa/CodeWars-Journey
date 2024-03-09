/* 
    Day 32 - Code Wars Challenge
    Link : https://www.codewars.com/kata/57f780909f7e8e3183000078
    CLEAR !!
*/

function grow(x){
    let res = 1;
    for (const num of x) {
        res *= x[num]
    }
    return res;
}

// function grow(x){
//     let arr = x.sort()
//     let arr2 = arr.reduce((acc, curr) => acc * curr)
//     return arr2
//   }

// const grow = (x) => x.sort().reduce((acc, curr) => acc * curr);

console.log(grow([4, 1, 1, 1, 4]));
