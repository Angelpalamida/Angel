function oddPositions(arr) {
   let odd=arr
   .filter((num,i)=>i%2!=0)
   .reverse()
   .map((num)=>num*2);

   console.log(odd);
}
oddPositions([3, 0, 10, 4, 7, 3]);