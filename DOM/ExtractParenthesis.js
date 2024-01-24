function extract(elementId) {
  let targetElement = document.getElementById(elementId);

  let textContent = targetElement.textContent || targetElement.innerText;

  let matches = textContent.match(/\(([^)]+)\)/g);

  if (matches) {
    let result = matches
      .map(function (match) {
        return match.substring(1, match.length - 1);
      })
      .join("; ");
console.error(result);
    return result;
  } else {
    console.log("No parenthesized text found in the element.");
    return "";

  }

}
