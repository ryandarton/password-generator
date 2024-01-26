// Get references to the #generate element
var generateBtn = document.querySelector('#generate');
// Get references to the settings card
var settingsCard = document.querySelector('#settings-card');
// Get references to the #generate-go element
var generateGoBtn = document.querySelector('#generate-go');

// Function for showing the settings card
function showSettingsCard() {
  settingsCard.style.display = 'block';
}
// Function for hiding the settings card
function hideSettingsCard() {
  settingsCard.style.display = 'none';
}

// Function for enforcing that the user selects at least one character type
function validateCharacterTypesSelection() {
  var uppercase = document.querySelector('#uppercase');
  var lowercase = document.querySelector('#lowercase');
  var numeric = document.querySelector('#numbers');
  var special = document.querySelector('#symbols');
  if (lowercase.checked || uppercase.checked || numeric.checked || special.checked) {
    return true;
  } else {
    return false;
  }
}

// If the user clicks the generateGoBtn, but has not selected at least one character type, then show an alert and do not proceed.
generateGoBtn.addEventListener('click', function (event) {
  if (!validateCharacterTypesSelection()) {
    alert('Please select at least one character type.');
    event.preventDefault();
  }
});

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
