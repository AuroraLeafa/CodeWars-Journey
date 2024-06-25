/* 
    Kyu 7
    Day 32 - Code Wars Challenge
    Link : https://www.codewars.com/kata/563cf89eb4747c5fb100001b
    CLEAR!!
*/

function removeSmallest(numbers) {
  let smallest = Math.min(...numbers);
  let smallestIndex = numbers.indexOf(smallest);
  return numbers.length
    ? [...numbers.slice(0, smallestIndex), ...numbers.slice(smallestIndex + 1)]
    : [];
}
console.log(removeSmallest([3,4,2,1,5,6,1,1,2]));
console.log(removeSmallest([4,1,2,3,1]));
