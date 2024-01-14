function extractAndConvertToUpperCase(inputString) {
    // Use a regular expression to match words in the string
    const words = inputString.match(/\b\w+\b/g);

    // Check if words are found
    if (words) {
        // Convert each word to uppercase
        const upperCaseWords = words.map(word => word.toUpperCase());

        // Join the uppercase words with ", " and print the result
        console.log(upperCaseWords.join(', '));
    } else {
        console.log("No words found in the input string.");
    }
    debugger
}

// Examples
extractAndConvertToUpperCase('Hi, how are you?'); // Output: HI, HOW, ARE, YOU
extractAndConvertToUpperCase('hello');            // Output: HELLO