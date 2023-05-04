// array of password creation character options// 


var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Character bank array 
var charsAll = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  symbols: "!@#$%^&*_+=?",
};

// Variables for user selection criteria
var confirmLength = "";
var confirmUpper;
var confirmLower;
var confirmNumbers;
var confirmSymbols;

// user criteria prompts: length and type
function writePassword() {
  // PROMPT:  How long is this password?
  var confirmLength = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");

  //Error message for loop.
  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("I'm sorry. Password length must be between 8-128 characters. Please try again.");
    var confirmLength = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  } 


  // PROMPT: What kinds of characters should be included in this password? 
  var confirmUpper = confirm("Does the password require uppercase letters?");
  var confirmLower = confirm("Does the password require lowercase letters?");    
  var confirmNumbers= confirm("Does the password require numbers?");
  var confirmSymbols = confirm("Does the password require symbols?");
    
    //Error message and for loop and repeating prompts if at least one criteria is not selected.
  while(confirmUpper=== false && confirmLower === false && confirmNumbers === false && confirmSymbols === false) {
    alert("Please choose at least one criteria for your password and try again");
    var confirmUpper = confirm("Does the password require uppercase letters?");
    var confirmLower = confirm("Does the password require lowercase letters?");    
    var confirmNumbers= confirm("Does the password require numbers?");
    var confirmSymbols = confirm("Does the password require symbols?");

  } 

  // Now, let's make this password.
  if (confirmUpper) {
    password = password.concat(uppercase);
  }

  if (confirmLower) {
    password = password.concat(lowercase);
  }
    
  if (confirmnumbers) {
    password= password.concat(numbers);
  }

  if (confirmsymbols) {
    password = password.concat(symbols);
  }

  var password = [];

  for (var i = 0; i < confirmLength; i++) {
    createPassword = createPassword + password[Math.floor(Math.random() * password.length)];
    console.log(createPassword)
  }
  return createPassword;

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }









  











}

function generatePassword() {
 



  

}
 

 


 






