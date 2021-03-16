// Assignment Code
var generateBtn = document.querySelector("#generate");


var lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; 

var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

var specialCharacters =   ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];

var passwordLength;

var needUpper;

var needLower;

var needSpecial;

var needNumber;




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function getCriteria() {
  passwordLength = window.prompt("Please enter a number bewtween 8 and 128 for how long you would like the password to be.");

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert ("The password must be between 8 and 128 characters!")

  } else {
   needUpper = confirm("Does the password need uppercase characters?");
   needLower = confirm("Does the password need lowercase characters?");
   needSpecial = confirm("Does the password need special characters?");
   needNumber = confirm("Does the password need numbers?");

}

function generatePassword() {}
 


  
  
  

} ;

  
