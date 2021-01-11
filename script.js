// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

function generatePassword() {
  var specialChars = ["~","!","#","$","%","^","&","*","(",")","_","-","+","=","`","<",",",">",".","?","/","{","}","[","]","|"];

  var lowercaseChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  var myPassword = ""

  var pwlength = parseInt(prompt('How many chars?'));

  if (pwlength < 8 || pwlength > 128 || isNaN(pwlength)) {
    alert("Please choose a number between 8 and 128.");
    pwlength = parseInt(prompt('How many chars?'));
  }

  var pwLowercase = confirm("Include lowercase characters?");

  if (pwLowercase === true) {
    myPassword
  }

  var pwUppercase = confirm("Include uppercase characters?");
  var pwNumeric = confirm("Include numbers?");
  var pwSpecial = confirm("Include special characters?");

  if (pwLowercase === false && pwUppercase === false && pwNumeric === false && pwSpecial === false) {
    alert("Please choose at least character type.");
    return generatePassword();
  }

  for (var i = 0; i < pwlength; i++) {
    var randomIndex = Math.floor(Math.random() * specialChars.length);
    var randomChar = specialChars[randomIndex];
    myPassword = myPassword + randomChar;
  }

  return myPassword;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
