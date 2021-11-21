// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()String capitalCaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  String lowerCaseLetters = "abcdefghijklmnopqrstuvwxyz";
  String specialCharacters = "!@#$";
  String numbers = "1234567890";
  String combinedChars = capitalCaseLetters + lowerCaseLetters + specialCharacters + numbers;
  Random random = new Random();
  char[] password = new char[length];

  password[0] = lowerCaseLetters.charAt(random.nextInt(lowerCaseLetters.length()));
  password[1] = capitalCaseLetters.charAt(random.nextInt(capitalCaseLetters.length()));
  password[2] = specialCharacters.charAt(random.nextInt(specialCharacters.length()));
  password[3] = numbers.charAt(random.nextInt(numbers.length()));

  for(int i = 4; i< length ; i++) {
     password[i] = combinedChars.charAt(random.nextInt(combinedChars.length()));
  }
  return password;
}
};
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);