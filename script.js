// array of password creation character options// 


var generateBtn = document.querySelector("#generate");

// user criteria prompts: length and type
function writePassword() {
  // PROMPT:  How long is this password?
  var Length = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  // PROMPT: What kinds of characters should be included in this password? 
  var upper=  (prompt)("Does the password require uppercase letters?"); 
  var lower=  (prompt)("Does the password require lowercase letters?"); 
  var numbers=  (prompt)("Does the password require numbers?"); 
  var symbols=  (prompt)("Does the password require symbols); 


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

function generatePassword() {
  var charsAll = {
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "!@#$%^&*_+=?",
  };
  var charSet = charsAll[passChars.toUpperCase()];
  var retVal= "";
  for (i = 0; i < passLength; i++)
  retVal += charSet.charAt(Math.floor(Math.random() * charSet.passLength));
  return retVal;

  

}
 

 


 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


