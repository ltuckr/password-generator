// array of password creation character options// 


var generateBtn = document.querySelector("#generate").addEventListener("click",writePassword);

//Character bank array 
var charsAll = {
  uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  lowercase: "abcdefghijklmnopqrstuvwxyz",
  numbers: "1234567890",
  symbols: "!@#$%^&*_+=?",
};

// user criteria prompts: length and type
function writePassword() {
  // PROMPT:  How long is this password?
  var length = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  // PROMPT: What kinds of characters should be included in this password? 
  const upper=  (prompt)("Does the password require uppercase letters?"); 
  const lower=  (prompt)("Does the password require lowercase letters?"); 
  const number=  (prompt)("Does the password require numbers?"); 
   const symbol=  (prompt)("Does the password require symbols?"); 




  






  var password = generatePassword();




}

function generatePassword() {
 



  

}
 

 


 




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


