// DOM content
const genBtn = document.getElementById('btnGen')
const genClear = document.getElementById('btnClear')

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
    const len = document.getElementById('lenght').value
    const passText = document.getElementById('password')
    let requestPass = genPass(len)
    console.log(passText);
    console.log(requestPass);
    passText.value = requestPass

}

function clearPassword(e){
    e.preventDefault()
    const passText = document.getElementById('password')
    passText.value = ''
}


// Event functions
genBtn.addEventListener('click', pushPassword)
genClear.addEventListener('click', clearPassword)