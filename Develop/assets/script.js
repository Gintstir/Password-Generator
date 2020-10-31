// Assignment code here
window.confirm("Welcome to the Password Generator.  If you're ready to create a password select 'Ok' and then press the red button below to continue.  Follow the prompts to declare the length of your password and which characters the generator will use.  Thanks for using this generator and if you're satisfied with the password, remember to copy and paste!");


var promptLength = function () {
  return window.prompt("Enter number of characters desired.  Password length must be between 8-128 characters:");
}

var promptChars = function () {
  var options = [false, false, false, false];
  lowerCase = window.confirm("Do you wish to include lower case letters (a-z)?");
  upperCase = window.confirm("Do you wish to include UPPERCASE letters (A-Z)?");
  numbers = window.confirm("Do you wish to include numbers (0-9)?");
  specChars = window.confirm("Do you wish to include special characters (!@#$%^& etc.)?");
  return options;
}


var createPW = function () {
  
  var passLength = 0;
  passLength = promptLength();
  // check that user has entered valid password length, if not, prompt until they do.  
  while ((passLength < 8 || passLength > 128) || !parseInt(passLength)) 
  {
    window.alert("Invalid Length! A value between 8 and 128 is required! Please try again."); // Notify of problem
    passLength = promptLength(); // prompt again
  }

  // Ask for character options, indecies: 0 = lowercase, 1 = uppercase, 2 = numeric, 3 = special
  var options = promptChars();
    while (!(lowerCase || upperCase || numbers || specChars)) // Verify user selects at least one option, if not, prompt until they do.
    {
      window.alert("You have not selected any character sets, please try again and choose at least one option.  Thank you!"); // Notify of problem
      // prompt again
      options = promptChars();
    }

  // ACCEPTABLE CHARACTER FOR PASSWORD: a-z, A_Z, 0-9,  !"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
//Create usable array to reference characters
  //using method String.fromCharCode to define available characters
  //string.fromCharCode:  97-122 = abcdefghijklmnopqrstuvwxyz
  var useableChars = [];
  if (lowerCase) 
  {
    for (var i = 97; i <= 122; i++)
      useableChars.push(String.fromCharCode(i));
  }
  //string.fromCharCode: 65-90 = ABCDEFGHIJKLMNOPQRSTUVWXYZ
  if (upperCase) // Add uppercase chars if selected
  {
    for (var i = 65; i <= 90; i++)
      useableChars.push(String.fromCharCode(i));
  }
  //string.fromCharCode: 48-57 = 0123456789
  if (numbers) // Add numeric chars if selected
  {
    for (var i = 48; i <= 57; i++)
      useableChars.push(String.fromCharCode(i));
  }
  //string.fromCharCode: 32-47 =  !"#$%&'()*+,-./
  //   "       "       : 58-64 = :;<=>?@
  //   "       "       : 91-96 = [\]^_`
  //   "       "       : 123-126 = {|}~
  if (specChars) 
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

  

  // Generate password and account for null/""  password
  var password = "";
  // create 'for' loop that executes passLength num of times 
  for (var i = 0; i < passLength; i++)
  // Add selected useableChars to password use math.random
    password += useableChars[Math.ceil(Math.random() * useableChars.length) - 1]; 
  return password;
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = createPW();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
