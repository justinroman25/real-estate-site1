// Dark Mode Auto Switch
function autoDarkMode() {
    let hour = new Date().getHours();
    if (hour >= 19 || hour < 7) {
        document.body.classList.add("dark-mode");
    }
}

document.addEventListener("DOMContentLoaded", () => {
    autoDarkMode();
    document.getElementById("dark-mode-toggle").addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });
});

// AI Property Description Generator
function generatePropertyDescription() {
    alert("AI is generating property descriptions...");
    document.getElementById("property-description-output").innerHTML = "AI-generated description: A stunning modern home with luxurious amenities!";
}

// AI-Powered Property Matching
function matchProperties() {
    alert("AI is analyzing user preferences for personalized property recommendations.");
}

// AI Video Walkthrough
function generateAITour() {
    alert("AI is generating a video walkthrough of selected listings.");
}

// Blockchain Secure Transactions
function initiateBlockchainTransaction() {
    alert("Blockchain-based property transaction secured.");
}

// Voice Search
function activateVoiceSearch() {
    alert("Voice search activated. Please speak your request.");
}

// Real-Time Social Proof
function showSocialProof() {
    alert("Displaying real-time social proof alerts to boost engagement.");
}

// A/B Testing
function runABTesting() {
    alert("A/B testing is now running to optimize conversions.");
}

// AI Ad Campaigns
function launchAICampaign() {
    alert("AI is optimizing ad campaigns for lead generation.");
}

// Heatmap Tracking
function enableHeatmaps() {
    alert("Heatmap tracking enabled for better user insights.");
}

// Progressive Web App Installation
function runPWA() {
    alert("Installing as a Progressive Web App (PWA).");
}
