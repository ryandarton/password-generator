// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Get references to the settings card
var settingsCard = document.querySelector('#settings-card');
// Function for showing the settings card
function showSettingsCard() {
  settingsCard.style.display = 'block';
}
// Function for hiding the settings card
function hideSettingsCard() {
  settingsCard.style.display = 'none';
}

// When button is clicked,
//   prompted for the length of the password
//   -user chooses between 8 - 128 characters
//   asked for character types to include in the password
//   - user confirms whether or not to include lowercase, uppercase, numeric, and / or special characters - input should be validated and at least one character type should be selected

// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria

// Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;
//   // Write the password to the #password textarea.
// }

//generateBtn.addEventListener('click', writePassword);
