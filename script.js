// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Defines the "generatePassword" function

function generatePassword() {

  // Arrays for different sets of characters

  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var specialChars = ["~","!","#","$","%","^","&","*","(",")","_","-","+","=","`","<",",",">",".","?","/","{","}","[","]","|"];

  // -----------------------------------------------------------------------------------------------------------------------------------------------------------------

  // Creates "myPassword" variable (blank for now)

  var myPassword = ""

  // Prompts user to choose length of password; re-prompts them if they choose too few or too many characters

  var pwlength = parseInt(prompt('How many chars?'));

  if (pwlength < 8 || pwlength > 128 || isNaN(pwlength)) {
    alert("Please choose a number between 8 and 128.");
    pwlength = parseInt(prompt('How many chars?'));
  }

  // Prompts user to decide whether or not to include different character types

  var pwLowercase = confirm("Include lowercase characters?");
  var pwUppercase = confirm("Include uppercase characters?");
  var pwNumeric = confirm("Include numbers?");
  var pwSpecial = confirm("Include special characters?");

  // Makes user go back if they don't select any of the 4 character types

  if (pwLowercase === false && pwUppercase === false && pwNumeric === false && pwSpecial === false) {
    alert("Please choose at least character type.");
    return generatePassword();
  }

  // For-loop to choose random lowercase characters to add to the password
  
  if (pwLowercase === true) {
    for (var i = 0; i < pwlength; i++) {
      var randomIndex = Math.floor(Math.random() * lowercaseChars.length);
      var randomLowercase = lowercaseChars[randomIndex];
      myPassword = myPassword + randomLowercase;
    }
  }

  // For-loop to choose random uppercase characters to add to the password
  
  if (pwUppercase === true) {
    for (var i = 0; i < pwlength; i++) {
      var randomIndex = Math.floor(Math.random() * uppercaseChars.length);
      var randomUppercase = uppercaseChars[randomIndex];
      myPassword = myPassword + randomUppercase;
    }
  }

  // For-loop to choose random numeric characters to add to the password
  
  if (pwNumeric === true) {
    for (var i = 0; i < pwlength; i++) {
      var randomIndex = Math.floor(Math.random() * numericChars.length);
      var randomNumeric = numericChars[randomIndex];
      myPassword = myPassword + randomNumeric;
    }
  }

  // For-loop to choose random special characters to add to the password
  if (pwNumeric === true) {
    for (var i = 0; i < pwlength; i++) {
      var randomIndex = Math.floor(Math.random() * specialChars.length);
      var randomSpecial = specialChars[randomIndex];
      myPassword = myPassword + randomSpecial;
    }
  }
// Returns value of "myPassword" so it can be fed into "writePassword" function

  return myPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
