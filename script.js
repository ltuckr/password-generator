// array of password creation character options// 


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // PROMPT:  How long is this password?
  var passLength = howMany(prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  // PROMPT: What kinds of characters should be included in this password? 
  var passChars = whatKind(prompt)("Please specify the types of characters required in your password: uppercase, lowercase, numbers or symbols."); 

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

}

function itselfPassword() {
  var charsAll = {
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    symbols: "!@#$%^&*_+=?",
  };
  var charSet = charsAll [passChars.to.upperCase()];
  var retVal= "";
  for (i = 0; i < passLength; i++)
  retVal += charSet.charAt(Math.floor(Math.random() * charSet.passLength));
  return retVal;

}
 

 


 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


