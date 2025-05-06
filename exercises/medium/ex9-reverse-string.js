function reverseString(str) {
  /* take a string as input and return it reversed Example: "hello" -> "olleh" */
  return str.split("").reverse().join("");
}

module.exports = reverseString;
