// Get reference to the #generate element
var generateBtn = document.querySelector('#generate');
// Get reference to the settings card
var settingsCard = document.querySelector('#settings-card');
// Get reference to the #generate-go element
var generateGoBtn = document.querySelector('#generate-go');
// Get reference to the textarea #password element
var passwordText = document.querySelector('#password');

// Function for showing the settings card
function showSettingsCard() {
  settingsCard.style.display = 'block';
}
// Function for hiding the settings card
function hideSettingsCard() {
  settingsCard.style.display = 'none';
}

// Function that enforces that the user selects at least one character type
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

// Function that generates a random password based on the user's selections from the settings card
function generatePassword() {
  // Define the password variable
  var password = '';
  // Get the user's selected password length
  var passwordLength = document.querySelector('#length').value;
  // Get the user's selected character types
  var uppercase = document.querySelector('#uppercase').checked;
  var lowercase = document.querySelector('#lowercase').checked;
  var numeric = document.querySelector('#numbers').checked;
  var special = document.querySelector('#symbols').checked;

  // Define the character sets based on the selected types
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
  var numericChars = '0123456789';
  var specialChars = `!"#$%&'()*+,-./:;<=>?@[\]^_\`{|}~`;

  // Define the final character set based on the selected types
  var finalChars = '';
  if (uppercase) finalChars += uppercaseChars;
  if (lowercase) finalChars += lowercaseChars;
  if (numeric) finalChars += numericChars;
  if (special) finalChars += specialChars;

  //Generate Password
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * finalChars.length);
    password += finalChars[randomIndex];
  }

  return password;
}

// If the user clicks the generateGoBtn, but has not selected at least one character type, then show an alert and do not proceed, otherwise run the generatePassword() function.
generateGoBtn.addEventListener('click', function () {
  if (validateCharacterTypesSelection()) {
    hideSettingsCard();
    passwordText.value = '';
    var password = generatePassword(); // Assign the generated password to a variable
    passwordText.value = password; // Assign the password to the value property
  } else {
    alert('Please select at least one character type.');
  }
});
