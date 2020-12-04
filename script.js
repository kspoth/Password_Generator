// Assignment Code
var generateBtn = document.querySelector("#generate");

var lCase = "abcdefghijklmnopqrstuvwxyz"
var uCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = "0123456789"
var specialChar = ",./;'[]`-=<>?:{}~!@#$%^&*()_+"
var password = "";
var characters = "";

// Write password to the #password input
function writePassword() {
  var passwordText = document.querySelector("#password");

  var characters = "";

  var length = Number(
      prompt ("How long would you like your password to be? Select between 8-128 Characters")
      )
      function generate() {
        
     
      if (length <= 8) { 
          alert ("Please choose a number greater than or equal to 8.");
          return;
      };
      if (length >= 128) {
          alert ("Please choose a less than or equal to 128.");
          return;
      }
    }
      

  var lowerCase = confirm("Would you like lowercase numbers?");
  var upperCase = confirm("Would you like uppercase letters?");
  var numbers = confirm("Would you like numbers?");
  var special = confirm("Would you like special charcters?");
  var selectedCase = "";

    if (userlowerCase === true) {
     selectedCase = addCase(confirmlCase, selectedCase);
    }
    if (userupperCase === true) {
     selectedCase = addCase(confirmuCase, selectedCase);
    }
    if (usernumbers === true) {
     selectedCase = addCase(confirmnum, selectedCase);
    }
    if (userspecial === true) {
     selectedCase = addCase(confirmspecialChar, selectedCase);
    }

    for (var i = 0; i <= getLength; i++) {

     password = password + selectedCase.charAt(Math.floor((Math.random() * selectedCase.length) - 1));
    }
} 


  passwordText.value = password;



    // Add event listener to generate button
    generateBtn.addEventListener("click", writePassword);
    
    function addCase(type, selectedCase) {
        return selectedCase + type;
    }
    
    

}