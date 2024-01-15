function lastK(n,k){
    let result=[1];

    for (let i = 1; i < n; i++) {
        currElement=result.slice(Math.max(0,i-k),i).reduce((a, b) => a + b, 0);
        result.push(currElement);
    }
    return result;
}


console.log(lastK(6, 3));