function number(busStops) {
  let totalPeople = 0;

  for (const element of busStops) {
    totalPeople += element[0];
    totalPeople -= element[1];
  }
  return totalPeople;
}

// const number = (busStops) => busStops.reduce((acc, [curr0, curr1]) => acc + curr0 - curr1, 0);

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
); //5
console.log(
  number([
    [3, 0],
    [9, 1],
    [4, 10],
    [12, 2],
    [6, 1],
    [7, 10],
  ])
); //17
