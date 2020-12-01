// Assignment Code
var generateBtn = document.querySelector("#generate");

var lCase = "abcdefghijklmnopqrstuvwxyz"
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var specialChar = ",./;'[]`-=<>?:{}~!@#$%^&*()_+"


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);