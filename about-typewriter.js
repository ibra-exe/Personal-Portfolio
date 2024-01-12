const aboutTypeTarget = document.getElementById("about-type-target");
const aboutFullText = "May 16th, 1993.\n\nIbrahim Shaheen aka Ibra\n\nSoftware Engineer | Technology Enthusiast\n\nInterested in:\n\nTechnology | AI | Automations | Digitalization\n\nBased in NEOM";
let aboutCharIndex = 0;

function aboutTypeChar() {
    if (aboutCharIndex < aboutFullText.length) {
        aboutTypeTarget.textContent = aboutFullText.slice(0, aboutCharIndex + 1) + "|";
        aboutCharIndex++;
        setTimeout(aboutTypeChar, 50);  // speed of typing, adjust as needed
    } else {
        // Remove the vertical line cursor at the end and start blinking underscore
        aboutTypeTarget.textContent = aboutFullText; // Remove the "|" at the end
        toggleCursorBlinking();
    }
}

function toggleCursorBlinking() {
    if (aboutTypeTarget.textContent.endsWith("_")) {
        aboutTypeTarget.textContent = aboutFullText;
    } else {
        aboutTypeTarget.textContent = aboutFullText + "_";
    }
    setTimeout(toggleCursorBlinking, 500);
}

window.onload = () => {
    document.getElementById('profile-pic').style.opacity = 1;
};

// Start typing after the image has faded in
setTimeout(aboutTypeChar, 500); // Adjust the delay as needed
