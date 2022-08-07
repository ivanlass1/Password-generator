const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let numCh = 15
function changeNum() {
            let NumOfCh = document.getElementById("num-of-Ch").value
            numCh = NumOfCh
}

function genPass() {
    let passEl1 = document.getElementById("pass-el1")
    let passEl2 = document.getElementById("pass-el2")
    let pass1 = ""
    let pass2 = ""

    for (let i = 0; i < numCh; i++) {
        let randomCh = Math.floor(Math.random() * characters.length)
        characters[randomCh]
        pass1 += characters[randomCh]
    }
    for (let i = 0; i < numCh; i++) {
        let randomCh = Math.floor(Math.random() * characters.length)
        characters[randomCh]
        pass2 += characters[randomCh]
    }
   passEl1.textContent = pass1
   passEl2.textContent = pass2
}





