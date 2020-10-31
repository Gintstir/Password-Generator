// Assignment code here
window.confirm("Welcome to the Password Generator.  If you're ready to create a password select 'Ok' and then press the red button below to continue.  Follow the prompts to declare the length of your password and which characters the generator will use.  Thanks for using this generator and if you're satisfied with the password, remember to copy and paste!");


var promptLength = function () {
  return window.prompt("Enter number of characters desired.  Password length must be between 8-128 characters:");
}

var promptChars = function () {
  var options = [false, false, false, false];
  lowerCase = window.confirm("Use lowercase characters? (a-z):");
  upperCase = window.confirm("Use uppercase characters? (A-Z):");
  numbers = window.confirm("Use numeric characters? (0-9):");
  specChars = window.confirm("Use special characters? ('!', '[', '=', etc.):");
  return options;
}


var generatePassword = function () {
  // Get password length
  var passLength = 0;
  passLength = promptLength(); // Ask first time
  while ((passLength < 8 || passLength > 128) || !parseInt(passLength)) // Verify user enters valid option, if not, prompt until they do.
  {
    window.alert("Invalid Length (8-128 req.)"); // Notify of problem
    passLength = promptLength(); // Ask again
  }

  // Ask for character options, indecies: 0 = lowercase, 1 = uppercase, 2 = numeric, 3 = special
  var options = promptChars();
  while (!(lowerCase || upperCase || numbers || specChars)) // Verify user selects at least one option, if not, prompt until they do.
  {
    window.alert("You must select 'Ok' for at least one option."); // Notify of problem
    // Ask again
    options = promptChars();
  }

  // ACCEPTABLE CHARACTER FOR PASSWORD: a-z, A_Z, 0-9,  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//Create usable array to reference characters
  //using method String.fromCharCode to define available characters
  var useableChars = [];
  if (lowerCase) // Add lowercase chars if selected
  {
    for (var i = 97; i <= 122; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (upperCase) // Add uppercase chars if selected
  {
    for (var i = 65; i <= 90; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (numbers) // Add numeric chars if selected
  {
    for (var i = 48; i <= 57; i++)
      useableChars.push(String.fromCharCode(i));
  }
  if (specChars) // Add special chars if selected
  {
    for (var i = 32; i <= 47; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 58; i <= 64; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 91; i <= 96; i++)
      useableChars.push(String.fromCharCode(i));
    for (var i = 123; i <= 126; i++)
      useableChars.push(String.fromCharCode(i));
  }

  

  // Generate password
  // Initialize empty password
  var password = "";
  // for loop that executes passLength num of times 
  for (var i = 0; i < passLength; i++)
  // Add random character from useableChars to password
    password += useableChars[Math.ceil(Math.random() * useableChars.length) - 1]; 
  return password;
}






  






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
