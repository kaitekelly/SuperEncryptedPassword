let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
let letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
let charArr  = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "~"]
let capsArr =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

// Assignment Code
let generateBtn = document.querySelector("#generate");

// Prompt to ask How long would you like your password to be
let charLeng = prompt("How long would you like your password? Password must be between 8 and 128 characters.");

//Prompt to ask character types - lowercase
let charLwr = prompt("Would you like to use lowercase letters?")

//Prompt to ask character types - upperrcase
let capsArr = prompt("Would you like to use capital letters?")

//Prompt to ask character types - numeric


//Prompt to ask character types - special characters


//Generates random number
for (let i=0; i < 10; i++) {
  let numArr = Math.floor(Math.random() * 10)  +1;
}

//Generates random letter


//Generates random character



// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


let answer = confirm("Do you like apples?");
console.log(answer)