const typeTarget = document.getElementById("type-target");
const fullText = "Hi, I'm Ibrahim Shaheen, Ibra for short. A software engineer by day and an alien by... well, always – because who else but an extraterrestrial could understand this Earthly code mess?";
let charIndex = 0;
let typing = true;

function typeChar() {
    if (charIndex < fullText.length) {
        typeTarget.textContent = fullText.slice(0, charIndex + 1) + "|";
        charIndex++;
        setTimeout(typeChar, 50); // Adjust the speed of typing
    } else if (typing) {
        setTimeout(deleteChar, 1000); // Wait a bit before starting to delete
    }
}

function deleteChar() {
    if (charIndex > 0) {
        typeTarget.textContent = fullText.slice(0, charIndex - 1) + "|";
        charIndex--;
        setTimeout(deleteChar, 50); // Adjust the speed of deleting
    } else if (!typing) {
        setTimeout(typeChar, 1000); // Wait a bit before starting to type again
    }
}

// Function to start the typing effect
function startTyping() {
    typing = true;
    charIndex = 0;
    typeChar();
}

// Function to start the deleting effect
function startDeleting() {
    typing = false;
    charIndex = fullText.length;
    deleteChar();
}

// Start typing when the script loads
startTyping();