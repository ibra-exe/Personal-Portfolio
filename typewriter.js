const typeTarget = document.getElementById("type-target");
const fullText = "Hi, I'm Ibrahim Shaheen, Ibra for short.  a Software Engineer by day and an Alien by... well, always – because who else but an extraterrestrial could understand this Earthly code mess?";
typeTarget.textContent = "|";
let charIndex = 0;

function typeChar() {
    if (charIndex < fullText.length) {
        typeTarget.textContent = fullText.slice(0, charIndex + 1) + "|";
        charIndex++;
        setTimeout(typeChar, 50);  // speed of typing, adjust as needed
    } else {
        toggleCursorBlinking();
    }
}

function toggleCursorBlinking() {
    if(typeTarget.textContent.endsWith("_")) {
        typeTarget.textContent = fullText;
    } else {
        typeTarget.textContent = fullText + "_";
    }
    setTimeout(toggleCursorBlinking, 500);
}

typeChar();
