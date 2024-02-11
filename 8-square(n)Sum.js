// function squareSum(numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i] ** 2
//   }
//   return sum;
// }


const squareSum = numbers => numbers.reduce((acc, curr) => acc + curr ** 2, 0)

console.log(squareSum([3, 2, 1]));
