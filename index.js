const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
                    "P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
                    "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
                    "t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6",
                     "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")",
                     "_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const alpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O",
"P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d",
"e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z"]

const nums = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const sym = ["~","`","!","@","#","$","%","^","&","*","(",")",
"_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

const results = document.querySelectorAll(".result")

let length = 15

function generate_pass() {
    for (let n = 0; n < results.length; n++) {
        let password = ""
        for (let i = 0; i < length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)]
        }
        results[n].textContent = password
    }
}

for (let i = 0; i < results.length; i++) {
    results[i].addEventListener("click", function(){
        const copyText = results[i]

        /* Select the text field */
        copyText.select()
        copyText.setSelectionRange(0, 99999) /* For mobile devices */

        /* Copy the text inside the text field */
        navigator.clipboard.writeText(copyText.value)

        alert("Copied the text: " + copyText.value)
    })
}