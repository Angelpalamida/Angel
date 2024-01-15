function sumFirstLast(arr) {
    let sum=Number(arr[0])+Number(arr[arr.length-1]);
    
        return sum;
}
console.log(sumFirstLast(['20', '30', '40']));