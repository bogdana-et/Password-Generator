// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var generatedPassword = "";
//You can store the generatedPassword as a string and concat each character OR
//as an array and push each character, then join once you have enough characters

// Function to prompt user for password options
function getPasswordOptions() {
  // Prompt for password length
  //At least 8 characters, no more than 128
  //Conditional to check that the number that was entered is in range
  //Prompts store data as strings, s oneed to parse into a number
  //If the user's input is out of range, either return out of the function or call the function again

  var passwordLength = prompt("Please enter your password length.");

  passwordLength = parseInt(passwordLength);
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Wrong length!");
    return;
  }

  //Confirm which character sets to use
  //If the user answers false for all, either return out of the function or call the function again
  var isLowercase = confirm("Do you want lowercase characters?");
  var isUppercase = confirm("Do you want  uppercase characters?");
  var isNumber = confirm("Do you want a number?");
  var isSymbol = confirm("Do you want a symbol?");

  if (!isLowercase && !isUppercase && !isNumber && !isSymbol) {
    alert("Please choose at least one type of characters!");
    return;
  }
  //Generate a random character for each selected character set
  //Either push selected character sets to a mega-array of all selected characters
  //OR you can keep the arrays separate and generate a random number to select the array and another to select the index

  //Once character sets are selected, move on to generating random characters
  var passwordOptions = {
    passwordLength, // this is shorthand for passwordLength: passwordLength
    isLowercase: isLowercase,
    isUppercase: isUppercase,
    isNumber: isNumber,
    isSymbol: isSymbol,
  };

  return passwordOptions; //make this available outside of this function
}

// Function for getting a random element from an array
function getRandom(arr) {
  var randomIndex = Math.floor(Math.random() * arr.length);

  return arr[randomIndex]

  // Need a variable to hold the password as it's being generated
  //Need  avariable to hold the index that's being generated
  //For loop that loops the number of times that matches the length the user chose
  //Generate a random number
  //That number is the index for a character in the mega-array
  //So then, mega-array[generated-index] is the actual character
  //Add that character to the password
  //Once we finish the for loop, return the generated password
}

// Function to generate password with user input
function generatePassword() {
  var charOptions = [];
  // grab all pwoptions data
  var passwordOptions = getPasswordOptions();

  if (!passwordOptions){
    return 'Please try again and follow instructions'
  }

  if (passwordOptions.isLowercase) {
    charOptions.push(...lowerCasedCharacters);
  }
  if (passwordOptions.isUppercase) {
    charOptions.push(...upperCasedCharacters);
  }
  if (passwordOptions.isNumber) {
    charOptions.push(...numericCharacters);
  }
  if (passwordOptions.isSymbol) {
    charOptions.push(...specialCharacters);
  }

  var password = ''

  for(var i = 0; i<passwordOptions.passwordLength;i++){

    var randomChar = getRandom(charOptions);
    password = password+randomChar
  }
  
  return password

  // Character types
  // Lowercase
  // Uppercase
  // Numeric
  // Special characters ($@%&*, etc)
  // Code should validate for each input and at least one character type should be selected
  // Once prompts are answered then the password should be generated and displayed in an alert or written to the page
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
