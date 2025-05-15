/**
 * Reusable typewriter effect
 * @param {string} targetId - The ID of the target element
 * @param {string} text - The text to type
 * @param {number} speed - Typing speed in milliseconds
 */
function initTypewriter(targetId, text, speed = 50) {
    const typeTarget = document.getElementById(targetId);
    if (!typeTarget) return;
    
    typeTarget.textContent = "|";
    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            typeTarget.textContent = text.slice(0, charIndex + 1) + "|";
            charIndex++;
            setTimeout(typeChar, speed);
        } else {
            typeTarget.textContent = text;
            toggleCursorBlinking();
        }
    }

    function toggleCursorBlinking() {
        if (typeTarget.textContent.endsWith("_")) {
            typeTarget.textContent = text;
        } else {
            typeTarget.textContent = text + "_";
        }
        setTimeout(toggleCursorBlinking, 500);
    }

    typeChar();
}

// Define text constants
const HOME_TEXT = "Hi, I'm Ibrahim Shaheen, Ibra for short. A Software Engineer by day and an Alien by... well, always – because who else but an extraterrestrial could understand this Earthly code mess?";
const ABOUT_TEXT = "May 16th, 1993.\n\nIbrahim Shaheen aka Ibra\n\nSoftware Engineer | Technology Enthusiast\n\nInterested in:\n\nTechnology || AI || Automations || Digitalization\n\nPeople Technology Senior Specialist, Based in NEOM";

// Auto-initialize based on page
document.addEventListener('DOMContentLoaded', function() {
    // For home page
    if (document.getElementById('type-target')) {
        initTypewriter('type-target', HOME_TEXT);
    }
    
    // For about page
    if (document.getElementById('about-type-target')) {
        initTypewriter('about-type-target', ABOUT_TEXT);
        
        // Fade in profile picture if it exists
        const profilePic = document.getElementById('profile-pic');
        if (profilePic) {
            profilePic.classList.add('fade-in');
        }
    }
});
