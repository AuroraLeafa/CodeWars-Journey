/* 
    BONUS
    Day 124 - Daily Code Challenge
    Link : -
    CLEAR!!
*/

function leaders(arr) {
    let result = [];
    let maxRight = arr[arr.length - 1];
    result.push(maxRight);
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] >= maxRight) {
            result.push(arr[i]);
            maxRight = arr[i];
        }
    }
    return result.reverse();
}

console.log(leaders([9,21,8,13,3,7,5]));

