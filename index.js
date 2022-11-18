const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passLeft = document.getElementById("outputLeft")
let passRight = document.getElementById("outputRight")
passLeft.textContent = "*****"
passRight.textContent = "*****"
function generatePassword() {
    passLeft.textContent = ""
    passRight.textContent = ""
    for (let i = 0; i < 16; i++) {
    let l = Math.floor(Math.random() * characters.length) // calls random array cell 
    passLeft.textContent += characters[l]
    }
    for (let i = 0; i < 16; i++) {
    let l = Math.floor(Math.random() * characters.length) // calls random array cell 
    passRight.textContent += characters[l]
    } 
}