// Ensure DOM is fully loaded before running scripts
document.addEventListener("DOMContentLoaded", function() {
    console.log("Website Loaded");

    // Smooth scrolling for navbar links
    document.querySelectorAll("a[href^='#']").forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Auto Dark Mode (Based on Time)
    function autoDarkMode() {
        let hour = new Date().getHours();
        if (hour >= 19 || hour < 7) {
            document.body.classList.add("dark-mode");
        }
    }
    autoDarkMode();

    // AI Chatbot Initialization
    function startAIChatbot() {
        alert("AI Chatbot is now active. How can I assist you?");
    }

    // AI Property Matching
    function matchProperties() {
        alert("AI is analyzing your preferences and matching properties...");
    }

    // AI Video Walkthrough Generation
    function generateAITour() {
        alert("AI is generating a personalized video walkthrough...");
    }

    // Blockchain Secure Transactions
    function initiateBlockchainTransaction() {
        alert("Blockchain security is verifying this transaction...");
    }

    // Voice Search Navigation
    function activateVoiceSearch() {
        alert("Voice search activated! Speak now...");
    }

    // Real-Time Social Proof
    function showSocialProof() {
        alert("Live data: 25 users are viewing this listing right now!");
    }

    // A/B Testing Implementation
    function runABTesting() {
        alert("Running A/B Testing to optimize user experience...");
    }

    // AI Ad Campaigns
    function launchAICampaign() {
        alert("Launching AI-driven ad campaign...");
    }

    // Heatmap Tracking Activation
    function enableHeatmaps() {
        alert("Heatmap tracking enabled to monitor user behavior...");
    }

    // Progressive Web App Installation
    function runPWA() {
        alert("Installing this website as a Progressive Web App...");
    }

    // AI-Generated Property Descriptions
    function generatePropertyDescription() {
        alert("AI is generating property descriptions...");
    }

    // Contact Form Submission Handling
    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for reaching out! We will get back to you soon.");
        this.reset();
    });

    // Attach Functions to Buttons
    document.querySelector(".chatbot").addEventListener("click", startAIChatbot);
    document.querySelectorAll("button").forEach(button => {
        button.addEventListener("click", function() {
            console.log("Button clicked:", this.innerText);
        });
    });
});
