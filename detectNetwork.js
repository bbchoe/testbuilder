// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.

  // Input will be number string
  // Use if-else to test for length, then appropriate character prefixes
  // If 14 characters long, then if starts with 38 or 39 ==> Diner's Club, return 'Diner\'s Club'
  // Else if 15 digits long, then if starts with 34 or 37 ==> American Express, return 'American Express'
  // Else if 13, 16, or 19 digits long and prefix of 4 ==> return 'Visa'
  // Else if 16 digits long and prefix of 51, 52, 53, 54, or 55 ===> return 'MasterCard'
  // Else return 'Card type not found'
  var prefixChars = Number(cardNumber.slice(0,2));
  var firstChar = Number(cardNumber.slice(0,1));
  var threeChar = Number(cardNumber.slice(0,3));
  var longPrefix = Number(cardNumber.slice(0,4));
  var sixChar = Number(cardNumber.slice(0,6));

  if (cardNumber.length === 14 && (prefixChars === 38 || prefixChars === 39)) {
    return ('Diner\'s Club');
  } else if ((
    (sixChar >= 622126 && sixChar <= 622925) ||
    (threeChar >= 624 && threeChar <= 626) ||
    (longPrefix >= 6282 && longPrefix <= 6288)) &&
    (cardNumber.length >= 16 && cardNumber.length <= 19)) {
      return 'China UnionPay';
  } else if (cardNumber.length === 15 && (prefixChars === 34 || prefixChars === 37)) {
      return ('American Express');
  } else if ((
      longPrefix === 4903 ||
      longPrefix === 4905 ||
      longPrefix === 4911 ||
      longPrefix === 4936 ||
      longPrefix === 6333 ||
      longPrefix === 6759 ||
      sixChar === 564184 ||
      sixChar === 633110) && (
      cardNumber.length === 16 ||
      cardNumber.length === 18 ||
      cardNumber.length === 19
    )) {
      return 'Switch';
  } else if ((cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19) && firstChar === 4) {
      return ('Visa');
  } else if (cardNumber.length === 16 && (prefixChars >= 51 && prefixChars <= 55)) {
      return 'MasterCard';
  } else if ((cardNumber.length === 16 || cardNumber.length === 19) && (longPrefix === 6011 || (threeChar >= 644 && threeChar <= 649) || prefixChars === 65)) {
      return 'Discover';
  } else if ((cardNumber.length >= 12 && cardNumber.length <= 19) && (longPrefix === 5018 || longPrefix === 5020 || longPrefix === 5038 || longPrefix === 6304)) {
      return 'Maestro';
  } else {
      return 'Card type not found';
  }
};
