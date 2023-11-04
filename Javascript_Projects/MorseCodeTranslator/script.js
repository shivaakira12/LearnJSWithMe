

function morseConverstion(){
    const morseCode = {
        'A': '.-',
        'B': '-...',
        'C': '-.-.',
        'D': '-..',
        'E': '.',
        'F': '..-.',
        'G': '--.',
        'H': '....',
        'I': '..',
        'J': '.---',
        'K': '-.-',
        'L': '.-..',
        'M': '--',
        'N': '-.',
        'O': '---',
        'P': '.--.',
        'Q': '--.-',
        'R': '.-.',
        'S': '...',
        'T': '-',
        'U': '..-',
        'V': '...-',
        'W': '.--',
        'X': '-..-',
        'Y': '-.--',
        'Z': '--..',
        '0': '-----',
        '1': '.----',
        '2': '..---',
        '3': '...--',
        '4': '....-',
        '5': '.....',
        '6': '-....',
        '7': '--...',
        '8': '---..',
        '9': '----.'
    };
    let latinText=document.getElementById('latinText').value. toUpperCase().split("");
    // let arr1=latinText.split("");

    let arr2=latinText.map(x=>{
        console.log(x);
        if(morseCode[x]){
            return morseCode[x]
        }
        else{
            return x;
        }
    })
    let code=arr2.join(" ");
    document.getElementById("morseText").innerHTML=code;

}
// function copyMorseCode(){
//     let copyBtn=document.getElementById('copyBtn');
//     copyBtn.addEventListener('click',function(){
//         setTimeout(() => {
//             copyBtn.innerHTML='copy'
//         }, 2000);
//     })
   
// }