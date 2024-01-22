function townpopulation(arr) {
  let city = {};

  for (const el of arr) {
    let [townName, population] = el.split(`<->`);
    population = Number(population);
    if (city.hasOwnProperty(townName)) {
      city[townName] += population;
    } else {
      city[townName] = population;
    }
    
  }
  for (const town in city) {
        console.log(`${town}: ${city[town]}`);
  }
}
townpopulation([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
