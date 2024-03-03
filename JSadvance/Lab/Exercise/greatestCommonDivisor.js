function divisor(a,b) {
        let divisor=a%b;
        while(divisor!==0){
            a=b;
            b=divisor;
            divisor=a%b;
        }
        console.log(b);
}   
divisor(15, 5)