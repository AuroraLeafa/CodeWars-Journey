/* 
    Kyu 8
    Day 125 - Code Wars Challenge
    Link : https://www.codewars.com/kata/59dd3ccdded72fc78b000b25
    CLEAR!!
*/
const days = {
  1: "Sunday",  
  2: "Monday",
  3: "Tuesday",
  4: "Wednesday",
  5: "Thursday",
  6: "Friday",
  7: "Saturday"
};

const whatDay = num => days[num] || 'Wrong, please enter a number between 1 and 7';


console.log(whatDay());
