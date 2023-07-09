function isPalindrome(word) {
  const reversed = word.split('').reverse().join('');
  return word === reversed;
}

/* Add Pseudocode
 isPalindrome function:
  Input: word (string)
  Output: boolean (true if word is a palindrome, false otherwise)

  1. Let reversed be the reversed version of word
      - Split word into an array of characters
      - Reverse the array
      - Join the array back into a string, assigning it to reversed
  2. If word is equal to reversed, return true (word is a palindrome)
  3. Otherwise, return false (word is not a palindrome)

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
