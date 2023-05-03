// array of password creation character options// 
var characters = {
  upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowerCase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  symbols: "!@#$%^&*_+=?",
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // PROMPT:  How long is this password?
  var passLength = howManychars(prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  // PROMPT: What kinds of characters in this password? 
  var 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

