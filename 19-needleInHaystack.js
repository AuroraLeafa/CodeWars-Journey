/* 
    Day 19 Pt. 3 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/
    CLEAR !!
*/

// function findNeedle(haystack) {
//     for (let i = 0; i < haystack.length; i++) {
//         if (haystack[i] === "needle") return "found the needle at position " + i
//     }
//   }

// const findNeedle = (haystack) => {
//   for (let i = 0; i < haystack.length; i++) {
//     if (haystack[i] === "needle") return "found the needle at position " + i;
//   }
// };

const findNeedle = haystack => {
    const index = haystack.indexOf("needle")
    return "found the needle at position " + index;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);
