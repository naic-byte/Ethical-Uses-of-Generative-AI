/**
 * Custom JavaScript for GenAI & Ethics Website
 * Includes initialization for AOS (Animate On Scroll).
 */

document.addEventListener('DOMContentLoaded', (event) => {
    // 1. Initialize AOS (Animate On Scroll) library
    // This provides clean, modern scroll animations as requested.
    AOS.init({
        duration: 800,      // Animation duration in milliseconds
        once: true,         // Whether animation should only happen once - important for a clean feel
        easing: 'ease-in-out' // Easing type
    });

    // 2. Simple example of a dynamic element - could be expanded
    // For a static site, this is primarily a placeholder for future interaction.
    console.log("GenAI Insights website initialized.");
});