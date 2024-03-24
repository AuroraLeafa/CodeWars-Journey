/* 
    Day 48 - Code Wars Challenge
    Link : https://www.codewars.com/kata/55cbd4ba903825f7970000f5/
    CLEAR !!
*/

// function getGrade(s1, s2, s3) {
//   let avg = (s1 + s2 + s3) / 3;
//   if (avg >= 90 && avg <= 100) {
//     return "A";
//   } else if (avg >= 80 && avg < 90) {
//     return "B";
//   } else if (avg >= 70 && avg < 80) {
//     return "C";
//   } else if (avg >= 60 && avg < 70) {
//     return "D";
//   } else {
//     return "F";
//   }
// }

const getGrade = (s1, s2, s3) => {
  let avg = (s1 + s2 + s3) / 3
  return avg >= 90 ? "A" : avg >= 80 ? "B" : avg >= 70 ? "C" : avg >= 60 ? "D" : "F"
}

console.log(getGrade(50,40,90));