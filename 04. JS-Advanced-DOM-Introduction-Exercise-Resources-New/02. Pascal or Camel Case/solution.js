function solve() {
 let firstWord=document.getElementById("text").value;
 let comand=document.getElementById("naming-convention").value;
  let modifiedWord;
  if(comand=="Camel Case"){

   modifiedWord=firstWord
   .split(' ')
   .map((word, index) => index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
   .join('');
  }else if(comand=="Pascal Case"){
    modifiedWord = text.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join('');

  }else{
    console.log(`Error!`);
  }
  document.getElementById('result').innerHTML = modifiedWord;
}