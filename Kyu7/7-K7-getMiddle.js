/* 
    Kyu 7
    Day 7 - Code Wars Challenge
    Link : https://www.codewars.com/kata/56747fd5cb988479af000028
    CLEAR!!
*/

function getMiddle(s) {
  let mid = Math.floor(s.length / 2);
  return s.length % 2 === 0 ? s.slice(mid - 1, mid + 1) : s[mid];
}

console.log(getMiddle("Testings"));
