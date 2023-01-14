let i = 0
let txt = "Portfolio website by [Kai Zaremba] loaded successfully..."
const speed = 50
const blinkSpeed = 500
let displayTxt = ""
let displayTxtHtml = ""
let displayLastChar = true

function typewriter() {
    if (i < txt.length) {
        displayTxt += txt.charAt(i)
        displayTxtHtml = displayTxt
        displayTxtHtml = displayTxtHtml.replace("[", "<span class=\"text-color-main\">")
        if (displayTxtHtml.includes("]"))
            {displayTxtHtml = displayTxtHtml.replace("]", "</span>")}
        else
            {displayTxtHtml += "</span>"}
        displayTxtHtml += "|"
        document.getElementById("introductionText").innerHTML = displayTxtHtml
        i++
        setTimeout(typewriter, speed)
    } else {
        if (displayLastChar)
        displayTxtHtml = displayTxtHtml.slice(0, -1)
        else
            displayTxtHtml += "|"
            
        displayLastChar = !displayLastChar
        document.getElementById("introductionText").innerHTML = displayTxtHtml
        setTimeout(typewriter, blinkSpeed)
    }
}

typewriter()