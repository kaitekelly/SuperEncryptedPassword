// Assignment Code
let generateBtn = document.querySelector("#generate");


let generatePassword = function () {
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  let pswLeng;
  let askPwd = true;
  while (askPwd) {
    pswLeng = prompt("How long would you like your password? Password must be between 8 and 128 characters.");
    if (parseInt(pswLeng) < 128 && parseInt(pswLeng) > 8) {
      askPwd = false;
    } 
  }

  //WHEN prompted for character types to include in the password - lowercase
  let charLwrConfirm = confirm("Would you like to use lowercase letters?"); 

  //WHEN prompted for character types to include in the password - upperrcase
  let capsConfirm = confirm("Would you like to use capital letters?"); 
    
  //WHEN prompted for character types to include in the password - numeric - Go back and change the confirm numArr
  let numConfirm = confirm("Would you like to use numbers?"); 
    
  //WHEN prompted for character types to include in the password - special characters
  let charConfirm = confirm("Would you like to use special characters?"); 
    

  //Charaacter type Arrays - Need to confirm if these should be placed before confirm prompts
  let numArr = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
  let letterArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  let charArr = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", "/", ":", ";", "<", "=", ">", "?", "@", "~"]
  let capsArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  let baseArr = []
  // let combinedArr = numArr.concat(letterArr).concat(charArr).concat(capsArr)

  // THEN my input should be validated and at least one character type should be selected
  // WHEN all prompts are answered

  // Then check if user selects that character type to include in password.

  if (charLwrConfirm === true) {
    baseArr = baseArr.concat(letterArr);
  }
  if (capsConfirm === true) {
    baseArr = baseArr.concat(capsArr);
  }
  if (numConfirm === true) {
    baseArr = baseArr.concat(numArr);
  }
  if (charConfirm === true) {
    baseArr = baseArr.concat(charArr);
  }


  //Generates random number - this block needs to be fixed - use baseArr variable for math floor
  for (let i = 0; i < 10; i++) {
    let randomNum = Math.floor(Math.random() * whatever baseArray's length is minus 1 );
    console.log(randomNum)
  }



  // THEN a password is generated that matches the selected criteria
  // WHEN the password is generated
  // THEN the password is either displayed in an alert or written to the page


}


// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);
