function rotateArey(arr,n){
   for (let i = 0; i < n; i++) {
    let removed=arr.pop();
    arr.unshift(removed)
    
   }
        console.log(arr.join(` `));
    }

rotateArey(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15

);