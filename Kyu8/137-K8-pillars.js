/* 
    Kyu 8
    Day 137 - Code Wars Challenge
    Link : https://www.codewars.com/kata/5bb0c58f484fcd170700063d
    CLEAR!!
*/

function pillars(numPill, dist, width) {
    // Calculate distance between first and last pillar in CM, Distance will be in Meters, Width of the pillar is in CM
    const widthOfAllPillars = (numPill - 2) * width;
    const distanceToEnd = (numPill - 1) * dist*100
    return numPill === 1 ? 0 : widthOfAllPillars + distanceToEnd
}

console.log(pillars(11, 15, 30)); // 15270
console.log(pillars(1, 10, 10)); // 0
console.log(pillars(2, 20, 25)); //2000