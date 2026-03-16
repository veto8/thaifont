import wordList from './wordlist.js'; // Import the array

// Now you can use the wordList array:
console.log(wordList.length); // Example: Print the number of words
console.log(wordList[0]);    // Example: Print the first word

function processWords(words) {
  words.forEach(word => {
    console.log(`Processing: ${word}`);
  });
}

processWords(wordList);


