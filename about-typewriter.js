const aboutTypeTarget = document.getElementById("about-type-target");
const aboutFullText = "May 16th, 1993.\nIbrahim Shaheen aka Ibra\nSoftware Engineer | Technology Enthusiast\nInterested in:\nTechnology | AI | Automations | Digitalization\nBased in NEOM";
let aboutCharIndex = 0;

function aboutTypeChar() {
    if (aboutCharIndex < aboutFullText.length) {
        aboutTypeTarget.textContent = aboutFullText.slice(0, aboutCharIndex + 1) + "|";
        aboutCharIndex++;
        setTimeout(aboutTypeChar, 50);  // speed of typing, adjust as needed
    }
}

// Start typing after the image has faded in
setTimeout(aboutTypeChar, 1000); // Adjust the delay as needed
