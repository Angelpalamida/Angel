function extractSubset(arr) {
        let result=[];
        for (let i = 0; i < arr.length; i++) {
            if(i===0){
                result.push(arr[i]);
            }else if(result[result.length-1]<=arr[i]){
                result.push(arr[i])
            }
            
        }
        return result;
       
}
extractSubset([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    
    
    
    
    
    
    );