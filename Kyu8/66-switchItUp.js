/* 
    Day 66 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5808dcb8f0ed42ae34000031/
    CLEAR !!
*/

// function switchItUp(number) {
//   switch (number) {
//     case 0:
//       return "Zero";
//       break;
//     case 1:
//       return "One";
//       break;
//     case 2:
//       return "Two";
//       break;
//     case 3:
//       return "Three";
//       break;
//     case 4:
//       return "Four";
//       break;
//     case 5:
//       return "Five";
//       break;
//     case 6:
//       return "Six";
//       break;
//     case 7:
//       return "Seven";
//       break;
//     case 8:
//       return "Eight";
//       break;
//     case 9:
//       return "Nine";
//       break;
//     default:
//       return "Invalid Input";
//   }
// }

// const switchItUp = number => ({
//     0: "Zero",
//     1: "One",
//     2: "Two",
//     3: "Three",
//     4: "Four",
//     5: "Five",
//     6: "Six",
//     7: "Seven",
//     8: "Eight",
//     9: "Nine",
// })[number]

const switchItUp = (number) =>
  [
    "Zero",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ][number];

console.log(switchItUp(2));
console.log(switchItUp(3));
console.log(switchItUp(4));
console.log(switchItUp(5));
