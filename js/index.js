const passwordBox = document.getElementById("password"),
pswGen = document.getElementById("pswGen"),
message = document.getElementById("message"),
messageText = document.getElementById("messageText"),
pswlenght = document.getElementById("pswlenght"),
copyContent = document.getElementById("copyContent"),
textCopy = document.getElementById("textCopy")


function randomPassword(lenght) {

    const char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let psw = ''

    for(let i = 0;i < lenght; i++){
        let r = Math.floor(char.length * Math.random())
        psw = psw + char[r]
    }

    return psw

}

function reportMsg(msgCode,msg){
    message.classList.add(msgCode)
    messageText.textContent = msg
}

function copyPsw(){
    textCopy.textContent = passwordBox.textContent
    textCopy.select()
    document.execCommand('copy')
    reportMsg("success","password copied")
}

function makePassword(){
    if(pswlenght.value === ""){
        reportMsg("error","Please fill in the input")
    }else{
        const newpsw = randomPassword(pswlenght.value)
        reportMsg("success","Password is generated!")
        passwordBox.textContent = newpsw
    }
}


pswGen.addEventListener("click", makePassword)
copyContent.addEventListener("click", copyPsw)