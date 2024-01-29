function solve() {
  let textValue = document.getElementById(`text`).value;
  let caller = document.getElementById(`naming-convention`).value;
  let resultRef = document.getElementById(`result`);

  textValue = textValue.toLowerCase();
  result = "";
  switch (caller) {
    case `Camel Case`:
      textArr = textValue.split(` `);
      result = textArr.shift();
      textArr.forEach((el) => {
        result += el[0].toUpperCase() + el.substring(1).toLowerCase();
      });
      break;
    case `Pascal Case`:
      textArr = textValue.split(` `);

      textArr.forEach((el) => {
        result += el[0].toUpperCase() + el.substring(1).toLowerCase();
      });
      break;
    default:
      result = `Error!`;
  }
  resultRef.textContent = result;
}
