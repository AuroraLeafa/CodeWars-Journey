/* 
    Day 77 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5ad0d8356165e63c140014d4
    CLEAR!!
*/

// function finalGrade(exam, projects) {
//   if (exam > 90 || projects > 10) return 100;
//   if (exam > 75 && projects >= 5) return 90;
//   if (exam > 50 && projects >= 2) return 75;
//   return 0;
// }

const finalGrade = (exam, projects) => {
    return (
        exam > 90 || projects > 10 ? 100 :
        exam > 75 && projects >= 5 ? 90 :
        exam > 50 && projects >= 2 ? 75 : 0
    )
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
