function sumTable() {
  const tables = document.querySelectorAll("table");

  const sumElement = document.getElementById("sum");
   
  let total = 0;

  let mol = tables[0].rows;
  for (let i = 0; i < mol.length; i++) {
    let cellValue =
      parseFloat(mol[i].cells[mol[i].cells.length - 1].textContent) || 0;

    total += cellValue;
  }

  sumElement.textContent = total;
}
