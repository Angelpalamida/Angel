function sameNumbers(params) {
    let same=true;
    let sum=0;
    let num=[params]
    .join(``)
    .split("")
    .map((a,i,b)=>{
        if(a!==b[0]){
            same=false;
        }
        return sum+=Number(a);
    })
console.log(same);
console.log(sum);
}
sameNumbers(1234)