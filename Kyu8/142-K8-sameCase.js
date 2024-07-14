/* 
    Kyu 8
    Day 142 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5dd462a573ee6d0014ce715b
    CLEAR!!
*/

function sameCase(a, b) {
  const isLetter = (char) => /^[a-zA-Z]$/.test(char);
  const isUpperCase = (char) => /^[A-Z]$/.test(char);
  const isLowerCase = (char) => /^[a-z]$/.test(char);

  if (!isLetter(a) || !isLetter(b)) {
    return -1;
  }
  if (
    (isUpperCase(a) && isUpperCase(b)) ||
    (isLowerCase(a) && isLowerCase(b))
  ) {
    return 1;
  }
  return 0;
}

console.log(sameCase("a", "g"));
console.log(sameCase("A", "G"));
console.log(sameCase("A", "g"));
console.log(sameCase("a", "G"));
console.log(sameCase("1", "1"));
