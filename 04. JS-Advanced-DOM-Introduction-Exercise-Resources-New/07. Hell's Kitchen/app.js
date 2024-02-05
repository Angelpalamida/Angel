function solve() {
   const btnSend = document.getElementById("btnSend");
   btnSend.addEventListener("click", findBestRestaurant);

   function displayResults(bestRestaurant, sortedWorkers) {
      const bestRestaurantSpan = document.querySelector("#bestRestaurant span");
      const bestRestaurantP = document.querySelector("#bestRestaurant p");
  
      const workersSpan = document.querySelector("#workers span");
      const workersP = document.querySelector("#workers p");
  
      const averageSalaryFormatted = (bestRestaurant.data.totalSalary / bestRestaurant.data.workerCount).toFixed(2);
  
      bestRestaurantSpan.textContent = `Name: ${bestRestaurant.name} Average Salary: ${averageSalaryFormatted} Best Salary: ${bestRestaurant.data.bestSalary.toFixed(2)}`;
      bestRestaurantP.textContent = "";
  
      sortedWorkers.forEach(worker => {
          const workerElement = document.createElement("p");
          workerElement.textContent = `Name: ${worker.name} With Salary: ${worker.salary}`;
          workersP.appendChild(workerElement);
      });
  }

  function findBestRestaurant() {
   const textarea = document.querySelector(".restaurant-race-class textarea");
   const inputText = textarea.value.trim();
   const restaurantStrings = inputText.split("\n");

   const restaurantsData = {};

   restaurantStrings.forEach(restaurantString => {
       const restaurantData = restaurantString.split(" - ");

       if (restaurantData.length < 2) {
           console.error(`Invalid input: ${restaurantString}`);
           return;
       }

       const [name, workersString] = restaurantData;

       const workers = workersString ? workersString.split(", ") : [];

       const totalSalary = workers.reduce((acc, worker) => {
           const [workerName, salary] = worker.split(" ");
           return acc + parseInt(salary);
       }, 0);

       const workerCount = workers.length;

       if (restaurantsData[name]) {
           restaurantsData[name].totalSalary += totalSalary;
           restaurantsData[name].workerCount += workerCount;
       } else {
           restaurantsData[name] = {
               totalSalary: totalSalary,
               workerCount: workerCount,
               bestSalary: 0
           };
       }

       if (totalSalary > restaurantsData[name].bestSalary) {
           restaurantsData[name].bestSalary = totalSalary;
       }
   });

   let bestRestaurant = null;
   let maxAverageSalary = -1;

   for (const [name, data] of Object.entries(restaurantsData)) {
       const averageSalary = data.totalSalary / data.workerCount;
       if (averageSalary > maxAverageSalary) {
           maxAverageSalary = averageSalary;
           bestRestaurant = { name, data };
       }
   }

   if (bestRestaurant) {
       const bestRestaurantString = restaurantStrings.find(str => str.includes(bestRestaurant.name));

       if (bestRestaurantString) {
           const sortedWorkers = bestRestaurantString.split(" - ")[1]
               .split(", ")
               .map(worker => {
                   const [workerName, salary] = worker.split(" ");
                   return { name: workerName, salary: parseInt(salary) };
               })
               .sort((a, b) => b.salary - a.salary);

           displayResults(bestRestaurant, sortedWorkers);
       } else {
           console.error(`Best restaurant not found in input.`);
       }
   } else {
       console.error(`No valid restaurants found.`);
   }
}
}