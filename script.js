var generateBtn = document.querySelector("#generate");

function generatePassword() {
  generateBtn.textContent = "Generating...";
  var features = [false, false, false, false]    //represents [lowercase, uppercase, numbers, special chars]
  var specials = [];
  var total = 0
  //various input sanitization
  while (true) {
    if (confirm("Would you like lowercase letters?")) {
      features[0] = true;
      total++;
    }
    if (confirm("Would you like uppercase letters?")) {
      features[1] = true;
      total++;
    }
    if (confirm("Would you like numbers?")) {
      features[2] = true;
      total++;
    }
    if (confirm("Would you like special characters?")) {
      features[3] = true;
      total++;
      var input = window.prompt("Because special characters are valid in some places and invalid in others, please provide the keyspace of available special characters to use:");
      specials = input.split("");
    }
    if (total == 0) {
      alert("Please choose at least one feature.");
    }
    else {
      break;
    }
  }
  var min = 0;
  var max = 0;
  while (true) {
    input = window.prompt("What is the minimum length of the password?");
    if (isNaN(input)) {
      alert("Please use numbers.");
    }
    else if (input < total) {
      alert("Please input a number larger than " + total + ", the number of features you request.");
    }
    else {
      min = parseInt(input);
      break;
    }
  }
  while (true) {
    input = window.prompt("What is the maximum length of the password?");
    if (isNaN(input)) {
      alert("Please use numbers.");
    }
    else if (input < min) {
      alert("Please input a number larger than " + min + ", the minimum length of the password.");
    }
    else {
      max = parseInt(input);
      break;
    }
  }
  var length = min + Math.floor(Math.random()*(max+1-min));    //determines length of password
  var chars = 0;
  var p = [];    //the password to build
  var temp = total;
  for (i in features) {    //determines how many of each feature to have
    if (features[i]) {
      temp--;
      if (temp == 0) {
        features[i] = length - chars;
      }
      else {
        features[i] = 1 + Math.floor(Math.random()*(length-temp-chars));
      }
      chars += features[i];
    }
    else {
      features[i] = 0;
    }
  }
  while (p.length < length) {    //choose a random feature and push one at a time
    temp = Math.floor(Math.random()*total);
    for (i in features) {
      if (features[i] > 0) {
        if (temp == 0) {
          if (i == 0) {    //lowercase
            p.push(String.fromCharCode(97 + Math.floor(Math.random()*26)));
          }
          else if (i == 1) {    //uppercase
            p.push(String.fromCharCode(65 + Math.floor(Math.random()*26)));
          }
          else if (i == 2) {    //number
            p.push(Math.floor(Math.random()*10));
          }
          else {    //special char
            p.push(specials[Math.floor(Math.random()*specials.length)]);
          }
          features[i]--;
          if (features[i] == 0) {
            total--;
          }
          break;
        }
        else {
          temp--;
        }
      }
    }
  }
  generateBtn.textContent = "Generate Password";
  return p.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

generateBtn.addEventListener("click", writePassword);
