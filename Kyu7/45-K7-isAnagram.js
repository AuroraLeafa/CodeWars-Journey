/* 
    Kyu 7
    Day 45 - Code Wars Challenge
    Link : https://www.codewars.com/kata/529eef7a9194e0cbc1000255
    CLEAR!!
*/

const isAnagram = (test, original) => {
    test = test.toLowerCase();
    original = original.toLowerCase();
    
    if (test.length !== original.length) {
        return false;
    }
    
    let sortedStr1 = test.split('').sort().join('');
    let sortedStr2 = original.split('').sort().join('');
    
    return sortedStr1 === sortedStr2;
};

console.log(isAnagram('foefet', 'toffee'));
console.log(isAnagram('Buckethead', 'DeathCubeK'));
console.log(isAnagram('Creative', 'Reactive'));