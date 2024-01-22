function cityTaxes(name,population,treasury){
   const result= {
        
            name,
            population,
            treasury,
            taxRate:10,
        
    
        collectTaxes(){
            let taxes=this.treasury+=Math.floor(this.population*this.taxRate);
            return taxes;
        },
        applyGrowth(purcent){
            let growth=this.population+=Math.floor((this.population/100)*purcent);
            return growth;
        },
        applyRecession(num){
            let decrease=this.treasury-=Math.floor((this.treasury/100)*num);
            return decrease;
        }
    }
        return result;
}


const city =
  cityTaxes('Tortuga',
  7000,
  15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);










  
  
  
