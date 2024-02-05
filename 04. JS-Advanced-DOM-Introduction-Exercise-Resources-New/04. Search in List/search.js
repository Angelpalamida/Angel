function search() {
    clearResults();
  
    const searchText = document.getElementById("searchText").value.toLowerCase();
  
    const townsList = document.getElementById("towns").getElementsByTagName("li");
  
    let matches = 0;
    let resultHTML = "";
  
    for (let i = 0; i < townsList.length; i++) {
      const town = townsList[i];
      const townText = town.textContent.toLowerCase();
  
      if (townText.includes(searchText)) {
        const strongElement = document.createElement("strong");
        const underlineElement = document.createElement("u");

        strongElement.appendChild(document.createTextNode(town.textContent));
        underlineElement.appendChild(strongElement);

        town.innerHTML = "";
        town.appendChild(underlineElement);

        matches++;
      }
    }
  
    resultHTML = matches + (matches === 1 ? " match" : " matches") + " found";
    document.getElementById("result").innerHTML = resultHTML;
}

function clearResults() {
    const townsList = document.getElementById("towns").getElementsByTagName("li");
  
    for (let i = 0; i < townsList.length; i++) {
      const town = townsList[i];
      town.innerHTML = town.textContent;
    }
  
    document.getElementById("result").innerHTML = "";
}