/* 
    Day 12 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55a2d7ebe362935a210000b2/
    CLEAR !!
*/

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//         return args.sort((a, b) => a - b)[0]
//     }
// }

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args)
    }
}