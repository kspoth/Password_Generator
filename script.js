var generateBtn = document.querySelector("#generate");


// variable arrays for the characters that will go in the generated password.//
var loCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spChar = "!()-.?[]_`~;:!@#$%^&*+=";

// function that will write the password.
function writePassword() {

  // After hitting the button "generate"
  var length = Number(
    prompt("Please choose a number from 8-128")
  )
    if (length < 8) {
      alert('Try Again, please choose a number between 8 and 128');
      return;
    };
    if (length > 128) {
      alert('Try Again, please choose a number between 8 and 128');
      return;
    }
  var lowerCase = confirm("Would you like lower case letters?");
  var upperCase = confirm("Would you like upper case letters?");
  var numbers = confirm("Do you want to include numbers?");
  var specialChars = confirm("Do you want to include special characters?");

 
  var characterSet = "";

  if (lowerCase === true) {
    characters += loCase;
  }

  if (upperCase === true) {
    characters += upCase;
  }

  if (numbers === true) {
    characters += num;
  }

  if (specialChars === true) {
    characters += spChar;
  }

  if (characters.length == 0) {
    alert("Please select at least one character set");
    return;
  }

  splitChar = characters.split("");
 
  
  function generatePassword() {
    var pass = "";
    for (var i = 0; i < length; i++) {
    pass += characterSet.charAt[(Math.floor(Math.random() * characterSet.length))];
  }
  return pass;
}

var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);