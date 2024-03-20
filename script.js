const passFld = document.querySelector(".container input");
const gntBtn = document.querySelector(".container button");
const gntBtnImg = document.querySelector(".display img");


const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerCase = "abcdefghijklmnopqrstuvwxyz"
const number = "0123456789"
const symbol = "~!@#$%^&*()_-+={[}]|\:;<,>.?/"
const length = 12;

function generatePassword() {
    let password = upperCase[Math.floor(Math.random() * upperCase.length)];

    const allChars = upperCase + lowerCase + number + symbol;

    for (let i = 0; i < length - 1; i++) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passFld.value = password;
}


async function writeClipboardText() {
    try {
        passFld.select();
        await navigator.clipboard.writeText(passFld.value);
    } catch (error) {
        passFld.select();
        console.error(error.message);
    }
}

gntBtn.addEventListener("click", generatePassword);
gntBtnImg.addEventListener("click", writeClipboardText);

