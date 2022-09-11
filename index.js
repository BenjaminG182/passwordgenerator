const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let genPwEl = document.getElementById("genPw")
let firstPwEl = document.getElementById("firstPw")
let secondPwEl = document.getElementById("secondPw")

let passwordLength = 12; 

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar]
}

function getRandomPassword() {
    let randomPw = ""; 
    for (let i = 0; i < passwordLength; i++) {
        randomPw += getRandomCharacter()
    }
    return randomPw
}

const generatePasswordOne = getRandomPassword()
const generatePasswordTwo = getRandomPassword()

function generateButton() {
    firstPwEl.innerText = generatePasswordOne;
    secondPwEl.innerText = generatePasswordTwo;
}

