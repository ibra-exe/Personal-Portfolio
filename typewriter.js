/**
 * Reusable typewriter effect
 * @param {string} targetId - The ID of the target element
 * @param {string} text - The text to type
 * @param {number} speed - Typing speed in milliseconds
 */
function initTypewriter(targetId, text, speed = 50) {
    const typeTarget = document.getElementById(targetId);
    if (!typeTarget) return;
    
    typeTarget.textContent = text;
    const fullHeight = typeTarget.scrollHeight;
    typeTarget.style.height = fullHeight + "px";
    typeTarget.style.minHeight = fullHeight + "px";
    typeTarget.textContent = "";
    
    let charIndex = 0;

    function typeChar() {
        if (charIndex < text.length) {
            typeTarget.textContent = text.slice(0, charIndex + 1);
            charIndex++;
            setTimeout(typeChar, speed);
        }
    }

    typeChar();
}

// Define text constants
const HOME_TEXT = "Hi, I'm Ibrahim Shaheen, a Digital Transformation professional specializing in AI, people technology, and strategic digitalization. Currently at NEOM, I lead initiatives that turn complex processes into intelligent, automated systems, achieving a 70% reduction in manual workload and earning SAP's Best HCM Innovation & Automation Award in KSA.";
const ABOUT_TEXT = "Hello! I'm Ibrahim Shaheen (Ibra), a Saudi Software Engineer and Technology Enthusiast born on May 16th, 1993.\n\nCurrently working as a People Technology Senior Specialist at NEOM, I focus on implementing innovative digital solutions that enhance workplace experiences.\n\nI'm passionate about leveraging technology to solve complex problems and create meaningful impact through AI, automation, and digital transformation.";

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
