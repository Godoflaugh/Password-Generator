// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// This creates the variable that holds true or false for the answer to which criteria is requested
function criteriaAnswer() {

  const pwLength = Number(window.prompt("Please select a password length between 8-128."))
  if (!pwLength) {
    return;
  } else {
    return pwLength.toString()
  }
  Console.log(pwLength.toString())


  // check for uppercase
  let confirmUpper = confirm("Do you want Uppercase letters?")
  if (confirmUpper) {
    alert("Ok")
    // var upperCase = confirmAnswer()
  } else {
    alert("No Uppercase will be included")
  }
  // check for lowercase
  let confirmLower = confirm("Do you want Lowercase letters?")
  if (confirmUpper) {
    alert("Lowercase will be added to password.")
  } else {
    alert("Lowercase will be omitted.")
  }
  // check for number
  let confirmNumber = confirm("Do you want numbers included?")
  if (confirmNumber) {
    alert("Numbers will be added!")
  } else {
    alert("Numbers will be omitted.")
  }
  // check for symbols
  let confirmSymbols = confirm("Do you want special symbols included?")
  if (confirmSymbols) {
    alert("Symbols will be added!")
  } else {
    alert("Symbols will be omitted.")
  }



}


// This is output for the password
function generatePassword() {
  console.log("You clicked the button")
  criteriaAnswer()

  // Need a for loop to go through element of password length then apply random generator to each section of the array then that should be returned as the final password


  return "This is still not working"
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button,
// This is what checks for the click then will execute the writePassword function
generateBtn.addEventListener("click", writePassword);


// This code is for the random element generator for the selection

const randomElements = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbols
}

// getRandomUpper will get a random uppercase letter
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}
console.log(getRandomUpper())

// // This will get a random lower case
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}
console.log(getRandomLower())

// // this will get a random number
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}
console.log(getRandomNumber())

// // This will get a random Character
function getRandomSymbols() {
  const symbols = "~!@#$%^&*()_+={}';,<.>?"
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbols())