// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {

// Arrays for different sets of characters

  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var uppercaseChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  var numericChars = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

  var specialChars = ["~","!","#","$","%","^","&","*","(",")","_","-","+","=","`","<",",",">",".","?","/","{","}","[","]","|"];

// -----------------------------------------------------------------------------------------------------------------------------------------------------------------

  var myPassword = ""

  var pwlength = parseInt(prompt('How many chars?'));

  if (pwlength < 8 || pwlength > 128 || isNaN(pwlength)) {
    alert("Please choose a number between 8 and 128.");
    pwlength = parseInt(prompt('How many chars?'));
  }

  var pwLowercase = confirm("Include lowercase characters?");

  // if (pwLowercase === true) {
  //   myPassword = myPassword + randomLowercase
  // }

  var pwUppercase = confirm("Include uppercase characters?");
  var pwNumeric = confirm("Include numbers?");
  var pwSpecial = confirm("Include special characters?");

  if (pwLowercase === false && pwUppercase === false && pwNumeric === false && pwSpecial === false) {
    alert("Please choose at least character type.");
    return generatePassword();
  }

  for (var i = 0; i < pwlength; i++) {
    var randomIndex = Math.floor(Math.random() * specialChars.length);
    var randomSpecial = specialChars[randomIndex];
    myPassword = myPassword + randomSpecial;
  }

  // for (var i = 0; i < pwlength; i++) {
  //   var randomIndex = Math.floor(Math.random() * lowercaseChar.length);
  //   var randomLowercase = lowercaseChars[randomIndex];
  //   myPassword = myPassword + randomLowercase;
  // }

  return myPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
