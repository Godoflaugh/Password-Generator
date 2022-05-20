// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
// this is the definition of the variables
let length, upper, lower, symbol, number


// This creates the variable that holds true or false for the answer to which criteria is requested
function criteriaAnswer() {

  const pwLength = window.prompt("Please select a password length between 8-128.")
  if (!pwLength) {
    return;
  }

  console.log(pwLength)

  // This will check the number to see if it meets the criteria 
  // This is the assignment of the variable

  const rawLength = parseInt(pwLength)

  if (isNaN(rawLength)) {
    alert("Not a number")
    return
  } else if (rawLength < 8 || rawLength > 128) {
    alert("Please choose a number between 8 and 128!")
    return
  } else {
    length = rawLength
  }




  // check for uppercase
  upper = confirm("Do you want Uppercase letters?")
  if (upper) {
    alert("Uppcase letter will be added to password")
    // var upperCase = confirmAnswer()
  } else {
    alert("No Uppercase will be included")
  }
  // check for lowercase
  lower = confirm("Do you want Lowercase letters?")
  if (lower) {
    alert("Lowercase will be added to password.")
  } else {
    alert("Lowercase will be omitted.")
  }
  // check for number
  number = confirm("Do you want numbers included?")
  if (number) {
    alert("Numbers will be added!")
  } else {
    alert("Numbers will be omitted.")
  }
  // check for symbols
  symbol = confirm("Do you want special symbols included?")
  if (symbol) {
    alert("Symbols will be added!")
  } else {
    alert("Symbols will be omitted.")
  }



}


// This is output for the password
function generatePassword() {
  console.log("You clicked the button")
  criteriaAnswer()

  // 1. Create a loop that will check if the user has selected to include a criteria, save that state to include in the password generation. If not included then state can be discarded.
  let randomFunctions = []

  if (upper) {
    randomFunctions.push(getRandomUpper)
  }

  if (lower) {
    randomFunctions.push(getRandomLower)
  }

  if (number) {
    randomFunctions.push(getRandomNumber)
  }

  if (symbol) {
    randomFunctions.push(getRandomSymbol)
  }


  let password = ""
  for (let p = 0; p < length; p++) {
    // This will access a random element in the randomFunctions array
    let generator = randomFunctions[Math.floor(Math.random() * randomFunctions.length)]
    // Adding the random elements to the string
    password = password + generator()
  }





  // Need a for loop to go through element of password length then apply random generator to each section of the array then that should be returned as the final password


  return password
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
  symbol: getRandomSymbol
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
function getRandomSymbol() {
  const symbols = "~!@#$%^&*()_+={}';,<.>?"
  return symbols[Math.floor(Math.random() * symbols.length)]
}
console.log(getRandomSymbol())