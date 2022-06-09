function isPalindrome(str) {
  // str : "hot dog"
  let reverseStr = str
    .split("") // ["h","o","t"," ","d","o","g"]
    .reverse() // ["g","o","d"," ","t","o","h"]
    .join(""); // "god toh"
  return reverseStr == str;
}

module.exports = isPalindrome;
