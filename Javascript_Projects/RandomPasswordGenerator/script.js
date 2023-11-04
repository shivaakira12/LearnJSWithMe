const inputField=document.getElementById('inputPassword')
const length=10;
const upperCaseLetters="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCaseLetters="abcdefghijklmnopqrstuvwxyz"
const numbers="0123456789"
const symbols="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

const wholePassword=upperCaseLetters+lowerCaseLetters+numbers+symbols;


function generatePassword(){
    let emptyPassword="";
    emptyPassword+=upperCaseLetters[Math.floor(Math.random()*upperCaseLetters.length)]
    emptyPassword+=lowerCaseLetters[Math.floor(Math.random()*lowerCaseLetters.length)]
    emptyPassword+=numbers[Math.floor(Math.random()*numbers.length)]
    emptyPassword+=symbols[Math.floor(Math.random()*symbols.length)]
    while(length>emptyPassword.length){
        emptyPassword+=wholePassword[Math.floor(Math.random()*wholePassword.length)]
    }
    inputField.value=emptyPassword;
}
function copyPassword(){
    inputField.select();
    document.execCommand("copy")
    alert("Copied")
}