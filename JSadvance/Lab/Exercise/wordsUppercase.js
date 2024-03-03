function extractAndConvertToUpperCase(inputString) {
  const words = inputString.match(/\w+/g);

  if (words) {
    const upperCaseWords = words.map((word) => word.toUpperCase());

    console.log(upperCaseWords.join(", "));
  } else {
    console.log("No words found in the input string.");
  }
  
}

extractAndConvertToUpperCase("Hi, how are you?");
extractAndConvertToUpperCase("hello");
