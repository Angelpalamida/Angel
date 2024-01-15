function evenPosition(arr){
    let final=[];
   
    let result=arr.map((a,i,b)=>i%2==0?final.push(arr[i]):undefined);
     console.log(final.join(" "));
}
evenPosition(['20', '30', '40', '50', '60']);