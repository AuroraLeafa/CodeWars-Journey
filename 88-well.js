// function well(x) {
//   let res = 0;
//   for (let i = 0; i < x.length; i++) {
//     if (x[i] === "good") {
//       res += 1;
//     }
//   }
//   return res > 2 ? "I smell a series!" : res >= 1 ? "Publish!" : "Fail!";
// }

const well = x => {
    let res = x.filter(x => x === "good").length
    return res > 2 ? "I smell a series!" : res >= 1 ? "Publish!" : "Fail!";
}

console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']));
console.log(well(['bad', 'bad', 'bad']));
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']));

