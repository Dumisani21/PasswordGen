// DOM content
const genBtn = document.getElementById('btnGen')
const genClear = document.getElementById('btnClear')
const len = document.getElementById('lenght')
const passText = document.getElementById('password')

// functions

function genPass(len){
    let allChars = []
    for(let i = 33; i<123; i++){
        allChars.push(String.fromCharCode(i))
    }
    
    let password_chars = ''
    for(let i = 0; i < len;i++){

        let randomIndex = Math.floor(Math.random() * (allChars.length - 1))
        let randomChar = allChars[randomIndex]

        password_chars += randomChar
    }

    return password_chars
}


function pushPassword(e){
    e.preventDefault()
    let requestPass = genPass(len.value)
    console.log(passText.value);
    console.log(requestPass);
    passText.value = requestPass

}

function clearInputs(e){
    e.preventDefault()
    passText.value = ''
    len.value = ''
}


// Event functions
genBtn.addEventListener('click', pushPassword)
genClear.addEventListener('click', clearInputs)
