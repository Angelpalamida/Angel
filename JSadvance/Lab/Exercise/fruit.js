function fruitShop(fruit,weight,price) {
        let kilos=weight/1000;
        let money=kilos*price
        console.log(`I need $${money.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`);
}
fruitShop('orange', 2500, 1.80)