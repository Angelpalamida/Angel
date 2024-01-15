function evenPosition(arr) {
  let final = [];
  let sorting = arr.map((a, i, b) =>{
    if(i%2===0){
      final.push(arr[i]);
    }
  });
  console.log(final.join(` `));
}
evenPosition(["20", "30", "40", "50", "60"]);
