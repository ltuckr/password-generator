
//Character bank arrays
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 
  var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h","i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  var symbols = ["!","@","#","$","%","^","&","?"];


// Numeric length variable
var confirmLength = "";

//user selection variable
var userSelect;

// Criteria 
var confirmUpper;
var confirmLower;
var confirmNumbers;
var confirmSymbols;

// user criteria prompts: length and type
function generatePassword() {
  // PROMPT:  How long is this password?
  var confirmLength = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");

  //Error message for loop.
  while (confirmLength <= 7 || confirmLength >= 128) {
    alert("I'm sorry. Password length must be between 8-128 characters. Please try again.");
    var confirmLength = (prompt)("Please enter the numeric value required for your password's length, from 8-128 characters.");
  }

  // PROMPT: What kinds of characters should be included in this password? 
  var confirmUpper = confirm("Does the password require uppercase letters?");
  var confirmLower = confirm("Does the password require lowercase letters?");    
  var confirmNumbers= confirm("Does the password require numbers?");
  var confirmSymbols = confirm("Does the password require symbols?");


    //Error message and for loop and repeating prompts if at least one criteria is not selected.
    while(confirmUpper === false && confirmLower === false && confirmNumbers === false && confirmSymbols === false) {
      alert("Please choose at least one criteria for your password and try again");
      confirmUpper = confirm("Does the password require uppercase letters?");
      confirmLower = confirm("Does the password require lowercase letters?");    
      confirmNumbers= confirm("Does the password require numbers?");
      confirmSymbols = confirm("Does the password require symbols?");
    }
  

  
  // Now, let's make this password.
   if (confirmUpper && confirmLower && confirmNumbers && confirmSymbols) {
    userSelect = upperCase.concat(lowerCase,numbers,symbols);
  }
   
   else if (confirmUpper && confirmLower && confirmNumbers) {
   userSelect = upperCase.concat(lowerCase,numbers);
  }

  else if (confirmUpper && confirmLower && confirmSymbols) {
    userSelect = upperCase.concat(lowerCase,symbols);
  }

  else if (confirmUpper && confirmLower) {
    userSelect = upperCase.concat(lowerCase);
  }

  else if (confirmUpper && confirmNumbers && confirmSymbols) {
    userSelect = upperCase.concat(numbers,symbols);
  }
  else if (confirmUpper && confirmLower && confirmNumbers) {
    userSelect = upperCase.concat(lowerCase,numbers);
  };

  var password = [];

  for (var i = 0; i < confirmLength; i++); {
    var Selections = userSelect[Math.floor(Math.random() * userSelect.length)];
    password.push(Selections)
  }

  return password.join("");

}

// Add event listener to generate button
var generateBtn = document.querySelector("#generate")

generateBtn.addEventListener("click", writePassword);
// Write password to the #password input
function writePassword() {
var password = generatePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;

}

}


    

