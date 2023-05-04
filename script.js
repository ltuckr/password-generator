// array of password creation character options// 


var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);

//Character bank array 
var charsAll = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  symbols: "!@#$%^&*_+=?",
};

// Variable Declaration 
var confirmLength = "";
var confirmUpperCase;
var confirmLowerCase;
var confirmNumbers;
var confirmSymbols;

// user criteria prompts: length and type
function writePassword() {
  // PROMPT:  How long is this password?
  var confirmLength = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");

  //Error message loop if incorrect number selected.
  while(confirmLength <= 7 || confirmLength >= 128) {
    alert("I'm sorry. Password length must be between 8-128 characters. Please try again.");
    var confirmLength = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  } 


  // PROMPT: What kinds of characters should be included in this password? 
  const upper=  (prompt)("Does the password require uppercase letters?"); 
  const lower=  (prompt)("Does the password require lowercase letters?"); 
  const number=  (prompt)("Does the password require numbers?"); 
   const symbol=  (prompt)("Does the password require symbols?"); 




  






  var password = generatePassword();




}

function generatePassword() {
 



  

}
 

 


 






