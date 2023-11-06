// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
// create function for generatePassword
// Need to ask client for password criteria
// 1. Lenth of password
//  2. Include special characters
// 3. Include numbers

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {
  console.log("Hey it worked!!");
  // Password length
  var passwordLength = prompt(
    "How long should the password be? (8-128 characters)"
  );
  passwordLength = parseInt(passwordLength, 10);
  while (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert("Password length must be between 8 and 128 characters.");
    passwordLength = parseInt(
      prompt("How long should the password be? (8-128 characters)"),
      10
    );
  }

  // Prompt for wanted character types
  var includeSpecialCharacters = confirm(
    "Include special characters?"
  );
  var includeNumbers = confirm("Include numbers?");
  var includeLowercase = confirm(
    "Include lowercase characters?"
  );
  var includeUppercase = confirm(
    "Include uppercase characters?"
  );

  // Confirm inputs
  if (
    !includeSpecialCharacters &&
    !includeNumbers &&
    !includeLowercase &&
    !includeUppercase
  ) {
    alert("You must select at least one character type.");
    return generatePassword();
  }

  // Create character set variables
  var specialCharacters = "!@#$%^&*()_+-=[]{}|;:'\",.<>/?";
  var numbers = "0123456789";
  var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
  var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Build the character set based on user's choices
  var characterSet = "";
  if (includeSpecialCharacters) characterSet += specialCharacters;
  if (includeNumbers) characterSet += numbers;
  if (includeLowercase) characterSet += lowercaseLetters;
  if (includeUppercase) characterSet += uppercaseLetters;

  // Generate the password
  var password = "";
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
