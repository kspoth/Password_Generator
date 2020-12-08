//Random Password JS code
var generateBtn = document.querySelector("#generate");


// variable arrays for the characters that will go in the generated password.
var loCase = "abcdefghijklmnopqrstuvwxyz";
var upCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var spChar = "!()-.?[]_`~;:!@#$%^&*+=";

// function that will write the password.
function writePassword() {

  // After hitting the button "generate password" button the prompt will ask a series of questions.
  var length = Number(
    prompt("Please choose a number from 8-128")
  )
    if (length < 8) {
      alert("Try Again, please choose a number higher than 8");
      return;
    };
    if (length > 128) {
      alert("Try Again, please choose a number lower than 128");
      return;
    }

//variables for questions
var lowerCase = confirm("Would you like lower case letters?");
var upperCase = confirm("Would you like upper case letters?");
var numbers = confirm("Would you like numbers?");
var specialChars = confirm("Would you like special characters?");

  //Runs through prompt questions and will give characters if selected by the user.
  var characters = "";

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
    alert("Error. Must select atleast one character set");
    return;
  }

  splitChar = characters.split("");
 
  //This function that reads the character string and generates the password based on length and user selections.
  function generatePassword() {
    var pass = "";
    for (var i = 0; i < length; i++) {
    pass += splitChar[(Math.floor(Math.random() * splitChar.length))];
  }
  return pass;
}

var password = generatePassword();


  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//Event listener to generate button
generateBtn.addEventListener("click", writePassword);