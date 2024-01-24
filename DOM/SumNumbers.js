function calc() {
    let num=document.getElementById(`num1`).value;
    let secNum=document.getElementById(`num2`).value;
   

    let sum=Number(num)+Number(secNum);
    document.getElementById(`sum`).value=sum;
}
